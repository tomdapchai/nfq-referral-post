"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
interface RevealBoxProps {
    text: string;
    boxText: string;
}

export function MysteryBox({ text, boxText }: RevealBoxProps) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="relative w-full p-8">
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-white border border-gray-300 rounded shadow overflow-hidden">
                <p className="text-center text-md p-4">{parse(text)}</p>
            </div>
            <motion.div
                className={`absolute inset-0 bg-[#fbc13a] rounded cursor-pointer flex items-center justify-center text-white font-bold`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isRevealed ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    pointerEvents: isRevealed ? "none" : "auto",
                }}
                onClick={() => setIsRevealed(true)}>
                {!isRevealed && `${boxText}`}
            </motion.div>
        </div>
    );
}
