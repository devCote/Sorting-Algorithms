interface Function {
  name: string;
}

export class Loger {
  log(timeResult: string, inputResult: number[], name: string): void {
    console.log(inputResult);
    console.log(`${name.toUpperCase()} has taken ${timeResult}`);
  }
}
