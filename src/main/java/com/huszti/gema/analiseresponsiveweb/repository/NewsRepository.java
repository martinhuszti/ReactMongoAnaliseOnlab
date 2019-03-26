package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.News;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsRepository extends MongoRepository<News, String> {

}
