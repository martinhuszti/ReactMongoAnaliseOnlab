package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Users.Admin;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.AdminRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/admins")
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
    public ResponseEntity addAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
        return ResponseEntity.ok(admin);
    }

    @PostMapping("/restoreDefault")
    public List<Student> getStudentsByGyakid() {

        MongoClientURI uri = new MongoClientURI(Objects.requireNonNull(env.getProperty("spring.data.mongodb.uri")));

        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase db = mongoClient.getDatabase("analise");
        db.drop();
        SimpleUser adminuser = new SimpleUser();
        adminuser.setNeptun("admin");
        adminuser.setPassword("admin");
        adminuser.setRole("admin");
        userRepository.save(adminuser);

        Admin admin = new Admin();
        admin.setNeptun(adminuser.getNeptun());
        adminRepository.save(admin);


        System.out.println("droppedall");

        //System.out.println(teacher.getLabor_ids());
        //assert teacher != null;
        //Iterable<Labor> labors = laborRepository.findAllById(teacher.getLabor_ids());

        //return studentRepository.findAllByGyakid(teacher.getLabor_ids().get(0));
        return null;


    }

}
