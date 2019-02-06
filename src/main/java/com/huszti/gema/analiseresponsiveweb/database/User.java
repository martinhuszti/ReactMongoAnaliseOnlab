package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "user")
public class User {

    @Id
    private String id;
    private String name;
    private String password;
    private String email;
    private LocalDate registration_date;
    private LocalDate last_login;

    public User(){}

    public User(String name, String password, String email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.registration_date = LocalDate.now();
        this.last_login = LocalDate.now();
    }

}
