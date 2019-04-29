package com.huszti.gema.analiseresponsiveweb.database.Users;

import com.huszti.gema.analiseresponsiveweb.database.Exam;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;


@Data
@Document(collection = "students")
public class Student {

    @Id
    private String id;

    @Indexed
    private String neptun;

    @DBRef
    private ArrayList<Exam> exams;

    private String gyakid;


    Student(){
        exams = new ArrayList<>();
    }


}
