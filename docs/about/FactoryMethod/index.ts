// 输入两个数和运算符号得到运算结果

// 面向过程 

// -通过封装实现-> 面向对象 
// -通过继承多态实现-> 工厂模式
abstract class Operation {
  protected _numberA: number = 0;
  protected _numberB: number = 0;
  enterA(a: number): void {
    this._numberA = a;
  }
  enterB(b: number): void {
    this._numberB = b;
  }
  abstract getResult(): number;
}

class OperationAdd extends Operation {
  constructor() {
    super()
  }
  getResult(): number {
    return this._numberA + this._numberB;
  }
}
class OperationSub extends Operation {
  constructor() {
    super()
  }
  getResult(): number {
    return this._numberA - this._numberB;
  }
}
class OperationMul extends Operation {
  constructor() {
    super()
  }
  getResult(): number {
    return this._numberA * this._numberB;
  }
}
class OperationDiv extends Operation {
  constructor() {
    super()
  }
  getResult(): number {
    return this._numberA / this._numberB;
  }
}

class OperationFactory {
  createOperate(operate: string): Operation {
    let opera: Operation = null;
    switch (operate) {
      case '+':
        opera = new OperationAdd();
        break
      case '-':
        opera = new OperationSub();
        break
      case '*':
        opera = new OperationMul();
        break
      case '/':
        opera = new OperationDiv();
        break
    }
    return opera
  }
}

const operaFactory = new OperationFactory();
const opera = operaFactory.createOperate('/');
opera.enterA(5);
opera.enterB(2);
console.log(opera.getResult())
