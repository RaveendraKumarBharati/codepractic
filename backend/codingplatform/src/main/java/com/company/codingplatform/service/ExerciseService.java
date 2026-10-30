package com.company.codingplatform.service;

import com.company.codingplatform.dto.ExerciseRequest;
import com.company.codingplatform.dto.ExerciseResponse;
import com.company.codingplatform.entity.Exercise;
import com.company.codingplatform.entity.Language;
import com.company.codingplatform.exception.ResourceNotFoundException;
import com.company.codingplatform.repository.ExerciseRepository;
import com.company.codingplatform.repository.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    private final LanguageRepository languageRepository;

    public ExerciseService(
            ExerciseRepository exerciseRepository,
            LanguageRepository languageRepository) {

        this.exerciseRepository = exerciseRepository;
        this.languageRepository = languageRepository;
    }

    public List<ExerciseResponse> getExercises(
            String languageCode) {

        return exerciseRepository
                .findByLanguageCode(languageCode)
                .stream()
                .map(ExerciseResponse::new)
                .toList();
    }

    public ExerciseResponse getExercise(Long id) {

        Exercise exercise =
                exerciseRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Exercise not found: " + id
                                )
                        );

        return new ExerciseResponse(exercise);
    }

    public ExerciseResponse createExercise(
            ExerciseRequest request) {

        if (exerciseRepository.existsBySlug(
                request.getSlug())) {

            throw new IllegalArgumentException(
                    "Exercise slug already exists"
            );
        }

        Language language =
                languageRepository
                        .findByCode(request.getLanguageCode())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Language not found: "
                                                + request.getLanguageCode()
                                )
                        );

        Exercise exercise = new Exercise();

        exercise.setTitle(request.getTitle());
        exercise.setSlug(request.getSlug());
        exercise.setProblemStatement(
                request.getProblemStatement()
        );
        exercise.setInputDescription(
                request.getInputDescription()
        );
        exercise.setOutputDescription(
                request.getOutputDescription()
        );
        exercise.setConstraints(
                request.getConstraints()
        );
        exercise.setDifficulty(
                request.getDifficulty()
        );
        exercise.setLanguage(language);

        Exercise saved =
                exerciseRepository.save(exercise);

        return new ExerciseResponse(saved);
    }

    public void deleteExercise(Long id) {

        if (!exerciseRepository.existsById(id)) {

            throw new ResourceNotFoundException(
                    "Exercise not found: " + id
            );
        }

        exerciseRepository.deleteById(id);
    }
}