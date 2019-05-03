package com.huszti.gema.analiseresponsiveweb.database.Users;

import com.huszti.gema.analiseresponsiveweb.database.Exam;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;


@Data
@Document(collection = "students")
@ApiModel(description = "Diák modell")
public class Student {

    @Id
    @ApiModelProperty(notes ="Generált Id. Nem kell kitölteni")
    private String id;

    @Indexed
    @NotBlank
    @ApiModelProperty(notes ="Azonosító Neptun kód")
    private String neptun;

    @DBRef
    @ApiModelProperty(notes ="Diákhoz tartozó számonkérések")
    private ArrayList<Exam> exams;

    @ApiModelProperty(notes ="Diákhoz tartozó gyakorlat")
    private String gyakid;


    Student() {
        exams = new ArrayList<>();
    }


}
