package com.huszti.gema.analiseresponsiveweb.database;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "news")
public class News {
    @Id
    private String id;
    private String title;
    private String text;

    public News() {
    }

    public String getTitle() {
        return title;
    }

    public String getId() {
        return id;
    }

    public String getText() {
        return text;
    }
}
