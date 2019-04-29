package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/labors")
public class LaborController {


    private final LaborRepository laborRepository;

    @Autowired
    public LaborController(LaborRepository laborRepository) {
        this.laborRepository = laborRepository;
    }

    @PostMapping
    public Labor addlab(@RequestBody Labor labor) {

        laborRepository.save(labor);
        return  labor;
    }

    @GetMapping
    public List<Labor> getlabors() {
        return laborRepository.findAll();

    }

}
