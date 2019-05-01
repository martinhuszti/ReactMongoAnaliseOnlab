package com.huszti.gema.analiseresponsiveweb.database;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document
public class Requirements {

    @Id
    private String id;
    private String presence;
    private String signature;
    private String exam;
    private String tests;
    private String points;
    private LocalDate modification_date;


    public Requirements() {

        this.modification_date = LocalDate.now();
    }

}
