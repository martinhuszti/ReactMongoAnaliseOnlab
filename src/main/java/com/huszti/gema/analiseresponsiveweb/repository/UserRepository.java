package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<SimpleUser, String> {
    SimpleUser findByNeptun(String neptun_code);

    SimpleUser findBy_id(String _id);

}