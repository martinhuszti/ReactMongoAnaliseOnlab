package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.News;
import com.huszti.gema.analiseresponsiveweb.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//push it to the limit

@RestController
public class NewsController {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsController(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getnews")
    public List<News> getNews() {

        ArrayList<News> tempnews = new ArrayList(newsRepository.findAll());

        int size = tempnews.size();
        if(size<=6){

            Collections.reverse(tempnews);
            System.out.println(tempnews);
            return  tempnews;
        }
        else{
            List<News> list=tempnews.subList(size-5,size);

            Collections.reverse(list);
            System.out.println(list);
            return list;
        }


    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getallnews")
    public List<News> getallNews() {

        return newsRepository.findAll();

    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addnews")
    public News addNews(@RequestBody News news) {
        newsRepository.save(news);

        return news;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/deletenews")
    public String deleteNews(@RequestBody News news){

        System.out.println(news);
        newsRepository.deleteById(news.getId());
        return "Történt valami";
    }




}
