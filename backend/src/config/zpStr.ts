import { z, ZodTypeAny, ZodNumber } from "zod";

export const zpStr = <T extends ZodTypeAny>(schema: T, opt: { stripNull: boolean } = { stripNull: true }) =>
  z.preprocess((val) => {
    if (opt.stripNull && val === null) return undefined;
    if (typeof val !== "string") return val;
    return val.trim() || undefined;
  }, schema);




