package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.Exam;
import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamRepository extends MongoRepository<Exam, String> {
    SimpleUser findByName(String name);

}
