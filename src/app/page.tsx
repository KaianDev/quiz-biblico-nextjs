"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "@/data/questions";
import { useState } from "react";
import { HiCheck, HiXMark } from "react-icons/hi2";

const Page = () => {
    const [current, setCurrent] = useState(0);
    const [listAnswer, setListAnswer] = useState<number[]>([]);
    const [correct, setCorrect] = useState(0);
    const currentQuestion = questions[current];
    const title = "Quis Bíblico";
    const handleAnswered = (key: number) => {
        setListAnswer([...listAnswer, key]);
        setTimeout(() => {
            setCurrent(current + 1);
        }, 1500);
        if (key === currentQuestion.answer) setCorrect(correct + 1);
    };

    const handleRestartButton = () => {
        setCurrent(0);
        setListAnswer([]);
        setCorrect(0);
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 px-3">
            <div className="w-full max-w-xl border-2 border-white rounded-lg overflow-x-hidden bg-slate-100 shadow-md shadow-black/50">
                <div className="font-bold text-2xl text-right px-3 py-2 border-b text-sky-500">
                    {title}
                </div>

                {current < questions.length && (
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
                {current === questions.length && (
                    <>
                        <div className="p-3 text-zinc-800">
                            <div className=" py-1">
                                <div className="font-bold text-lg text-sky-500">
                                    Gabarito
                                </div>
                                <div className="text-sm">
                                    Você acertou {correct} de {questions.length}{" "}
                                    {questions.length === 1
                                        ? " questão"
                                        : " questões"}
                                    !{" "}
                                    {correct > questions.length / 2
                                        ? "Parabéns!! 😁"
                                        : "Que Pena 😕"}
                                </div>
                            </div>
                            <div className="px-1 max-h-[60vh]  overflow-y-scroll">
                                {questions.map((item, index) => (
                                    <>
                                        <div className="font-semibold">
                                            {index + 1}. {item.question}
                                        </div>
                                        <div className="flex justify-between pl-1 items-center text-sm">
                                            R -{" "}
                                            {item.options[listAnswer[index]]}
                                            <div>
                                                {listAnswer[index] ===
                                                item.answer ? (
                                                    <div className="flex text-xl text-black justify-center items-center w-6 h-6 mr-1 bg-green-400 rounded-md border-green-500">
                                                        <HiCheck />
                                                    </div>
                                                ) : (
                                                    <div className="flex text-xl text-black justify-center items-center w-6 h-6 mr-1 bg-red-400 rounded-md border-red-500">
                                                        <HiXMark />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="p-3 text-center border-t">
                            <button
                                className="py-2 px-3 bg-sky-700 rounded-md text-white hover:opacity-60"
                                onClick={handleRestartButton}>
                                Reiniciar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
