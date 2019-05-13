package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Users.Teacher;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import com.huszti.gema.analiseresponsiveweb.repository.TeacherRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.var;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/teachers")
@Api(description = "Tanárhoz kapcsolódó api hívások")
public class TeacherController {

    private final TeacherRepository teacherRepository;
    private final LaborRepository laborRepository;

    public TeacherController(TeacherRepository teacherRepository, LaborRepository laborRepository) {
        this.teacherRepository = teacherRepository;
        this.laborRepository = laborRepository;
    }


    @PostMapping
    @ApiOperation("Tanár hozzáadása. ResponseEntityt ad vissza")
    @ApiParam("Teacher-t vár")
    public ResponseEntity addTeacher(@RequestBody Teacher teacher) {
        teacherRepository.save(teacher);
        var labors = laborRepository.findAllById(teacher.getLaborIds());
        if(labors == null) return ResponseEntity.noContent().build();
        labors.forEach(e -> e.setTeacher_id(teacher.getId()));
        System.out.println("Új teacher hozzáadva: " + teacher);
        return ResponseEntity.ok(teacher);
    }


}
