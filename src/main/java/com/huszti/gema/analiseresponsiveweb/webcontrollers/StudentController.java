package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.database.Users.Teacher;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.UpdateStudentRespond;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {


    private final StudentRepository studentRepository;
    private final LaborRepository laborRepository;
    private final TeacherRepository teacherRepository;
    private final UserRepository userRepository;

    public StudentController(StudentRepository studentRepository, LaborRepository laborRepository, TeacherRepository teacherRepository, UserRepository userRepository) {
        this.studentRepository = studentRepository;
        this.laborRepository = laborRepository;
        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity addStudent(@RequestBody Student user) {
        studentRepository.save(user);
        System.out.println("Új student hozzáadva: " + user);
        return ResponseEntity.ok(user);
    }

    @PatchMapping("/gyak")
    public ResponseEntity updateGyakStudent(@RequestBody UpdateStudentRespond user) {
        Student student = studentRepository.findById(user.getId()).orElse(null);
        assert student != null;
        student.setGyakid(user.getGyak());
        System.out.println("Gyak megváltoztatva: " + user);
        studentRepository.save(student);
        return ResponseEntity.ok(student);

    }

    @PostMapping("/getstudentgyak")
    public ResponseEntity getStudentgyak(@RequestBody String neptuns) {
        String getID = studentRepository.findByNeptun(neptuns).getGyakid();
        Labor stdntlab = laborRepository.findById(getID).orElse(null);
        System.out.println("Student lab lekérdezve:" + stdntlab);
        return ResponseEntity.ok(stdntlab);
    }

    @GetMapping("/getById")
    public ResponseEntity<Student> getStudent(@RequestParam String id) {
        SimpleUser user = userRepository.findById(id).orElse(null);

        System.out.println(user);
        if (user == null) {
            System.out.println("Nincs ilyen diák");
            return ResponseEntity.noContent().header("Nincs ilyen diák").build();
        }
        Student student = studentRepository.findByNeptun(user.getNeptun());
        if (student == null) {
            System.out.println("Nincs ilyen diák");
            return ResponseEntity.noContent().header("Nincs ilyen").build();
        }
        System.out.println("Student lekérdezve és megtalálva: " + student);
        return ResponseEntity.ok(student);

    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudentByUserGyakId(@RequestParam String myGyakId) {
        SimpleUser user = userRepository.findById(myGyakId).orElse(null);
        assert user != null;
        if (user.getRole().equals("admin")) {
            return ResponseEntity.ok(studentRepository.findAll());
        }
        if (user.getRole().equals("teacher")) {
            String neptun = user.getNeptun();
            Teacher teacher = teacherRepository.findByNeptun(neptun);
            assert teacher != null;
            ArrayList<Student> allstudents = new ArrayList<>();
            teacher.getLabor_ids().forEach(labid -> allstudents.addAll(studentRepository.findAllByGyakid(labid)));
            System.out.println("Összes student visszaadva GyakId alapján");
            return ResponseEntity.ok(allstudents);
        }

        return ResponseEntity.noContent().header("Nem található student").build();
    }


}
