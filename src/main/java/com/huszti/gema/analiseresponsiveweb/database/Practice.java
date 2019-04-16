package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Practice {
    @Id
    private String id;
    private String time;


    private List<String> student_ids;

}
