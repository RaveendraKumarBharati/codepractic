package com.company.codingplatform.entity;



import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "languages",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "code")
        }
)
public class Language {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(length = 1000)
    private String description;

    @OneToMany(
            mappedBy = "language",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Exercise> exercises = new ArrayList<>();

    public Language() {
    }

    public Language(
            String name,
            String code,
            String description
    ) {
        this.name = name;
        this.code = code;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}