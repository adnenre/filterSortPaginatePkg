import { ArrayUtils } from "./utils/Array";
import { MathUtils } from "./utils/Math";
import { StringUtils } from "./utils/String";
import { ObjectUtils } from "./utils/Object";

/* The code snippet is creating an object named `U` that serves as a container for references to
utility modules imported from different files. Each property of the `U` object corresponds to a
specific utility module imported in the code: */
const U = {
  Array: ArrayUtils,
  Math: MathUtils,
  Str: StringUtils,
  Obj: ObjectUtils,
};

export default U;
