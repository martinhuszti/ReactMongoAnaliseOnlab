package com.huszti.gema.analiseresponsiveweb.web;

import com.huszti.gema.analiseresponsiveweb.database.User;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

//push it to the limit

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/adduser")
    public User addUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/loginUser", produces = "application/json")
    public Map loginUser(@RequestBody User user) {
        User repoUser = userRepository.findByNeptun(user.getNeptun());
        if (repoUser == null) return Collections.singletonMap("response", "-1");

        if (repoUser.getPassword().equals(user.getPassword()))
            return Collections.singletonMap("response", repoUser.get_id());
        else return Collections.singletonMap("response", "-1");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/getDetails")
    public User getDetails(@RequestParam String id) {
        User us = userRepository.findById(id).orElse(null);
        return us;
    }


}
