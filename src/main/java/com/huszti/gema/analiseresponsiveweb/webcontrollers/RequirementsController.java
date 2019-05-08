package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Requirements;
import com.huszti.gema.analiseresponsiveweb.repository.RequirementsRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.var;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/requirements")
@Api(description = "Követelményekhez kapcsolódó api hívások")
public class RequirementsController {

    private final
    RequirementsRepository requirementsRepository;

    public RequirementsController(RequirementsRepository requirementsRepository) {
        this.requirementsRepository = requirementsRepository;
    }


    @PutMapping
    @ApiOperation("Követelmények frissírtése. ResponseEntityt ad vissza")
    @ApiParam("Requirements-et vár")
    public ResponseEntity updateRequirements(@RequestBody Requirements requirements) {
        requirementsRepository.deleteAll();
        requirementsRepository.save(requirements);
        System.out.println("Requirments frissítve: " + requirements);
        return ResponseEntity.ok(requirements);
    }

    @GetMapping
    @ApiOperation("Követelmények visszaadása. ResponseEntityt ad vissza, amiben benne van")
    public ResponseEntity getRequirments() {
        var reqList = requirementsRepository.findAll();
        if (reqList.isEmpty()) {
            requirementsRepository.save(new Requirements());
            reqList = requirementsRepository.findAll();
        }
        System.out.println("Requirments lekérve: " + reqList);

        return ResponseEntity.ok(reqList.get(0));

    }


}
