import Display from "../components/Display/Display"
import quizData from "../data/quiz"
import Button from "../components/button/button";
import { useEffect, useState } from "react";
import { ROUTES } from "../const";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LENGTH = quizData.length;

    //クイズの選択肢をクリックしたときの処理
    //クリックされた選択肢のインデックスを引数として受け取り、正解かどうかを判定
    //正解の場合はanswerLogsにtrueを追加し、不正解の場合はfalseを追加
    //その後、quizIndexを1つ進めて次のクイズに移る

    const handleClick = (clickedIndex) => {
        if (clickedIndex === quizData[quizIndex].answerIndex) {
            // 正解の場合　...prevは前の状態を保持するための引数
            // setAnswerLogsは、answerLogsの状態を更新するための関数  
            setAnswerLogs((prev) => [...prev, true]);
        } else {
            // 不正解の場合
            setAnswerLogs((prev) => [...prev, false]);
        }
        // 次のクイズに進む
        setQuizIndex((prev) => prev + 1);
    };

    useEffect(() => {
        // クイズの最後まで到達した場合、結果ページに遷移
        if (quizIndex >= MAX_QUIZ_LENGTH) {
            const correctNum = answerLogs.filter((answer) => {
                return answer === true
            }
            );
            navigation(ROUTES.RESULT, {
                state: {
                    maxQuizLen: MAX_QUIZ_LENGTH,
                    correctNumLen: correctNum.length
                }
            });
        }
    }, [answerLogs, quizIndex, MAX_QUIZ_LENGTH, navigation]);

    return (
        <>
            {
                quizData[quizIndex] &&
                <Display>
                    {`Q.${quizIndex + 1}.${quizData[quizIndex].question}`}
                </Display>
            }
            {
                quizData[quizIndex] &&
                quizData[quizIndex].options.map((option, index) => {

                    return (
                        <Button key={`option-${index}`} onClick={() => handleClick(index)}>
                            {option}
                        </Button>
                    )
                })
            }
        </>
    )
}

