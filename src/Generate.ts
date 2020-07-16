//random array
export class Generate {
  // class fields
  protected randArr: number[] = [];
  setNumberRange = {
    min: 0,
    max: 100,
  };
  setSize = 10;

  // getters
  get generateArray(): number[] {
    for (let i = 0; i < this.setSize; i++) {
      this.randArr.push(this.generateNumber());
    }
    return this.randArr;
  }

  generateNumber(): number {
    const max = this.setNumberRange.max;
    const min = this.setNumberRange.min;
    const randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
  }
}
