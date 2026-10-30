import { useEffect, useState } from "react";
import { getJavaExercises } from "../services/exerciseService";

function JavaExercises() {

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        loadExercises();

    }, []);

    async function loadExercises() {

        try {

            const data = await getJavaExercises();

            setExercises(data);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Loading Java exercises...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (

        <div>

            <h1>Java Exercises</h1>

            {exercises.map((exercise) => (

                <div key={exercise.id}>

                    <h2>{exercise.title}</h2>

                    <p>
                        Difficulty: {exercise.difficulty}
                    </p>

                    <p>
                        {exercise.problemStatement}
                    </p>

                    <hr />

                </div>

            ))}

        </div>
    );
}

export default JavaExercises;