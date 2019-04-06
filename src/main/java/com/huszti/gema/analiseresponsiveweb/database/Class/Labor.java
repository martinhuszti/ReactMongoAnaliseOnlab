package com.huszti.gema.analiseresponsiveweb.database.Class;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "labors")
public class Labor {

    @Id
    private String _id;
    private String title;
    private String place;
    private String time;

    public Labor() {
    }

    public Labor(String _id, String title, String place, String time) {
        this._id = _id;
        this.title = title;
        this.place = place;
        this.time = time;
    }

    public String get_id() {
        return _id;
    }

    public String getTitle() {
        return title;
    }

    public String getPlace() {
        return place;
    }

    public String getTime() {
        return time;
    }
}
