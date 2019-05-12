package com.huszti.gema.analiseresponsiveweb.database.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Data
@Document(collection = "admin")
@ApiModel(description = "Admin modell. Rögzíti kinek van legnagyobb jogosultsága")
public class Admin {
    @Id
    @ApiModelProperty(notes = "Generált Id. Nem kell kitölteni")
    protected String id;
    @ApiModelProperty(notes = "Neptun kód. Azonosításra szolgáll")
    @NotBlank
    protected String neptun;


    public Admin() {
    }


}
