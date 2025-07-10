import { Link, Route } from "react-router-dom"
import { ROUTES } from "../const"

export default function HomePage() {
    return (
        <>
            <h1>Quiz App</h1>
            <p>Welcome to the Quiz App! Test your knowledge with our quizzes.</p>
            <Link to={ROUTES.QUIZ}>
                <button>Start Quiz</button>
            </Link>
        </>
    )
}
