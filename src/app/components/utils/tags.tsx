import type { globalTypes } from "@/type/globalType";
import { twMerge } from "tailwind-merge";

export const Container = ({ children }: globalTypes) => {
  return (
    <main className="w-screen h-5/6 bg-zinc-600 flex flex-col p-3 justify-evenly items-center">
      {children}
    </main>
  );
};

export const Content = ({ children, className }: globalTypes) => {
  return (
    <section
      className={twMerge(
        "bg-zinc-400 flex justify-center items-center flex-col w-full h-1/3 gap-6",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const Group = ({ children, className }: globalTypes) => {
  return (
    <section className={twMerge(" bg-zinc-300 flex gap-6", className)}>
      {children}
    </section>
  );
};

export const Frame = ({ children }: globalTypes) => {
  return <aside className="bg-black/60 w-4/5 h-40 rounded">{children}</aside>;
};

