"use client";

import { Tag } from "@/app/components/utils";
import Link from "next/link";
import { useState } from "react";

export default function KmsFinish() {
  const [gas, setGas] = useState(1);

  const handleGasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGas(Number(event.target.value));
  };
  return (
    <Tag.container>
      <Tag.content>
        <Tag.group className="w-3/4 h-14 items-center pl-4">
          <h1 className="text-zinc-800">KMS</h1>
          <input
            type="number"
            className="w-full h-full text-3xl indent-4"
            placeholder="KMS"
          />
        </Tag.group>

        <Tag.group className="w-3/4 h-14 items-center justify-between px-4 gap-4">
          <h1 className="text-zinc-800">GAS</h1>
          <input
            type="range"
            id="gas"
            value={gas}
            min={1}
            max={8}
            onChange={handleGasChange}
            className="bg-transparent flex-grow"
          />
          <label
            htmlFor="gas"
            className="text-3xl bg-transparent flex-grow-0 shrink-0"
          >{`${gas} / 8`}</label>
        </Tag.group>
      </Tag.content>

      <Link href={"./reason"}>SEGUINTE</Link>
    </Tag.container>
  );
}

