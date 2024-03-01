import { ArrayUtils } from "./utils/Array";
import { MathUtils } from "./utils/Math";
import { StringUtils } from "./utils/String";
import { ObjectUtils } from "./utils/Object";
import { Stack as S } from "./utils/Stack";
import { Queue as Q } from "./utils/Queue";
export declare namespace U {
    type Stack<T> = S<T>;
    type Queue<T> = Q<T>;
    const Arr: typeof ArrayUtils;
    const math: typeof MathUtils;
    const Str: typeof StringUtils;
    const Obj: typeof ObjectUtils;
    const Stack: typeof S;
    const Queue: typeof Q;
}
