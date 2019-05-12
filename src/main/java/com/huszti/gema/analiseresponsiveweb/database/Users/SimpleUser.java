package com.huszti.gema.analiseresponsiveweb.database.Users;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
@Document(collection = "users")
@ApiModel(description = "Felhasználó modell. Felelős az általános bejelentkezési adatok tárolásáért.")
public class SimpleUser {

    @Id
    @ApiModelProperty(notes = "Generált Id. Nem kell kitölteni")
    protected String id;
    @NotBlank
    @ApiModelProperty(notes = "Azonosító Neptun kód")
    protected String neptun;
    @ApiModelProperty(notes = "Felhasználó neve")
    protected String name;
    @ApiModelProperty(notes = "Felhasználó jelszava")
    protected String password;
    @ApiModelProperty(notes = "Felhasználó e-mail címe")
    protected String email;
    @ApiModelProperty(notes = "Felhasználó jogosultsága")
    protected String role;
    @ApiModelProperty(notes = "Felhasználó regisztrációjának időpontja")
    protected LocalDate registration_date;
    @ApiModelProperty(notes = "Felhasználó utolsó bejelentkezése")
    protected LocalDate last_login;


    public SimpleUser() {
        registration_date = LocalDate.now();
        password = "default"; // password = neptun lehetne (de hogy fut le?)
    }


}