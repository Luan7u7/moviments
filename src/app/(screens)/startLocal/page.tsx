"use client";

import { Tag } from "@/app/components/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StartLocal() {
  const [localText, setLocalText] = useState("");
  const [options, setOptions] = useState<string[]>([
    "balcão",
    "ribafragoso",
    "santagri",
    "mercedes",
    "elefante azul",
    "galp",
    "lpm",
    "roques",
    "ludomotor",
    "bonrodar",
    "my force",
  ]);

  const saveToLocalStorage = (key: string, value: string[]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key: string) => {
    const savadData = localStorage.getItem(key);
    return savadData ? JSON.parse(savadData) : null;
  };

  useEffect(() => {
    const savedOptions = loadFromLocalStorage("options");
    if (savedOptions) {
      setOptions(savedOptions);
    }
  }, []);

  const handleAddClick = () => {
    if (localText.trim() !== "" && !options.includes(localText)) {
      const updadedOptions = [...options, localText];
      setOptions(updadedOptions);
      saveToLocalStorage("options", updadedOptions);
      setLocalText("");
    }
  };

  return (
    <Tag.container>
      <Tag.content>
        <Tag.content className="felx-col h-full justify-evenly">
          <h1>LOCAL</h1>
          <Tag.group className="w-3/4 h-14 gap-0 rounded-md overflow-hidden">
            <input
              type="text"
              name="localText"
              id="localText"
              value={localText}
              onChange={(e) => setLocalText(e.target.value)}
              placeholder="insira o local de partida"
              className="w-full bg-transparent placeholder:text-zinc-700 indent-4 leading-7 text-xl"
            />
            <button className="bg-green-500 px-8" onClick={handleAddClick}>
              add
            </button>
          </Tag.group>
          <Tag.option options={options} />
        </Tag.content>
      </Tag.content>

      <Link href={"./kmsInit"}>SEGUINTE</Link>
    </Tag.container>
  );
}

