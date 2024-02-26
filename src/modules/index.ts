import { ArrayUtils } from "./utils/Array";
import { MathUtils } from "./utils/Math";
import { StringUtils } from "./utils/String";
import { ObjectUtils } from "./utils/Object";
import { Stack as S } from "./utils/Stack";
import { Queue as Q } from "./utils/Queue";

/* This code snippet is using TypeScript syntax to create a namespace named `U`. Within this namespace,
various utility modules are imported and assigned to properties of the `U` object. Here's a
breakdown of what each part of the code is doing: */
export namespace U {
  export type Stack<T> = S<T>;
  export type Queue<T> = Q<T>;

  export const Array = ArrayUtils;
  export const Math = MathUtils;
  export const Str = StringUtils;
  export const Obj = ObjectUtils;
  export const Stack = S;
  export const Queue = Q;
}
