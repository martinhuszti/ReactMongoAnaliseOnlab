package com.huszti.gema.analiseresponsiveweb.database;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "test")
@ApiModel(description = "Számonkérés adataira vonatkozó osztály")
public class Test {

    @Id
    @ApiModelProperty(notes = "Generált Id. Nem kell kitölteni")
    private String id;

    @NotBlank
    @ApiModelProperty(notes = "Számonkérés neve")
    private String title;

    @ApiModelProperty(notes = "Számonkérés típusa")
    private String type;

    @ApiModelProperty(notes = "Számonkérés ideje")
    private String time;

    @ApiModelProperty(notes = "Számonkérés készítője.")
    private String creator;

    @ApiModelProperty(notes = "Készítés ideje. Automatikusan generálódik konstruktorban")
    private LocalDate creationTime;

    @DBRef(lazy = true)
    @ApiModelProperty(notes = "Hozzá és diákokhoz tartozó számonkérés. Ebbe tárolódnak a pontok, jegyek, stb.")
    private List<Exam> exams;


    public Test() {
        creationTime = LocalDate.now();
        exams = new ArrayList<>();
    }


}
