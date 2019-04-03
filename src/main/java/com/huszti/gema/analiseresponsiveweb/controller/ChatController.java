package com.huszti.gema.analiseresponsiveweb.controller;

import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ChatController {

    private final UserRepository userRepository;
    private final ChatHistoryDao chatHistoryDao;

    @Autowired
    public ChatController(UserRepository userRepository, ChatHistoryDao chatHistoryDao) {
        this.userRepository = userRepository;
        this.chatHistoryDao = chatHistoryDao;
    }

    /*
     * This MessageMapping annotated method will be handled by
     * SimpAnnotationMethodMessageHandler and after that the Message will be
     * forwarded to Broker channel to be forwarded to the client via WebSocket
     */
    @MessageMapping("/all")
    @SendTo("/topic/all")
    public Map<String, String> post(@Payload Map<String, String> message) {

        SimpleUser repoUser = userRepository.findBy_id((String) message.values().toArray()[1]);
        String name = repoUser.getName();
        message.put(message.keySet().iterator().next(), name);

        message.put("timestamp", Long.toString(System.currentTimeMillis()));
        chatHistoryDao.save(message);

        return message;
    }

    @RequestMapping("/history")
    public List<Map<String, String>> getChatHistory() {
        return chatHistoryDao.get();
    }
}

