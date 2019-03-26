package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document(collection = "exams")
public class Exam {

    @Id
    private String _id;
    private String name;
    private float score;
    private float mark;

    public Exam() {
    }

}
