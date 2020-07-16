"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loger = void 0;
class Loger {
    log(timeResult, inputResult, name) {
        console.log(inputResult);
        console.log(`${name.toUpperCase()} has taken ${timeResult}`);
    }
}
exports.Loger = Loger;
