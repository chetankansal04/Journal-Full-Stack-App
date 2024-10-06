package com.chetankansal.journalapp.entity;

public class AuthResponse {

    private String userName;
    private String token;

    public AuthResponse() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
