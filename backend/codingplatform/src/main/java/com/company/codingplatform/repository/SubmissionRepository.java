package com.company.codingplatform.repository;

import com.company.codingplatform.entity.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    List<Submission> findByExerciseId(Long exerciseId);
}
