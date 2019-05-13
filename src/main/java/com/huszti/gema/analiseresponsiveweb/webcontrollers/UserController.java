package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.google.gson.Gson;
import com.huszti.gema.analiseresponsiveweb.database.Labor;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.DataRespond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.LaborRespond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.Respond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.RoleRespond;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.Data;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@Data
@Api(description = "Jelszó változtatás modellje")
class PasswordObject {
    private String id;
    private String oldPassword;
    private String newPassword;
}

@RestController
@RequestMapping("/api/users")
@Api(description = "User-ekhez kapcsolódó api hívások")
public class UserController {

    private UserRepository userRepository;
    private StudentRepository studentRepository;
    private LaborRepository laborRepository;
    private TeacherRepository teacherRepository;


    @Autowired
    public UserController(TeacherRepository teacherRepository, UserRepository userRepository, StudentRepository studentRepository, LaborRepository laborRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.laborRepository = laborRepository;
        this.teacherRepository = teacherRepository;
    }

    @PostMapping
    @ApiOperation("User hozzáadása")
    @ApiParam("SimpleUser-t vár")
    public ResponseEntity addUser(@RequestBody SimpleUser user) {
        if (userRepository.findByNeptun(user.getNeptun()) != null) {
            return ResponseEntity.badRequest().build();
        }
        userRepository.save(user);
        System.out.println("Új user hozzáadva: " + user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    @ApiOperation("Bejelentkezésért felelős POST")
    @ApiParam("SimpleUser-t vár")
    public ResponseEntity loginUser(@RequestBody SimpleUser user) {

        SimpleUser repoUser = userRepository.findByNeptun(user.getNeptun());

        if (repoUser == null) {
            System.out.println(user.getNeptun() + "tried to connect, but not found in repository");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Ilyen neptun nem található a rendszerben.");
        }

        if (repoUser.getPassword().equals(user.getPassword())) {

            repoUser.setLast_login(LocalDate.now());
            userRepository.save(repoUser);

            System.out.println("Felhasnzáló bejelentkezett: " + repoUser);

            HashMap<String, String> json = new HashMap<>();
            json.put("id", repoUser.getId());

            return new ResponseEntity<>(json, HttpStatus.OK);

        }
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("valami hiba történt");
    }

    @GetMapping("/details")
    @ApiOperation("User adatait adja vissza")
    @ApiParam("UserId-t vár")
    public ResponseEntity getDetails(@RequestParam String userId) {


        SimpleUser tempuser = userRepository.findById(userId).orElse(null);
        DataRespond backrespond = new DataRespond();
        assert tempuser != null;
        backrespond.setName(tempuser.getName());
        backrespond.setNeptun(tempuser.getNeptun());
        backrespond.setEmail(tempuser.getEmail());
        backrespond.setLast_login(tempuser.getLast_login());
        backrespond.setRegistration_date(tempuser.getRegistration_date());

        switch (tempuser.getRole()) {
            case "student": {
                String getID = studentRepository.findByNeptun(tempuser.getNeptun()).getGyakid();
                Labor templab = laborRepository.findById(getID).orElse(null);

                assert templab != null;
                LaborRespond tempRespondLab = new LaborRespond(templab.getTitle(), templab.getPlace(), templab.getTime());

                backrespond.addGyakList(tempRespondLab);
                break;
            }
            case "teacher": {
                List<String> getID = teacherRepository.findByNeptun(tempuser.getNeptun()).getLaborIds();
                Iterable<Labor> asd = laborRepository.findAllById(getID);
                setBackRespond(backrespond, asd);
                break;
            }
            case "admin": {
                Iterable<Labor> asd = laborRepository.findAll();
                setBackRespond(backrespond, asd);
                break;
            }
            default:
                break;
        }

        return ResponseEntity.ok(backrespond);

    }

    private void setBackRespond(DataRespond backrespond, Iterable<Labor> asd) {
        List<LaborRespond> tempLabors = new ArrayList<>();
        for (Labor ids : asd) {
            LaborRespond tempRespondLab = new LaborRespond(ids.getTitle(), ids.getPlace(), ids.getTime());
            tempLabors.add(tempRespondLab);
        }
        backrespond.addAllGyakList(tempLabors);
    }

    @PostMapping("/password")
    @ApiOperation("User jelszó változtatás.")
    @ApiParam("PasswordObject-t vár")
    public ResponseEntity changePassword(@RequestBody PasswordObject obj) {
        SimpleUser us = userRepository.findById(obj.getId()).orElse(null);
        if (us == null)
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Nincs ilyen id");
        if (!us.getPassword().equals(obj.getOldPassword()))
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT)
                    .body("Nem egyezik a régi jelszó, és amúgy meg egy teapot vagyok");
        us.setPassword(obj.getNewPassword());
        userRepository.save(us);
        System.out.println("Passoword changed: *****");
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Sikeres valtoztatas");
    }


    @GetMapping("/role")
    @ApiOperation("User fokozatát adjva vissza ResponseEntity-vel")
    @ApiParam("UserId-t vár")
    public ResponseEntity getrole(@RequestParam String userId) {
        var role = Objects.requireNonNull(userRepository.findById(userId).orElse(null)).getRole();
        System.out.println("Role lekérdezve: " + role);
        return ResponseEntity.ok(role);
    }

    @PostMapping("/role/menu")
    @ApiOperation("User fokozatához tartozó menüt adja. ResponseEntityt ad vissza")
    @ApiParam("UserId-t vár")
    public ResponseEntity getrolemenu(@RequestBody String user) {
        String temprole = Objects.requireNonNull(userRepository.findById(user).orElse(null)).getRole();
        ArrayList<Respond> temprespond = new RoleRespond(temprole).getRoleRespond();
        Gson gson = new Gson();
        var resp = gson.toJson(temprespond);
        System.out.println("Rolemenu lekérdezve");
        return ResponseEntity.ok(resp);
    }

}
