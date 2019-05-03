package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import com.huszti.gema.analiseresponsiveweb.repository.LaborRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import javax.xml.stream.events.EntityReference;
import java.util.List;

@RestController
@RequestMapping("/api/labors")
@Api(description = "Gyakorlat modellhez kapcsolódó api hívások")
public class LaborController {


    private final LaborRepository laborRepository;

    @Autowired
    public LaborController(LaborRepository laborRepository) {
        this.laborRepository = laborRepository;
    }

    @PostMapping
    @ApiOperation("Új labor hozzáadása")
    public ResponseEntity addNewLab(@RequestBody Labor labor) {
        laborRepository.save(labor);
        System.out.println("Új labor hozzáadva: " + labor);
        return ResponseEntity.ok(labor);
    }

    @GetMapping
    @ApiOperation("Összes labor lekérése. ResponseEntityvel tér vissza")
    public ResponseEntity getAllLabs() {
        var labors = laborRepository.findAll();
        System.out.println("Laborok lekérdezve: " + labors);
        return ResponseEntity.ok(labors);
    }

}
