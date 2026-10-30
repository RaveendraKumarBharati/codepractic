package com.company.codingplatform.entity;



import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "exercise_id",
            nullable = false
    )
    private Exercise exercise;

    @Column(nullable = false)
    private String language;

    @Column(
            name = "source_code",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String sourceCode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SubmissionStatus status;

    private Long executionTime;

    private Long memoryUsed;

    @Column(columnDefinition = "TEXT")
    private String output;

    private LocalDateTime submittedAt;

    public Submission() {
    }

    @PrePersist
    public void onCreate() {
        submittedAt = LocalDateTime.now();
    }

    public enum SubmissionStatus {
        PENDING,
        RUNNING,
        ACCEPTED,
        WRONG_ANSWER,
        COMPILATION_ERROR,
        RUNTIME_ERROR,
        TIME_LIMIT_EXCEEDED
    }

    public Long getId() {
        return id;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSourceCode() {
        return sourceCode;
    }

    public void setSourceCode(String sourceCode) {
        this.sourceCode = sourceCode;
    }

    public SubmissionStatus getStatus() {
        return status;
    }

    public void setStatus(SubmissionStatus status) {
        this.status = status;
    }

    public Long getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(Long executionTime) {
        this.executionTime = executionTime;
    }

    public Long getMemoryUsed() {
        return memoryUsed;
    }

    public void setMemoryUsed(Long memoryUsed) {
        this.memoryUsed = memoryUsed;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }
}