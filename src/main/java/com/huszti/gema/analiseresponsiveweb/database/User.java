package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String _id;
    private String neptun;
    private String name;
    private String password;
    private String email;
    private String role;
    private LocalDate registration_date;
    private LocalDate last_login;

    private List<Exam> exams;

    private String gyakvez_id;

    public User() {
        role = "student";
        registration_date = LocalDate.now();
    }

}