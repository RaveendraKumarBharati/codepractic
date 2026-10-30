import { Link } from "react-router-dom";

function Home() {

    const languages = [
        {
            name: "Java",
            code: "java",
            icon: "☕",
            description:
                "Practice Java programming, OOP, Collections, Streams and more."
        },
        {
            name: "C++",
            code: "cpp",
            icon: "⚡",
            description:
                "Practice C++ programming, STL, algorithms and data structures."
        },
        {
            name: "Python",
            code: "python",
            icon: "🐍",
            description:
                "Practice Python programming, lists, functions and algorithms."
        }
    ];

    return (

        <div className="page">

            {/* Hero section */}

            <section className="hero">

                <h1>
                    Welcome to CodePractice
                </h1>

                <p>
                    Learn programming by solving
                    real coding exercises.
                </p>

                <p className="hero-description">
                    Select a programming language,
                    choose an exercise and start coding.
                </p>

            </section>


            {/* Instructions */}

            <section className="section">

                <h2>
                    How It Works
                </h2>

                <div className="steps">

                    <div className="step">

                        <div className="step-number">
                            1
                        </div>

                        <h3>
                            Select Language
                        </h3>

                        <p>
                            Choose Java, C++ or Python.
                        </p>

                    </div>


                    <div className="step">

                        <div className="step-number">
                            2
                        </div>

                        <h3>
                            Choose Exercise
                        </h3>

                        <p>
                            Select a coding problem
                            based on your skill level.
                        </p>

                    </div>


                    <div className="step">

                        <div className="step-number">
                            3
                        </div>

                        <h3>
                            Write Code
                        </h3>

                        <p>
                            Write your solution
                            in the code editor.
                        </p>

                    </div>


                    <div className="step">

                        <div className="step-number">
                            4
                        </div>

                        <h3>
                            Submit
                        </h3>

                        <p>
                            Submit your solution
                            and view the result.
                        </p>

                    </div>

                </div>

            </section>


            {/* Languages */}

            <section className="section">

                <h2>
                    Choose Programming Language
                </h2>

                <div className="language-grid">

                    {languages.map(
                        (language) => (

                            <Link
                                key={language.code}
                                to={`/language/${language.code}`}
                                className="language-card"
                            >

                                <div className="language-icon">
                                    {language.icon}
                                </div>

                                <h3>
                                    {language.name}
                                </h3>

                                <p>
                                    {language.description}
                                </p>

                                <span className="view-link">
                                    View Exercises →
                                </span>

                            </Link>

                        )
                    )}

                </div>

            </section>

        </div>
    );
}

export default Home;