package com.huszti.gema.analiseresponsiveweb.database.Users;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "teacher")
public class Teacher {

    @Id
    protected String id;
    protected String name;
    protected String neptun;
    protected List<String> labor_ids;
}
