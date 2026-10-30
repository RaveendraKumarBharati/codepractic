import {
    Link,
    useParams
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import {
    getExercisesByLanguage
} from "../services/exerciseService";


function LanguagePage() {

    const {
        language
    } = useParams();


    const [
        exercises,
        setExercises
    ] = useState([]);


    const [
        loading,
        setLoading
    ] = useState(true);


    const [
        error,
        setError
    ] = useState("");


    useEffect(() => {

        loadExercises();

    }, [language]);


    async function loadExercises() {

        try {

            setLoading(true);

            setError("");

            const data =
                await getExercisesByLanguage(
                    language
                );

            setExercises(data);

        } catch (error) {

            console.error(error);

            setError(
                error.message
            );

        } finally {

            setLoading(false);
        }
    }


    const displayLanguage =
        language
            ? language.toUpperCase()
            : "Programming";


    return (

        <div className="page">

            {/* Header */}

            <section className="page-header">

                <h1>
                    {displayLanguage} Exercises
                </h1>

                <p>
                    Select an exercise and start
                    solving programming problems.
                </p>

            </section>


            {/* Loading */}

            {loading && (

                <div className="message">

                    <p>
                        Loading exercises...
                    </p>

                </div>

            )}


            {/* Error */}

            {!loading && error && (

                <div className="error-message">

                    <h3>
                        Unable to load exercises
                    </h3>

                    <p>
                        {error}
                    </p>

                    <button
                        onClick={loadExercises}
                        className="button"
                    >
                        Try Again
                    </button>

                </div>

            )}


            {/* No exercises */}

            {!loading &&
                !error &&
                exercises.length === 0 && (

                    <div className="message">

                        <h3>
                            No exercises available
                        </h3>

                        <p>
                            There are currently no
                            exercises for this language.
                        </p>

                    </div>

                )}


            {/* Exercise list */}

            {!loading &&
                !error &&
                exercises.length > 0 && (

                    <div className="exercise-grid">

                        {exercises.map(
                            (exercise) => (

                                <div
                                    className="exercise-card"
                                    key={exercise.id}
                                >

                                    <div className="exercise-header">

                                        <h2>
                                            {exercise.title}
                                        </h2>

                                        <span
                                            className={
                                                `difficulty ${exercise.difficulty?.toLowerCase()}`
                                            }
                                        >
                                            {exercise.difficulty}
                                        </span>

                                    </div>


                                    <p>
                                        {
                                            exercise.problemStatement
                                        }
                                    </p>


                                    <div className="exercise-footer">

                                        <Link
                                            to={`/exercise/${language}/${exercise.id}`}
                                            className="button"
                                        >
                                            Solve Exercise →
                                        </Link>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

        </div>
    );
}

export default LanguagePage;