package com.masivian.springrest.mongodb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class MasivianFichasApplication {

	public static void main(String[] args) {
		SpringApplication.run(MasivianFichasApplication.class, args);
	}
}
