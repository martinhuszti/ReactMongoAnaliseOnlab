package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.google.gson.Gson;
import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.DataRespond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.LaborRespond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.Respond;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.RoleRespond;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

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
@RequestMapping("/api/users")
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
    public SimpleUser addUser(@RequestBody SimpleUser user) {
        userRepository.save(user);
        return user;
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody SimpleUser user) {

        SimpleUser repoUser = userRepository.findByNeptun(user.getNeptun());

        if (repoUser == null) {
            System.out.println(user.getNeptun() + "tried to connect, but not found in repository");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Ilyen neptun nem található a rendszerben.");
        }

        if (repoUser.getPassword().equals(user.getPassword())) {

            repoUser.setLast_login(LocalDate.now());
            userRepository.save(repoUser);

            System.out.println(repoUser.getNeptun() + " logged in with " + repoUser.getId() + " id");

            HashMap<String, String> json = new HashMap<>();
            json.put("id", repoUser.getId());
            System.out.println(json);

            return new ResponseEntity<>(json, HttpStatus.OK);

        }
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("valami hiba történt");
    }

    @GetMapping("/details")
    public DataRespond getDetails(@RequestParam String userId) {


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
                System.out.println(studentRepository.findByNeptun(tempuser.getNeptun()));
                String getID = studentRepository.findByNeptun(tempuser.getNeptun()).getGyakid();
                Labor templab = laborRepository.findById(getID).orElse(null);

                assert templab != null;
                LaborRespond tempRespondLab = new LaborRespond(templab.getTitle(), templab.getPlace(), templab.getTime());

                backrespond.addGyakList(tempRespondLab);
                System.out.println(getID);
                System.out.println(templab);
                System.out.println("GETIDstudent");
                break;
            }
            case "teacher": {
                List<String> getID = teacherRepository.findByNeptun(tempuser.getNeptun()).getLabor_ids();
                Iterable<Labor> asd = laborRepository.findAllById(getID);
                List<LaborRespond> tempLabors = new ArrayList<>();
                for (Labor ids : asd) {
                    System.out.println("gyakid");
                    LaborRespond tempRespondLab = new LaborRespond(ids.getTitle(), ids.getPlace(), ids.getTime());
                    tempLabors.add(tempRespondLab);
                    System.out.println(tempRespondLab);
                }
                backrespond.addAllGyakList(tempLabors);
                System.out.println(backrespond.getGyak().get(0));
                System.out.println("Eddig eljött");
                break;
            }
            case "admin": {
                Iterable<Labor> asd = laborRepository.findAll();
                List<LaborRespond> tempLabors = new ArrayList<>();
                for (Labor ids : asd) {
                    System.out.println("adminid");
                    LaborRespond tempRespondLab = new LaborRespond(ids.getTitle(), ids.getPlace(), ids.getTime());
                    tempLabors.add(tempRespondLab);
                    System.out.println(tempRespondLab);
                }
                backrespond.addAllGyakList(tempLabors);
                break;
            }
        }

        return backrespond;

    }

    @PostMapping("/password")
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

  /*  @GetMapping("/getUsers")
    public List<SimpleUser> getUsers() {
        return userRepository.findAll();

    }*/

    @GetMapping("/role")
    public String getrole(@RequestParam String userId) {

        return Objects.requireNonNull(userRepository.findById(userId).orElse(null)).getRole();
    }

    @PostMapping("/role/menu")
    public String getrolemenu(@RequestBody String user) {


        System.out.println(user);
        String temprole = Objects.requireNonNull(userRepository.findById(user).orElse(null)).getRole();

        ArrayList<Respond> temprespond = new RoleRespond(temprole).getRoleRespond();

        Gson gson = new Gson();

        return gson.toJson(temprespond);
    }

}
