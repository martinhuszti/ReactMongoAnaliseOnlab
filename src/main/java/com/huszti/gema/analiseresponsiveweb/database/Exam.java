package com.huszti.gema.analiseresponsiveweb.database;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "exams")
@ApiModel(description = "Emberekhez rendelt számonkérés")
public class Exam {

    @Id
    @ApiModelProperty(notes ="Generált Id. Nem kell kitölteni")
    private String id;

    @ApiModelProperty(notes ="Számonkérés típusa")
    private String type;

    @ApiModelProperty(notes ="Számonkérésen szerzett pont")
    private float score;

    @ApiModelProperty(notes ="Számonkérésen szerzett jegy")
    private float mark;


    public Exam() {
    }

}
