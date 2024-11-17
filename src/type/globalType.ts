import type { ComponentProps } from "react";

export type globalTypes = {
  children?: React.ReactNode;
  url?: string;
} & ComponentProps<"div">;

