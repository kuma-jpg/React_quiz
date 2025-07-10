import{ Link, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import  Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { use, useState } from "react"
import { useEffect } from "react";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  useEffect(() => {
    // ローディングを3秒間表示する
    const timer = setTimeout(() => {
      setActive(true);
    }, 3000); // 3秒後に非表示にする

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <>
      <Loading active={active} />
      <h1>結果発表！</h1>
      <p>あなたの正解数は...</p>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <p>お疲れ様でした！</p>
      <p>また挑戦してください！</p>
      <p><Link to={ROUTES.QUIZ}>もう一度挑戦する</Link></p>
      <p><Link to={ROUTES.HOME}>トップに戻る</Link></p>
    </>
  );
}
