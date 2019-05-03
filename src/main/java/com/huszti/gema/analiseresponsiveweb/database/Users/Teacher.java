package com.huszti.gema.analiseresponsiveweb.database.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Document(collection = "teacher")
@ApiModel(description = "Diák modell")
public class Teacher {

    @Id
    @ApiModelProperty(notes ="Generált Id. Nem kell kitölteni")
    private String id;

    @ApiModelProperty(notes ="Tanár neve")
    private String name;

    @NotBlank
    @ApiModelProperty(notes ="Azonosító Neptun kód")
    private String neptun;

    @ApiModelProperty(notes ="Tanárhoz tartozó gyakorlatok")
    private List<String> labor_ids;

    Teacher() {

    }
}
