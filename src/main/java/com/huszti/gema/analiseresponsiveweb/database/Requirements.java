package com.huszti.gema.analiseresponsiveweb.database;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document
@ApiModel(description = "Követelmény modell.")
public class Requirements {

    @Id
    @ApiModelProperty(notes = "Generált Id. Nem kell kitölteni")
    private String id;

    @ApiModelProperty(notes = "Jelenléthez szükséges rövid szöveg")
    private String presence;

    @ApiModelProperty(notes = "Aláírás rövid leírása")
    private String signature;

    @ApiModelProperty(notes = "Vizsgához szükséges rövid szöveg")
    private String exam;

    @ApiModelProperty(notes = "Zh-hoz szükséges rövid szöveg")
    private String tests;

    @ApiModelProperty(notes = "Pontszámítás rövid leírása")
    private String points;

    @ApiModelProperty(notes = "Utolsó módosítás. Automatikusan generálódik konstruktorban")
    private LocalDate modification_date;


    public Requirements() {

        this.modification_date = LocalDate.now();
    }

}
