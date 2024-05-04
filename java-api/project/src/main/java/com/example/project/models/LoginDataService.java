package com.example.project.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginDataService {

    @Autowired
    private LoginDataRepository loginDataRepository;

    public LoginDataDocument createLoginData(LoginDataDocument loginData) {
        return loginDataRepository.save(loginData);
    }

    public Optional<LoginDataDocument> findLoginDataById(String id) {
        return loginDataRepository.findById(id);
    }

    public Optional<LoginDataDocument> findLoginDataByEmail(String email) {
        return Optional.ofNullable(loginDataRepository.findByEmail(email));
    }

    public List<LoginDataDocument> getAllLoginData() {
        return loginDataRepository.findAll();
    }

    public LoginDataDocument updateLoginData(LoginDataDocument updates) {
        return loginDataRepository.save(updates);
    }

    public void deleteLoginData(String id) {
        loginDataRepository.deleteById(id);
    }
}
