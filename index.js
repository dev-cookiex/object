"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.omit = void 0;
const omit = (object, ...keys) => {
    return Object.fromEntries(Object.entries(object)
        .filter(([key]) => !keys.includes(key)));
};
exports.omit = omit;
const pick = (object, ...keys) => {
    return Object.fromEntries(Object.entries(object)
        .filter(([key]) => keys.includes(key)));
};
exports.pick = pick;
