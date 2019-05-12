package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.Labor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LaborRepository extends MongoRepository<Labor, String> {

}
