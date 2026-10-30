package com.company.codingplatform.dto;

import com.company.codingplatform.entity.Exercise;

import java.time.LocalDateTime;

public class ExerciseResponse {

    private Long id;

    private String title;

    private String slug;

    private String problemStatement;

    private String inputDescription;

    private String outputDescription;

    private String constraints;

    private Exercise.Difficulty difficulty;

    private String language;

    private LocalDateTime createdAt;

    public ExerciseResponse() {
    }

    public ExerciseResponse(Exercise exercise) {

        this.id = exercise.getId();
        this.title = exercise.getTitle();
        this.slug = exercise.getSlug();
        this.problemStatement =
                exercise.getProblemStatement();

        this.inputDescription =
                exercise.getInputDescription();

        this.outputDescription =
                exercise.getOutputDescription();

        this.constraints =
                exercise.getConstraints();

        this.difficulty =
                exercise.getDifficulty();

        this.language =
                exercise.getLanguage().getCode();

        this.createdAt =
                exercise.getCreatedAt();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSlug() {
        return slug;
    }

    public String getProblemStatement() {
        return problemStatement;
    }

    public String getInputDescription() {
        return inputDescription;
    }

    public String getOutputDescription() {
        return outputDescription;
    }

    public String getConstraints() {
        return constraints;
    }

    public Exercise.Difficulty getDifficulty() {
        return difficulty;
    }

    public String getLanguage() {
        return language;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}