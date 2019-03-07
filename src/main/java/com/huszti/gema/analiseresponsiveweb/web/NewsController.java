package com.huszti.gema.analiseresponsiveweb.web;

import com.huszti.gema.analiseresponsiveweb.database.News;
import com.huszti.gema.analiseresponsiveweb.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

//push it to the limit

@RestController
public class NewsController {

    @Autowired
    private NewsRepository newsRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getnews")
    public List<News> getNews()
    {
        return newsRepository.findAll();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addnews")
    public News addNews(@RequestBody News news)
    {
        newsRepository.save(news);
        return news;
    }


}
