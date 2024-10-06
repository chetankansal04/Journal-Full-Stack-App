package com.chetankansal.journalapp.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.chetankansal.journalapp.entity.LoginRequest;
import com.chetankansal.journalapp.entity.User;
import com.chetankansal.journalapp.repository.UserRepository;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean authenticateUser(LoginRequest loginRequest) {
        User user = userRepository.findByUserName(loginRequest.userName());
        if (user != null && passwordEncoder.matches(loginRequest.password(), user.getPassword())) {
            return true; // Authentication successful
        }
        return false; // Authentication failed
    }

    public void saveUser(User user) {
        user.setRoles(Arrays.asList("USER"));
        userRepository.save(user);
    }

    public void saveNewUser(User user) {
        user.setRoles(Arrays.asList("USER"));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(ObjectId id) {
        return userRepository.findById(id);
    }

    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

}
