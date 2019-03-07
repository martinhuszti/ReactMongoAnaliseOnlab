package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String _id;
    private String neptun_code;
    private String name;
    private String password;
    private String email;
    private String role;
    private LocalDate registration_date;
    private LocalDate last_login;


    public User() {
        role = "student";
        registration_date = LocalDate.now();
        last_login = LocalDate.now();
    }

}