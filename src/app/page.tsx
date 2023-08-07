"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
    const [current, setCurrent] = useState(0);
    const [listAnswer, setListAnswer] = useState<number[]>([]);
    const [showResult, setShowResults] = useState(false);
    const [correct, setCorrect] = useState(0);
    const currentQuestion = questions[current];

    const title = "Quis Bíblico";

    const loadingNextQuestion = () => {
        if (questions[current + 1]) {
            setCurrent(current + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleAnswered = (key: number) => {
        setListAnswer([...listAnswer, key]);
        loadingNextQuestion();
        if (key === currentQuestion.answer) setCorrect(correct + 1);
    };

    const handleRestartButton = () => {
        setCurrent(0);
        setListAnswer([]);
        setCorrect(0);
        setShowResults(false);
    };

    return (
        <div className="w-screen h-screen grid grid-rows-[1fr] justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 px-3">
            <div className="w-full max-w-xl border-2 border-white rounded-lg overflow-x-hidden bg-slate-100 shadow-md shadow-black/50">
                <div className="font-bold text-2xl text-right px-3 py-2 border-b text-sky-500">
                    {title}
                </div>

                {!showResult && (
                    <>
                        <div className="p-3">
                            <QuestionItem
                                count={current + 1}
                                item={currentQuestion}
                                onAnswer={handleAnswered}
                            />
                        </div>
                        <div className="p-3 text-center text-gray-900 text-sm border-t">
                            {current + 1} de {questions.length} pergunta
                            {questions.length === 1 ? "" : "s"}
                        </div>
                    </>
                )}
                {showResult && (
                    <Results
                        correct={correct}
                        questions={questions}
                        onClick={handleRestartButton}
                        listAnswer={listAnswer}
                    />
                )}
            </div>

            <div className="text-sm text-zinc-400 text-center drop-shadow-sm pb-[4%]">
                Developer{" "}
                <a
                    href="https://github.com/KaianDev"
                    className=" cursor-pointer hover:underline text-sky-800">
                    KaianKDev
                </a>{" "}
            </div>
        </div>
    );
};

export default Page;
