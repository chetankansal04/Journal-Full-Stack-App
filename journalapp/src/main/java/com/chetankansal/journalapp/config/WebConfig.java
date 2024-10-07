package com.chetankansal.journalapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Apply CORS to API routes
                .allowedOrigins("http://localhost:5173", "https://journal-app-chetankansal.vercel.app/") // Frontend origin
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true); // Allow cookies or authorization headers

    }
}
