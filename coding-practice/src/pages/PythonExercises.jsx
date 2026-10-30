import { useEffect, useState } from "react";
import { getPythonExercises } from "../services/exerciseService";

function PythonExercises() {

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadExercises();
    }, []);

    async function loadExercises() {
        try {
            const data = await getPythonExercises();
            setExercises(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Loading Python exercises...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Python Exercises</h1>
            {exercises.map((exercise) => (
                <div key={exercise.id}>
                    <h2>{exercise.title}</h2>
                    <p>Difficulty: {exercise.difficulty}</p>
                    <p>{exercise.problemStatement}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default PythonExercises;
