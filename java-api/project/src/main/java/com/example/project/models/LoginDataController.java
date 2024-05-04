package com.example.project.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class LoginDataController {

    @Autowired
    private LoginDataService loginDataService;

    @PostMapping("/api/login")
    public ResponseEntity<?> createLoginData(@RequestBody LoginDataDocument loginData) {
        Optional<LoginDataDocument> existingLoginData = loginDataService.findLoginDataByEmail(loginData.getEmail());
        if (existingLoginData.isPresent()) {
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Email already exists"));
        }
        loginDataService.createLoginData(loginData);
        return ResponseEntity.ok().body(Collections.singletonMap("message", "Login Data Added Successfully"));
    }

    @GetMapping("/api/login")
    public ResponseEntity<?> getAllLoginData() {
        List<LoginDataDocument> loginDataList = loginDataService.getAllLoginData();
        return ResponseEntity.ok().body(Collections.singletonMap("data", loginDataList));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateLoginData(@PathVariable String id, @RequestBody LoginDataDocument updates) {
        Optional<LoginDataDocument> existingLoginData = loginDataService.findLoginDataById(id);
        if (existingLoginData.isPresent()) {
            LoginDataDocument existingLoginDataObj = existingLoginData.get();
            // Update only if the field is not null in the updates
            if (updates.getEmail() != null) {
                existingLoginDataObj.setEmail(updates.getEmail());
            }
            if (updates.getName() != null) {
                existingLoginDataObj.setName(updates.getName());
            }
            if (updates.isVerified() != existingLoginDataObj.isVerified()) {
                existingLoginDataObj.setVerified(updates.isVerified());
            }
            if (updates.getPassword() != null) {
                existingLoginDataObj.setPassword(updates.getPassword());
            }
            loginDataService.updateLoginData(existingLoginDataObj);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Login Data updated successfully."));
        } else {
            return ResponseEntity.status(404).body(Collections.singletonMap("message", "Login Data not found."));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLoginData(@PathVariable String id) {
        loginDataService.deleteLoginData(id);
        return ResponseEntity.ok().body(Collections.singletonMap("message", "Login Data deleted successfully."));
    }
}
