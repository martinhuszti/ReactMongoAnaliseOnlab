package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "user")
public class User {

    @Id
    private String id;
    @NotNull @Size(max = 50)
    private String firstName;
    @Size(max = 50)
    private String lastName;
    @NotNull @Size(min = 6, max = 30)
    private String password;
    @Email @NotNull
    private String email;
    @NotNull
    private String neptun;
    @OneToMany
    private List<Exam> exams;
    private LocalDate registration_date;
    private LocalDate last_login;

    public User() {
    }

    public User(String firstName, String password, String email) {
        this.firstName = firstName;
        this.password = password;
        this.email = email;
        this.registration_date = LocalDate.now();
        this.last_login = LocalDate.now();
    }

}
