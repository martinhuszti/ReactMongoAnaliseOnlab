package com.huszti.gema.analiseresponsiveweb.web;

import com.huszti.gema.analiseresponsiveweb.database.User;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Map;

//push it to the limit

@Data
class passObj {
    String id;
    String oldPassword;
    String newPassword;

    passObj() {
    }
}

@RestController
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

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
        if (repoUser == null)
            return Collections.singletonMap("response", "-1");

        if (repoUser.getPassword().equals(user.getPassword())) {
            repoUser.setLast_login(LocalDate.now());
            userRepository.save(repoUser);
            return Collections.singletonMap("response", repoUser.get_id());
        } else
            return Collections.singletonMap("response", "-1");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/getDetails")
    public User getDetails(@RequestParam String id) {
        return userRepository.findById(id).orElse(null);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/changePassword", produces = "application/json")
    ResponseEntity changePassword(@RequestBody passObj obj) {
        User us = userRepository.findById(obj.id).orElse(null);
        if (us == null)
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Nincs ilyen id");
        if (!us.getPassword().equals(obj.oldPassword))
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT)
                    .body("Nem egyezik a régi jelszó, és amúgy meg egy teapot vagyok");
        us.setPassword(obj.newPassword);
        userRepository.save(us);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Sikeres valtoztatas");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/getUsers")
    public List<User> getUsers() {
        return userRepository.findAll();

    }

}
