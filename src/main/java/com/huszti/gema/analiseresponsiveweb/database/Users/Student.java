package com.huszti.gema.analiseresponsiveweb.database.Users;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@Document(collection = "students")
public class Student {

    @Id
    private String id;
    private String neptun;

    private List<String> exams_ids;
    private String gyak_id;

    public Student() {
    }


}
