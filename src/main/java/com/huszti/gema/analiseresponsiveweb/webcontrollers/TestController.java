package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.mongodb.DB;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {


    MongoDatabase db;

    public TestController() {
        this.db = new MongoClient().getDatabase("analise");;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addtest")
    public String getSelfStudent(@RequestBody String teacherId) {
db.createCollection("elsoteszteset");
        return "asd";
    }
}
