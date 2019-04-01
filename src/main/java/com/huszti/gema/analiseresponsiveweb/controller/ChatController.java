package com.huszti.gema.analiseresponsiveweb.controller;
import java.util.List;
import java.util.Map;

import com.huszti.gema.analiseresponsiveweb.database.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @Autowired
    private ChatHistoryDao chatHistoryDao;

    /*
     * This MessageMapping annotated method will be handled by
     * SimpAnnotationMethodMessageHandler and after that the Message will be
     * forwarded to Broker channel to be forwarded to the client via WebSocket
     */
    @MessageMapping("/all")
    @SendTo("/topic/all")
    public Map<String, String> post(@Payload Map<String, String> message) {
        message.put("timestamp", Long.toString(System.currentTimeMillis()));
        chatHistoryDao.save(message);
        return message;
    }

    @RequestMapping("/history")
    public List<Map<String, String>> getChatHistory() {
        return chatHistoryDao.get();
    }
}

