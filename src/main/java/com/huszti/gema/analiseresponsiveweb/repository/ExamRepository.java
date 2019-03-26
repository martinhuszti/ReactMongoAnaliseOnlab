package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamRepository extends MongoRepository<User, String> {
    User findByName(String name);

}
