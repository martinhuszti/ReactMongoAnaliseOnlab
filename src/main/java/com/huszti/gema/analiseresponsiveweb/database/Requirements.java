package com.huszti.gema.analiseresponsiveweb.database;


import lombok.Data;

import java.time.LocalDate;

@Data
public class Requirements {


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
