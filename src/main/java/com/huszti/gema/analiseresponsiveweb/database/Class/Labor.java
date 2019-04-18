package com.huszti.gema.analiseresponsiveweb.database.Class;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "labors")
public class Labor {

    @Id
    private String id;
    private String title;
    private String place;
    private String time;
    private List<String> student_ids;
    private String teacher_id;

    public Labor() {
    }

}
