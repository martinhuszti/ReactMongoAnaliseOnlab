package com.huszti.gema.analiseresponsiveweb.database;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Data
@Document(collection = "news")
@ApiModel(description = "Hírek modell")
public class News {
    @Id
    @ApiModelProperty(notes = "Generált Id. Nem kell kitölteni")
    private String id;

    @NotBlank
    @ApiModelProperty(notes = "Hír címe")
    private String title;

    @ApiModelProperty(notes = "Hír szövege")
    private String text;

}
