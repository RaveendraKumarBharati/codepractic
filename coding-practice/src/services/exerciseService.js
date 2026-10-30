const API_BASE_URL =
    "http://localhost:8080/api";

/**
 * Get all available programming languages.
 */
export async function getLanguages() {

    const response = await fetch(
        `${API_BASE_URL}/languages`
    );

    if (!response.ok) {

        throw new Error(
            "Unable to load programming languages."
        );
    }

    return await response.json();
}


/**
 * Get exercises for a particular language.
 *
 * Example:
 * getExercisesByLanguage("java")
 */
export async function getExercisesByLanguage(
    language
) {

    const response = await fetch(
        `${API_BASE_URL}/exercises/language/${language}`
    );

    if (!response.ok) {

        throw new Error(
            `Unable to load ${language} exercises.`
        );
    }

    return await response.json();
}


/**
 * Get a single exercise.
 *
 * Example:
 * getExercise(1)
 */
export async function getExercise(id) {

    const response = await fetch(
        `${API_BASE_URL}/exercises/${id}`
    );

    if (!response.ok) {

        if (response.status === 404) {

            throw new Error(
                "Exercise not found."
            );
        }

        throw new Error(
            "Unable to load exercise."
        );
    }

    return await response.json();
}


/**
 * Submit source code.
 *
 * NOTE:
 * The current Spring Boot backend stores
 * the submission as PENDING.
 *
 * Actual code execution should later
 * be handled by a secure sandbox.
 */
export async function submitCode(
    exerciseId,
    language,
    sourceCode
) {

    const url =
        `${API_BASE_URL}/submissions/submit` +
        `?exerciseId=${encodeURIComponent(exerciseId)}` +
        `&language=${encodeURIComponent(language)}`;

    const response = await fetch(
        url,
        {
            method: "POST",

            headers: {
                "Content-Type": "text/plain"
            },

            body: sourceCode
        }
    );

    if (!response.ok) {

        throw new Error(
            "Unable to submit code."
        );
    }

    return await response.json();
}