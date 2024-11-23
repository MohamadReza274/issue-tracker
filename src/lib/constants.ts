import { Status } from "./types";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const statuses: Status[] = ["OPEN", "IN_PROGRESS", "CLOSED"];
