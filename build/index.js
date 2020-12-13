"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const Generate_1 = require("./Generate");
const Timer_1 = require("./Timer");
const Loger_1 = require("./Loger");
const gen = new Generate_1.Generate();
const sorter = new Sorter_1.Sorter();
const timer = new Timer_1.Timer();
const loger = new Loger_1.Loger();
gen.setSize = 1000;
gen.setNumberRange.min = 2;
gen.setNumberRange.max = 99999;
const arr = gen.generateArray;
const proccedure = (input, func, name) => {
    timer.startTimer();
    func(input);
    timer.stopTimer();
    console.log(func.name);
    loger.log(timer.time.result, arr, name);
};
proccedure(arr, sorter.bubleSort, 'bubleSort');
proccedure(arr, sorter.insertionSort, 'insertionSort');
proccedure(arr, sorter.selectionSort, 'selectionSort');
proccedure(arr, sorter.cycleSort, 'cycleSort');