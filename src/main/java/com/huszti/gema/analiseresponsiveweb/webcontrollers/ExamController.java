package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Exam;
import com.huszti.gema.analiseresponsiveweb.database.Test;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.ExamRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TestRepository;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject.TestRespond;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/exams")
@Api(description = "Számonkérésekre vonatkozó modellekhez kapcsolódó api hívások")
public class ExamController {


    private final ExamRepository examRepository;
    private final StudentRepository studentRepository;
    private final TestRepository testRepository;
    private final UserRepository userRepository;

    public ExamController(ExamRepository examRepository, StudentRepository studentRepository, TestRepository testRepository, UserRepository userRepository) {
        this.examRepository = examRepository;
        this.studentRepository = studentRepository;
        this.testRepository = testRepository;
        this.userRepository = userRepository;
    }

    @PostMapping //addNewExam
    @ApiOperation("Egy új vizsga felvétele egy diákhoz. ResponseEntityvel tér vissza")
    @ApiParam("Body: Vizsgát vár. Header: Diák és Számonkérés Id-t vár")
    public ResponseEntity addNewExam(@RequestBody Exam exam, @RequestParam String studentId, @RequestParam String examType) {

        Test test = testRepository.findById(examType).orElseThrow(() -> new RuntimeException("Nem található test!"));

        //Megkeres Student
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) {
            return ResponseEntity.badRequest().body("Nincs ilyen neptunkodú diák!");
        }
        exam.setType(test.getTitle());

        //Megkeres Exam
        Exam savedExam = examRepository.save(exam);

        //Hozzáad Studenthez Exam
        if (student.getExams() == null) {
            student.setExams(new ArrayList<>());
        }
        student.getExams().add(savedExam);
        studentRepository.save(student);

        //Hozzáad ExamTypeCol-hoz Exam
        test.getExams().add(exam);
        testRepository.save(test);


        System.out.println("Új exam felvéve: " + savedExam);

        return ResponseEntity.ok("Sikeresen elmentve.\nExam id: " + savedExam.getId());

    }

    @PostMapping("/tests")
    @ApiOperation("Új vizsga felvétele. ResponseEntityvel tér vissza")
    @ApiParam("Body: Test típusú Vizsgát vár.")
    public ResponseEntity addNewTest(@RequestBody Test test) {
        SimpleUser user = userRepository.findById(test.getCreator()).orElse(null);
        if (user == null) {
            System.out.println("User nem található aki létrehozza");
            ResponseEntity.badRequest().body("User nem található aki létrehozza");
        }
        assert user != null;
        if (user.getRole().equals("admin")) {
            testRepository.save(test);
            System.out.println("Új teszt elmentve." + test);
            return ResponseEntity.ok("Sikeresen elmentve az új teszt: " + test);
        }
        return ResponseEntity.badRequest().body("Nincs engedélye létrehozni új testet!");
    }

    @GetMapping("/tests")
    @ApiOperation("Vissza adja az össze létező számonkérést. ResponseEntityvel tér vissza")
    public ResponseEntity getAllTest() {

        List<Test> getAllTest = testRepository.findAll();
        ArrayList<TestRespond> testResponds = new ArrayList<>();
        for (Test item : getAllTest) {
            testResponds.add(new TestRespond(item.getTitle(), item.getType(), item.getId()));
        }
        System.out.println("Összes teszt lekérdezve: " + testResponds);
        return ResponseEntity.ok(testResponds);
    }

}
