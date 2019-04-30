package com.huszti.gema.analiseresponsiveweb.database.Users;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "users")
public class SimpleUser {

    @Id
    protected String id;
    protected String neptun;
    protected String name;
    protected String password;
    protected String email;
    protected String role;
    protected LocalDate registration_date;
    protected LocalDate last_login;


    public SimpleUser() {
        registration_date = LocalDate.now();
        password = "default"; // password = neptun lehetne (de hogy fut le?)
    }


}