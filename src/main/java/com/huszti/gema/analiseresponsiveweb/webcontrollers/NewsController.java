package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.News;
import com.huszti.gema.analiseresponsiveweb.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//push it to the limit

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsController(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @GetMapping("/top5")
    public List<News> getTop5News() {
        List<News> tempnews = newsRepository.findAll();

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

    @GetMapping
    public List<News> getallNews() {
        return newsRepository.findAll();
    }


    @PostMapping
    public News addNews(@RequestBody News news) {
        newsRepository.save(news);

        return news;
    }

    @DeleteMapping
    public String deleteNews(@RequestBody News news){

        System.out.println(news);
        newsRepository.deleteById(news.getId());
        return "Történt valami";
    }




}
