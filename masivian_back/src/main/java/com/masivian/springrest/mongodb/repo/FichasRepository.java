package com.masivian.springrest.mongodb.repo;

import com.masivian.springrest.mongodb.model.Fichas;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FichasRepository extends MongoRepository<Fichas, String>{
}
