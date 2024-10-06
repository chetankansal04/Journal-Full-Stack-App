package com.chetankansal.journalapp.entity;

import java.time.LocalDateTime;

import lombok.Data;

@Data

public class JournalEntryResponse {

    private String id;
    private String title;
    private String content;
    private LocalDateTime date; // Converted ID as String

    public JournalEntryResponse(String id, String title, String content, LocalDateTime date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }

}
