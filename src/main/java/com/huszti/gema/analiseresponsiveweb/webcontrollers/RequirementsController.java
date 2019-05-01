package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Requirements;
import com.huszti.gema.analiseresponsiveweb.repository.RequirementsRepository;
import lombok.var;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/requirements")
public class RequirementsController {

    private final
    RequirementsRepository requirementsRepository;

    public RequirementsController(RequirementsRepository requirementsRepository) {
        this.requirementsRepository = requirementsRepository;
    }


    @PutMapping
    public ResponseEntity updateRequirements(@RequestBody Requirements requirements) {
        requirementsRepository.deleteAll();
        requirementsRepository.save(requirements);
        return ResponseEntity.ok(requirements);
    }

    @GetMapping
    public ResponseEntity getRequirments() {
        var reqList = requirementsRepository.findAll();
        if (reqList.isEmpty()) {
            requirementsRepository.save(new Requirements());
            reqList = requirementsRepository.findAll();
        }

        return ResponseEntity.ok(reqList.get(0));

    }


}
