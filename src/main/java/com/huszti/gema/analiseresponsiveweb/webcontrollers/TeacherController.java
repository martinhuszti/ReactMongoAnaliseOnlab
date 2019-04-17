package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Users.Teacher;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class TeacherController {

    private final TeacherRepository teacherRepository;
    private final LaborRepository laborRepository;

    public TeacherController(TeacherRepository teacherRepository, LaborRepository laborRepository) {
        this.teacherRepository = teacherRepository;
        this.laborRepository = laborRepository;
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addteacher")
    public Teacher addTeacher(@RequestBody Teacher teacher) {
        teacherRepository.save(teacher);

        System.out.println("Teacher added: ID: " + teacher.getId() + " NAME: " + teacher.getName() + " NEPTUN: " +
                teacher.getNeptun() + " LBORIDs: " + teacher.getLabor_ids());


        laborRepository.findAllById(teacher.getLabor_ids())
                .forEach(e -> e.setTeacher_id(teacher.getId()));
        return teacher;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/getselfstudent")
    public ArrayList getSelfStudent(@RequestBody String teacherId) {
        Teacher teacher=teacherRepository.findById(teacherId).orElse(null);
        if(teacher==null){
            System.out.println("null volt ID alapján atatatalálat");
            return null;
        }

        ArrayList students=new ArrayList();
        return students;
    }

}
