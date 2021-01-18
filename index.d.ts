export declare const omit: <O, K extends string | number | symbol>(object: O, ...keys: K[]) => Pick<O, Exclude<keyof O, K>>;
export declare const pick: <O, K extends keyof O>(object: O, ...keys: K[]) => Pick<O, K>;
