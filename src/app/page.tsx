"use client";

import Link from "next/link";
import { Tag } from "./components/utils";

export default function Home() {
  return (
    <Tag.container>
      <Tag.content>
        <Tag.frame />
        <button>SALVAR</button>
      </Tag.content>

      <Link href="./registration" className="text-blue-400">
        ABRIR MOVIMENTO
      </Link>
    </Tag.container>
  );
}

