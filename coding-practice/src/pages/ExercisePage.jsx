import {
    Link,
    useParams
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import {
    getExercise,
    submitCode
} from "../services/exerciseService";


function ExercisePage() {

    const {
        language,
        id
    } = useParams();


    const [
        exercise,
        setExercise
    ] = useState(null);


    const [
        code,
        setCode
    ] = useState("");


    const [
        loading,
        setLoading
    ] = useState(true);


    const [
        submitting,
        setSubmitting
    ] = useState(false);


    const [
        error,
        setError
    ] = useState("");


    const [
        result,
        setResult
    ] = useState(null);


    useEffect(() => {

        loadExercise();

    }, [id]);


    async function loadExercise() {

        try {

            setLoading(true);

            setError("");

            const data =
                await getExercise(id);

            setExercise(data);

            setDefaultCode(
                data.language
            );

        } catch (error) {

            console.error(error);

            setError(
                error.message
            );

        } finally {

            setLoading(false);
        }
    }


    function setDefaultCode(
        language
    ) {

        if (language === "java") {

            setCode(
`public class Main {

    public static void main(String[] args) {

        // Write your solution here

    }
}`
            );

        } else if (
            language === "cpp"
        ) {

            setCode(
`#include <iostream>

using namespace std;

int main() {

    // Write your solution here

    return 0;
}`
            );

        } else if (
            language === "python"
        ) {

            setCode(
`def main():

    # Write your solution here
    pass


if __name__ == "__main__":
    main()
`
            );

        } else {

            setCode(
`// Write your solution here
`
            );
        }
    }


    async function handleSubmit() {

        if (!code.trim()) {

            setResult({
                error:
                    "Please write some code before submitting."
            });

            return;
        }


        try {

            setSubmitting(true);

            setResult(null);

            const response =
                await submitCode(
                    id,
                    language,
                    code
                );

            setResult(response);

        } catch (error) {

            console.error(error);

            setResult({
                error: error.message
            });

        } finally {

            setSubmitting(false);
        }
    }


    function clearCode() {

        if (
            window.confirm(
                "Are you sure you want to clear the code?"
            )
        ) {

            setDefaultCode(
                exercise?.language
            );
        }
    }


    if (loading) {

        return (

            <div className="page">

                <div className="message">

                    <h2>
                        Loading exercise...
                    </h2>

                </div>

            </div>
        );
    }


    if (error) {

        return (

            <div className="page">

                <div className="error-message">

                    <h2>
                        Error
                    </h2>

                    <p>
                        {error}
                    </p>

                    <Link
                        to={`/language/${language}`}
                        className="button"
                    >
                        Back to Exercises
                    </Link>

                </div>

            </div>
        );
    }


    if (!exercise) {

        return null;
    }


    return (

        <div className="page exercise-page">

            {/* Breadcrumb */}

            <div className="breadcrumb">

                <Link to="/">
                    Home
                </Link>

                <span>
                    /
                </span>

                <Link
                    to={`/language/${language}`}
                >
                    {language.toUpperCase()}
                </Link>

                <span>
                    /
                </span>

                <span>
                    {exercise.title}
                </span>

            </div>


            {/* Exercise title */}

            <div className="exercise-title">

                <div>

                    <h1>
                        {exercise.title}
                    </h1>

                    <span
                        className={
                            `difficulty ${exercise.difficulty?.toLowerCase()}`
                        }
                    >
                        {exercise.difficulty}
                    </span>

                </div>

            </div>


            {/* Main layout */}

            <div className="exercise-layout">


                {/* Left side - problem */}

                <main className="problem-panel">

                    <section>

                        <h2>
                            Problem Statement
                        </h2>

                        <p>
                            {exercise.problemStatement}
                        </p>

                    </section>


                    {exercise.inputDescription && (

                        <section>

                            <h2>
                                Input
                            </h2>

                            <p>
                                {exercise.inputDescription}
                            </p>

                        </section>

                    )}


                    {exercise.outputDescription && (

                        <section>

                            <h2>
                                Output
                            </h2>

                            <p>
                                {exercise.outputDescription}
                            </p>

                        </section>

                    )}


                    {exercise.constraints && (

                        <section>

                            <h2>
                                Constraints
                            </h2>

                            <pre className="info-code">
                                {exercise.constraints}
                            </pre>

                        </section>

                    )}

                </main>


                {/* Right side - editor */}

                <aside className="editor-panel">

                    <div className="editor-header">

                        <span>
                            {language.toUpperCase()}
                        </span>

                        <button
                            onClick={clearCode}
                            className="clear-button"
                        >
                            Clear
                        </button>

                    </div>


                    <textarea
                        className="code-editor"
                        value={code}
                        onChange={(event) =>
                            setCode(
                                event.target.value
                            )
                        }
                        spellCheck="false"
                    />


                    <div className="editor-footer">

                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="run-button"
                        >

                            {submitting
                                ? "Submitting..."
                                : "▶ Run Code"
                            }

                        </button>

                    </div>


                    {/* Result */}

                    {result && (

                        <div className="result-panel">

                            <h3>
                                Submission Result
                            </h3>


                            {result.error ? (

                                <div className="result-error">

                                    {result.error}

                                </div>

                            ) : (

                                <pre>
                                    {
                                        JSON.stringify(
                                            result,
                                            null,
                                            2
                                        )
                                    }
                                </pre>

                            )}

                        </div>

                    )}

                </aside>

            </div>

        </div>
    );
}

export default ExercisePage;