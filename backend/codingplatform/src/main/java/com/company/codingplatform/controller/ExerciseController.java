package com.company.codingplatform.controller;

import com.company.codingplatform.dto.ExerciseRequest;
import com.company.codingplatform.dto.ExerciseResponse;
import com.company.codingplatform.service.ExerciseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
//@CrossOrigin(origins = "http://localhost:5173")
    @CrossOrigin(origins="https://majestic-kleicha-e19a35.netlify.app")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(
            ExerciseService exerciseService) {

        this.exerciseService = exerciseService;
    }

    @GetMapping("/language/{languageCode}")
    public ResponseEntity<List<ExerciseResponse>>
    getExercisesByLanguage(
            @PathVariable String languageCode) {

        return ResponseEntity.ok(
                exerciseService.getExercises(
                        languageCode
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseResponse>
    getExercise(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                exerciseService.getExercise(id)
        );
    }

    @PostMapping
    public ResponseEntity<ExerciseResponse>
    createExercise(
            @Valid
            @RequestBody ExerciseRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        exerciseService.createExercise(
                                request
                        )
                );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>
    deleteExercise(
            @PathVariable Long id) {

        exerciseService.deleteExercise(id);

        return ResponseEntity.noContent().build();
    }
}
