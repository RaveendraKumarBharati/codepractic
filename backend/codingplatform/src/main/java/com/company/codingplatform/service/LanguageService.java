package com.company.codingplatform.service;

import com.company.codingplatform.entity.Language;
import com.company.codingplatform.exception.ResourceNotFoundException;
import com.company.codingplatform.repository.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageService {

    private final LanguageRepository languageRepository;

    public LanguageService(
            LanguageRepository languageRepository) {

        this.languageRepository = languageRepository;
    }

    public List<Language> getAllLanguages() {

        return languageRepository.findAll();
    }

    public Language getLanguageByCode(String code) {

        return languageRepository
                .findByCode(code)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Language not found: " + code
                        )
                );
    }

    public Language createLanguage(Language language) {

        if (languageRepository.existsByCode(
                language.getCode())) {

            throw new IllegalArgumentException(
                    "Language already exists: "
                            + language.getCode()
            );
        }

        return languageRepository.save(language);
    }
}