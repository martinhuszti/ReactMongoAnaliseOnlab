package com.huszti.gema.analiseresponsiveweb.web;

import com.huszti.gema.analiseresponsiveweb.database.News;
import com.huszti.gema.analiseresponsiveweb.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        List<News> list =tempnews.subList(size-6,size-1);

        Collections.reverse(list);
        System.out.println(list);

        return list;

    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addnews")
    public News addNews(@RequestBody News news) {
        newsRepository.save(news);
        return news;
    }


}
