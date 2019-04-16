package com.huszti.gema.analiseresponsiveweb.database.Class;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "labors")
public class Labor {

    @Id
    private String id;
    private String title;
    private String place;
    private String time;

    public Labor() {
    }

}
