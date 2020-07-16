"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
//random array
class Generate {
    constructor() {
        // class fields
        this.randArr = [];
        this.setNumberRange = {
            min: 0,
            max: 100,
        };
        this.setSize = 10;
    }
    // getters
    get generateArray() {
        for (let i = 0; i < this.setSize; i++) {
            this.randArr.push(this.generateNumber());
        }
        return this.randArr;
    }
    generateNumber() {
        const max = this.setNumberRange.max;
        const min = this.setNumberRange.min;
        const randomNum = Math.random() * (max - min) + min;
        return Math.round(randomNum);
    }
}
exports.Generate = Generate;
