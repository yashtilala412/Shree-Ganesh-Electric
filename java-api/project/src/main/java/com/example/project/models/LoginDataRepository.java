package com.example.project.models;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDataRepository extends MongoRepository<LoginDataDocument, String> {
    LoginDataDocument findByEmail(String email);
}