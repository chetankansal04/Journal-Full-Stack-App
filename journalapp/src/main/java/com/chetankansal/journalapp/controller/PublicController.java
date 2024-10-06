package com.chetankansal.journalapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chetankansal.journalapp.entity.AuthResponse;
import com.chetankansal.journalapp.entity.LoginRequest;
import com.chetankansal.journalapp.entity.User;
import com.chetankansal.journalapp.service.MyUserDetailService;
import com.chetankansal.journalapp.service.UserService;
import com.chetankansal.journalapp.utils.JwtUtil;

@RestController
@RequestMapping("/public")

public class PublicController {

    @Autowired
    private UserService userService;

    @Autowired
    private MyUserDetailService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            userService.saveNewUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e) {
            // Logging the error for easier debugging
            System.err.println("Error during registration: " + e.getMessage());
            return new ResponseEntity<>("Registration failed: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.userName(), loginRequest.password()
            ));
            if (authentication.isAuthenticated()) {
                String token = this.jwtUtil.generateToken(userDetailsService.loadUserByUsername(loginRequest.userName()));
                AuthResponse response = new AuthResponse();
                response.setUserName(loginRequest.userName());
                response.setToken(token);
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // Authentication failed
                throw new UsernameNotFoundException("Invalid credentials");
            }
        } catch (Exception e) {
            // Return an error response if authentication fails
            return new ResponseEntity<>("Login failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
