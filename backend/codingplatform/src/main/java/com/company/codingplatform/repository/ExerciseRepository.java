package com.company.codingplatform.repository;



import com.company.codingplatform.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ExerciseRepository
        extends JpaRepository<Exercise, Long> {

    List<Exercise> findByLanguageCode(String languageCode);

    Optional<Exercise> findBySlug(String slug);

    boolean existsBySlug(String slug);
}