package com.company.codingplatform.dto;



import com.company.codingplatform.entity.Exercise;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ExerciseRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String slug;

    @NotBlank
    private String problemStatement;

    private String inputDescription;

    private String outputDescription;

    private String constraints;

    @NotNull
    private Exercise.Difficulty difficulty;

    @NotBlank
    private String languageCode;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getProblemStatement() {
        return problemStatement;
    }

    public void setProblemStatement(String problemStatement) {
        this.problemStatement = problemStatement;
    }

    public String getInputDescription() {
        return inputDescription;
    }

    public void setInputDescription(String inputDescription) {
        this.inputDescription = inputDescription;
    }

    public String getOutputDescription() {
        return outputDescription;
    }

    public void setOutputDescription(String outputDescription) {
        this.outputDescription = outputDescription;
    }

    public String getConstraints() {
        return constraints;
    }

    public void setConstraints(String constraints) {
        this.constraints = constraints;
    }

    public Exercise.Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(
            Exercise.Difficulty difficulty) {

        this.difficulty = difficulty;
    }

    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }
}