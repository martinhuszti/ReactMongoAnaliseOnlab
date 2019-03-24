package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.ArrayList;

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

    @ManyToOne
    private ArrayList<Exam> exams;

    @OneToMany
    ArrayList<User> gyakvez;


    public User() {
        role = "student";
        registration_date = LocalDate.now();
        last_login = LocalDate.now();
    }

}