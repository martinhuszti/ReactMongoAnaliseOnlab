package com.huszti.gema.analiseresponsiveweb.repository;

import com.huszti.gema.analiseresponsiveweb.database.Requirements;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequirementsRepository extends MongoRepository<Requirements, String> {

}
