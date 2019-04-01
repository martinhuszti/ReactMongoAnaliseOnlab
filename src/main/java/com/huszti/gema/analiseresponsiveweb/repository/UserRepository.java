package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByNeptun(String neptun_code);

}