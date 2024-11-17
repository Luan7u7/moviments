import { Tag } from "@/app/components/utils";

export function Registration() {
  return (
    <Tag.container>
      <Tag.content className="">
        <h1>MATRICULA</h1>
        <Tag.group>
          <Tag.input url="./startLocal" />
        </Tag.group>
      </Tag.content>
    </Tag.container>
  );
}

export default Registration;

