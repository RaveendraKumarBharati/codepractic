package com.company.codingplatform.service;

import com.company.codingplatform.entity.Exercise;
//
import com.company.codingplatform.entity.Submission;
import com.company.codingplatform.exception.ResourceNotFoundException;
import com.company.codingplatform.repository.ExerciseRepository;
import com.company.codingplatform.repository.SubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    private final SubmissionRepository submissionRepository;

    private final ExerciseRepository exerciseRepository;

    public SubmissionService(
            SubmissionRepository submissionRepository,
            ExerciseRepository exerciseRepository) {

        this.submissionRepository =
                submissionRepository;

        this.exerciseRepository =
                exerciseRepository;
    }

    public Submission submit(
            Long exerciseId,
            String language,
            String sourceCode) {

        Exercise exercise =
                exerciseRepository.findById(exerciseId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Exercise not found: "
                                                + exerciseId
                                )
                        );

        Submission submission =
                new Submission();

        submission.setExercise(exercise);
        submission.setLanguage(language);
        submission.setSourceCode(sourceCode);

        /*
         * Actual code execution should be performed
         * by a secure sandbox/container service.
         */
        submission.setStatus(
                Submission.SubmissionStatus.PENDING
        );

        return submissionRepository.save(submission);
       // return   submissionRepository.s
    }

    public List<Submission> getByExercise(
            Long exerciseId) {

        return submissionRepository
                .findByExerciseId(exerciseId);
    }
}