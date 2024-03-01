"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.U = void 0;
const Array_1 = require("./utils/Array");
const Math_1 = require("./utils/Math");
const String_1 = require("./utils/String");
const Object_1 = require("./utils/Object");
const Stack_1 = require("./utils/Stack");
const Queue_1 = require("./utils/Queue");
/* This code snippet is using TypeScript syntax to create a namespace named `U`. Within this namespace,
various utility modules are imported and assigned to properties of the `U` object. Here's a
breakdown of what each part of the code is doing: */
var U;
(function (U) {
    U.Arr = Array_1.ArrayUtils;
    U.math = Math_1.MathUtils;
    U.Str = String_1.StringUtils;
    U.Obj = Object_1.ObjectUtils;
    U.Stack = Stack_1.Stack;
    U.Queue = Queue_1.Queue;
})(U || (exports.U = U = {}));
