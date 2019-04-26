package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Exam;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.ExamRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ExamController {


    private final ExamRepository examRepository;
    private final StudentRepository studentRepository;

    public ExamController(StudentRepository studentRepository, ExamRepository examRepository) {
        this.studentRepository = studentRepository;
        this.examRepository = examRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addNewExam")
    public ResponseEntity addNewExam(@RequestBody Exam exam, @RequestParam String studentId) {
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) {
            return ResponseEntity.badRequest().body("Nincs ilyen Neptun!");
        }

        Exam savedExam = examRepository.save(exam);

        if (student.getExamsids() == null) {
            student.setExamsids(new ArrayList<>());
        }
        student.getExamsids().add(savedExam.getId());
        studentRepository.save(student);

        System.out.println("New Exam: " + savedExam.toString());
        return ResponseEntity.ok("Sikeresen elmentve.\nExam id: " + savedExam.getId());

    }
}
