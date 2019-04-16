package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Users.Teacher;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController {

    private final TeacherRepository teacherRepository;

    public TeacherController(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addteacher")
    public Teacher addTeacher(@RequestBody Teacher teacher) {
        teacherRepository.save(teacher);
        return teacher;
    }


}
