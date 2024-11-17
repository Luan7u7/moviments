"use client";

import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import type { globalTypes } from "@/type/globalType";

export const Input = ({ url = "/" }: globalTypes) => {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(
        `input${index + 2}`,
      ) as HTMLInputElement;
      nextInput?.focus();
    }
    if (index === 5 && newInputs.every((input) => input.length === 1)) {
      checkCompletion();
    }
  };

  const checkCompletion = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <>
      {inputs.map((input, index) => (
        <input
          key={index}
          id={`input${index + 1}`}
          className={`input-box ${input ? "filled" : ""} appearance-none bg-transparent border-b-2 border-black w-10 text-3xl leading-6 uppercase`}
          type="text"
          value={input}
          maxLength={1}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
    </>
  );
};

export const LocalOptions = ({ options }: { options: string[] }) => {
  return (
    <select
      name="options"
      id="options"
      className="w-3/4 h-12 text-zinc-700 text-xl indent-4"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

