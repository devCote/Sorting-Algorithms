import { Sorter } from './Sorter';
import { Generate } from './Generate';
import { Timer } from './Timer';
import { Loger } from './Loger';

const gen = new Generate();
const sorter = new Sorter();
const timer = new Timer();
const loger = new Loger();

gen.setSize = 1000;
gen.setNumberRange.min = 2;
gen.setNumberRange.max = 99999;
const arr = gen.generateArray;

const proccedure = (input: number[], func: Function, name: string) => {
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
