import { Question } from "@/types/Question";
import React from "react";
import { HiCheck, HiXMark } from "react-icons/hi2";
type Props = {
    questions: Question[];
    listAnswer: number[];
    correct: number;
    onClick: () => void;
};
export const Results = ({ questions, listAnswer, correct, onClick }: Props) => {
    return (
        <>
            <div className="p-3 text-zinc-800">
                <div className=" py-1">
                    <div className="font-bold text-lg text-sky-500">
                        Gabarito
                    </div>
                    <div className="text-sm">
                        Você acertou {correct} de {questions.length}{" "}
                        {questions.length === 1 ? " questão" : " questões"}!{" "}
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
                                R - {item.options[listAnswer[index]]}
                                <div>
                                    {listAnswer[index] === item.answer ? (
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
                    onClick={onClick}>
                    Reiniciar Quiz
                </button>
            </div>
        </>
    );
};
