package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class StudentController {


    private final StudentRepository studentRepository;
    private final LaborRepository laborRepository;

    public StudentController(StudentRepository studentRepository, LaborRepository laborRepository) {
        this.studentRepository = studentRepository;
        this.laborRepository = laborRepository;
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
        String getID= studentRepository.findByNeptun(neptuns).getGyak_id();
if(getID==null){
    try {
        throw new Exception();
    } catch (Exception e) {
        e.printStackTrace();
    }
}
        System.out.println(getID);
        Labor stdntlab= laborRepository.findBy_id(getID);
        System.out.println(stdntlab);
        return stdntlab;

    }
}
