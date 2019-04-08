package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LaborController {


    private final LaborRepository laborRepository;

    @Autowired
    public LaborController(LaborRepository laborRepository) {
        this.laborRepository = laborRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addlab")
    public Labor addlab(@RequestBody Labor labor) {

        laborRepository.save(labor);
        return  labor;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getLabs")
    public List<Labor> getUsers() {
        return laborRepository.findAll();

    }

}
