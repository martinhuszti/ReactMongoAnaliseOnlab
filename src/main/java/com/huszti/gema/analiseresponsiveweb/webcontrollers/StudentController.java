package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {


    private final StudentRepository studentRepository;
    private final LaborRepository laborRepository;
    private final TeacherRepository teacherRepository;

    public StudentController(StudentRepository studentRepository, LaborRepository laborRepository, TeacherRepository teacherRepository) {
        this.studentRepository = studentRepository;
        this.laborRepository = laborRepository;
        this.teacherRepository = teacherRepository;
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addstudent")
    public Student addStudent(@RequestBody Student user) {
        studentRepository.save(user);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/getstudentgyak")
    public Labor getStudentgyak(@RequestBody String neptuns) {
        System.out.println(studentRepository.findByNeptun(neptuns));
        String getID = studentRepository.findByNeptun(neptuns).getGyakid();
        Labor stdntlab = laborRepository.findById(getID).orElse(null);
        System.out.println(stdntlab);
        return stdntlab;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllStudent")
    public List<Student> getStudentsByGyakid(@RequestParam String id) {
        MongoClient mongoClient = new MongoClient();
        MongoDatabase db = mongoClient.getDatabase("analise");
        ArrayList<String> cols = new ArrayList<>();
        db.listCollectionNames().map(cols::add);
        cols.forEach(c -> {
            System.out.println(c);
            db.getCollection(c).drop();
        });

        System.out.println("droppedall");

        //System.out.println(teacher.getLabor_ids());
        //assert teacher != null;
        //Iterable<Labor> labors = laborRepository.findAllById(teacher.getLabor_ids());

        //return studentRepository.findAllByGyakid(teacher.getLabor_ids().get(0));
        return null;


    }

}
