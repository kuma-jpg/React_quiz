import { Link, Route } from "react-router-dom"
import { ROUTES } from "../const"

export default function HomePage() {
    return (
        <>
            <h1>クイズ</h1>
            <p>君は全問正解できるかな？</p>
            <Link to={ROUTES.QUIZ}>
                <button>クイズを始める</button>
            </Link>
        </>
    )
}
