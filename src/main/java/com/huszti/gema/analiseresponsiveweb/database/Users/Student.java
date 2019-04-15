package com.huszti.gema.analiseresponsiveweb.database.Users;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@Document(collection = "students")
public class Student {

    @Id
    private String _id;
    private String neptun;

    private List<String> exams_ids;
    private String gyak_id;

    public Student() {
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public void setNeptun(String neptun) {
        this.neptun = neptun;
    }

    public void setExams_ids(List<String> exams_ids) {
        this.exams_ids = exams_ids;
    }

    public void setGyak_id(String gyak_id) {
        this.gyak_id = gyak_id;
    }

    public Student(String _id, String neptun, String gyak_id) {
        this._id = _id;
        this.neptun = neptun;
        this.gyak_id = gyak_id;
    }

    public String get_id() {
        return _id;
    }

    public String getNeptun() {
        return neptun;
    }

    public List<String> getExams_ids() {
        return exams_ids;
    }

    public String getGyak_id() {
        return gyak_id;
    }
}
