package com.zosh.controller;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.model.Feedback;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final List<Feedback> store = Collections.synchronizedList(new ArrayList<>());
    private final AtomicLong idGenerator = new AtomicLong(1);

    @GetMapping
    public ResponseEntity<List<Feedback>> getAll() {
        // return copy sorted by newest first
        List<Feedback> copy;
        synchronized (store) {
            copy = new ArrayList<>(store);
        }
        copy.sort((a,b)->b.getCreatedAt().compareTo(a.getCreatedAt()));
        return new ResponseEntity<>(copy, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Feedback> submit(@RequestBody Feedback req) {
        if (req.getMessage() == null || req.getMessage().trim().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Feedback fb = new Feedback();
        fb.setId(idGenerator.getAndIncrement());
        fb.setName(req.getName() == null ? "Anonymous" : req.getName());
        fb.setEmail(req.getEmail());
        fb.setMessage(req.getMessage());
        // include optional rating if provided
        fb.setRating(req.getRating());
        fb.setCreatedAt(Instant.now());
        store.add(fb);
        return new ResponseEntity<>(fb, HttpStatus.CREATED);
    }
}
