package com.company.codingplatform.controller;

import com.company.codingplatform.entity.Submission;
import com.company.codingplatform.service.SubmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
//@CrossOrigin(origins = "http://localhost:5173")
  @CrossOrigin(origins="https://majestic-kleicha-e19a35.netlify.app")  
public class SubmissionController {

    private final SubmissionService submissionService;

    public SubmissionController(
            SubmissionService submissionService) {

        this.submissionService = submissionService;
    }

    @PostMapping("/submit")
    public ResponseEntity<Submission> submit(
            @RequestParam Long exerciseId,
            @RequestParam String language,
            @RequestBody String sourceCode) {

        Submission submission =
                submissionService.submit(
                        exerciseId,
                        language,
                        sourceCode
                );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(submission);
    }

    @GetMapping("/exercise/{exerciseId}")
    public ResponseEntity<List<Submission>>
    getSubmissions(
            @PathVariable Long exerciseId) {

        return ResponseEntity.ok(
                submissionService.getByExercise(
                        exerciseId
                )
        );
    }
}
