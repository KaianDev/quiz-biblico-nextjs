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
            onAnswer(key);
        }

        setTimeout(() => {
            setSelected(null);
        }, 2500);
    };

    return (
        <div>
            <div className="font-bold text-xl text-zinc-700">
                {count}. {item.question}{" "}
            </div>
            <div className="p-2">
                {item.options.map((option, key) => (
                    <div
                        key={key}
                        onClick={() => handleClickOption(key)}
                        className={`py-1 px-2 border border-gray-400 mb-2 bg-gray-300 rounded-md 
                            ${
                                selected !== null && selected === key
                                    ? "cursor-auto bg-blue-100"
                                    : "hover:opacity-60 cursor-pointer"
                            }
                        `}
                    >
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
