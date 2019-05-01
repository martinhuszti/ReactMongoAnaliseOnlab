package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.News;
import com.huszti.gema.analiseresponsiveweb.repository.NewsRepository;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity getTop5News() {
        List<News> tempnews = newsRepository.findAll();

        int size = tempnews.size();
        if (size <= 6) {

            Collections.reverse(tempnews);
            System.out.println("5 hír lekérve: " + tempnews);
            return ResponseEntity.ok(tempnews);
        } else {
            List<News> list = tempnews.subList(size - 5, size);
            Collections.reverse(list);
            System.out.println("5 hír lekérve:" + list);
            return ResponseEntity.ok(list);
        }


    }

    @GetMapping
    public ResponseEntity getallNews() {
        var news = newsRepository.findAll();
        System.out.println("Összes hír lekérdezve: " + news);
        return ResponseEntity.ok(news);
    }


    @PostMapping
    public ResponseEntity addNews(@RequestBody News news) {
        newsRepository.save(news);
        System.out.println("Új hír hozzáadva: " + news);
        return ResponseEntity.ok(news);
    }

    @DeleteMapping
    public ResponseEntity deleteNews(@RequestBody News news) {
        System.out.println("Hir kirötölve: " + news);
        newsRepository.deleteById(news.getId());
        return ResponseEntity.ok("Hír kitörölve: " + news);
    }


}
