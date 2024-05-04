package com.example.project.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

// import java.util.List;
import java.util.StringJoiner;

@Document("login_data")
public class LoginDataDocument {

    @Id
    private String id;

    @Indexed(unique = true)
    private String email;

    private String name;

    private boolean verified;

    private String password;

    // toString() method
    @Override
    public String toString() {
        return new StringJoiner(", ", LoginDataDocument.class.getSimpleName() + "[", "]")
                .add("id='" + id + "'")
                .add("email='" + email + "'")
                .add("name='" + name + "'")
                .add("verified=" + verified)
                .add("password='" + password + "'")
                .toString();
    }

    // Constructors, Getters and Setters

    public LoginDataDocument() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
