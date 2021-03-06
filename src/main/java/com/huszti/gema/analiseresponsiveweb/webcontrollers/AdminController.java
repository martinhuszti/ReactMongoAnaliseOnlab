package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Users.Admin;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.repository.AdminRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/api/admins")
@Api(description = "Admin modellhez kapcsolódó api hívások")
public class AdminController {

    private final Environment env;

    private final AdminRepository adminRepository;
    private final UserRepository userRepository;

    public AdminController(AdminRepository adminRepository, Environment env, UserRepository userRepository) {
        this.adminRepository = adminRepository;
        this.env = env;
        this.userRepository = userRepository;
    }

    @PostMapping
    @ApiOperation("Admin hozzáadása. Response Entityvel tér vissza.")
    @ApiParam("Admin modellt vár")
    public ResponseEntity addAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
        System.out.println("New admin added: " + admin);
        return ResponseEntity.ok(admin);
    }

    @PostMapping("/restoreDefault")
    @ApiOperation("Nullázza az adatbázist, majd felvesz egy admin jogosultságú felhasználót")
    public ResponseEntity getStudentsByGyakid() {

        MongoClientURI uri = new MongoClientURI(Objects.requireNonNull(env.getProperty("spring.data.mongodb.uri")));

        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase db = mongoClient.getDatabase("analise");
        db.drop(); //adatbázis törlése

        SimpleUser adminuser = new SimpleUser();
        adminuser.setNeptun("admin");
        adminuser.setPassword("admin");
        adminuser.setRole("admin");
        userRepository.save(adminuser);

        Admin admin = new Admin();
        admin.setNeptun(adminuser.getNeptun());
        adminRepository.save(admin);
        System.out.println("Adatbázis visszaállítva default állapotra");


        return ResponseEntity.ok("Adatbázis visszaállítva default állapotra.");


    }

}
