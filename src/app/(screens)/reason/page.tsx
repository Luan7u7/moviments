import { Tag } from "@/app/components/utils";
import Link from "next/link";

export default function Reason() {
  return (
    <Tag.container>
      <Tag.content>
        <h1 className="uppercase text-3xl">motivo</h1>
        <select name="" id="" className="w-3/4 h-14 text-3xl px-4 uppercase">
          <option value="apoio">apoio</option>
          <option value="lavagem">lavagem</option>
          <option value="entrega">entrega</option>
          <option value="recolha">recolha</option>
          <option value="t-recolha">t-recolha</option>
        </select>
      </Tag.content>
      <Link href={"./"} className="uppercase">
        finalizar
      </Link>
    </Tag.container>
  );
}

