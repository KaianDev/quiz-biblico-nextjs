import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    item: Question;
    count: number;
    onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ item, count, onAnswer }: Props) => {
    const [selected, setSelected] = useState<number | null>(null);

    const handleClickOption = (key: number) => {
        if (selected === null) {
            setSelected(key);
            setTimeout(() => {
                onAnswer(key);
                setSelected(null);
            }, 1000);
        }
    };

    return (
        <div>
            <div className="font-bold text-xl text-gray-800 leading-1">
                {count}. {item.question}{" "}
            </div>
            <div className="p-2 text-gray-900">
                {item.options.map((option, key) => (
                    <div
                        key={key}
                        onClick={() => handleClickOption(key)}
                        className={`py-1 px-2 border border-gray-400 mb-2 bg-gray-300 rounded-md 
                            ${
                                selected !== null && selected === key
                                    ? "cursor-auto bg-gray-600 text-white"
                                    : "hover:opacity-60 cursor-pointer"
                            }
                        `}>
                        {key === 0 && "a) "}
                        {key === 1 && "b) "}
                        {key === 2 && "c) "}
                        {key === 3 && "d) "}
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};
/* 
${
                                selected !== null &&
                                selected === item.answer &&
                                selected === key &&
                                "bg-lime-200 border-lime-400"
                            }
                            ${
                                selected !== null &&
                                selected !== item.answer &&
                                selected === key &&
                                "bg-red-200 border-red-400"
                            }
*/
