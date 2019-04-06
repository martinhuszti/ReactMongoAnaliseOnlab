package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

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
    public SimpleUser addUser(@RequestBody SimpleUser user) {
        userRepository.save(user);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/loginUser", produces = "application/json")
    public ResponseEntity loginUser(@RequestBody SimpleUser user) {

        SimpleUser repoUser = userRepository.findByNeptun(user.getNeptun());

        if (repoUser == null) {
            System.out.println(user.getNeptun() + "tried to connect, but not found in repository");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Ilyen neptun nem található a rendszerben.");
        }

        if (repoUser.getPassword().equals(user.getPassword())) {

            repoUser.setLast_login(LocalDate.now());
            userRepository.save(repoUser);

            System.out.println(repoUser.getNeptun() + " logged in with " + repoUser.get_id() +" id");

            HashMap<String, String> json = new HashMap<>();
            json.put("id",repoUser.get_id());
            System.out.println(json);

            return new ResponseEntity<>(json,HttpStatus.OK);

        }
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("valami hiba történt");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/getDetails")
    public SimpleUser getDetails(@RequestParam String id) {
        return userRepository.findById(id).orElse(null);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/changePassword", produces = "application/json")
    ResponseEntity changePassword(@RequestBody passObj obj) {
        SimpleUser us = userRepository.findById(obj.id).orElse(null);
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
    public List<SimpleUser> getUsers() {
        return userRepository.findAll();

    }

}
