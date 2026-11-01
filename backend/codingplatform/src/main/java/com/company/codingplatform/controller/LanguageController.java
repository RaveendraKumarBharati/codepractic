package com.company.codingplatform.controller;

import com.company.codingplatform.entity.Language;
import com.company.codingplatform.service.LanguageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/languages")
//@CrossOrigin(origins = "http://localhost:5173")
    @CrossOrigin(origins="https://majestic-kleicha-e19a35.netlify.app")
public class LanguageController {

    private final LanguageService languageService;

    public LanguageController(
            LanguageService languageService) {

        this.languageService = languageService;
    }

    @GetMapping
    public ResponseEntity<List<Language>>
    getAllLanguages() {

        return ResponseEntity.ok(
                languageService.getAllLanguages()
        );
    }

    @GetMapping("/{code}")
    public ResponseEntity<Language>
    getLanguage(
            @PathVariable String code) {

        return ResponseEntity.ok(
                languageService.getLanguageByCode(code)
        );
    }

    @PostMapping
    public ResponseEntity<Language>
    createLanguage(
            @RequestBody Language language) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        languageService.createLanguage(
                                language
                        )
                );
    }
}
