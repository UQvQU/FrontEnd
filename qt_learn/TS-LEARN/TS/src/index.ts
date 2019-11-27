// const add = (a: number, ...rest: number[]) => 


// 重载
interface Direction {
  top: number
  right: number
  left: number
  bottom: number
}

// 可能的情况都重写一遍
function assigned(all: number): Direction;
function assigned(topAndBottom: number, leftAndRight: number): Direction;
function assigned(top: number, right: number, left: number, bottom: number): Direction;

// 代码实现函数不可被调用
function assigned (a: number, b?: number, c?:number, d?: number): Direction {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  console.log('assign')
  return {
    top: a,
    right: b || a,
    left: c || a,
    bottom: d || a
  }
}
const a: Direction = assigned(1, 2)
console.log('a', a)


// 泛型
function returnItem1 (para: number): number{
  return para
}

function returnItem2 (para: string): string{
  return para
}

function returnItem3<T>(para: T): T {
  return para
}

function swap<T, U>(params: [T, U]): [U, T] {
  return [params[1], params[0]]
}

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log((arg as Array<any>).length)
  return arg
}

// 泛型接口
interface ReturnItemFn<T>{
  (para: T): T
}

const returnItem: ReturnItemFn<number> = para => para

// 泛型类
class Stack<T> {
  private arr: T[] =[]

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
// 泛型约束
type Params = number | string
class Stack2<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const stack = new Stack2<string>()
// const stack2 = new Stack2<boolean>() 不满足


// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}
// 错误演示
// class Demo<T extends FirstInterface T extends SecondInterface> {
//   private test: T
//   useT() {
//     this.test.doSomething()
//     // this.test.doSomethingElse()
//   }
// }

// 整合多个接口
interface ChildInterface extends FirstInterface, SecondInterface {
}

class Demo2<T extends ChildInterface> {
  private test: T
  useT() {
    this.test.doSomething()
    this.test.doSomethingElse()
  }
}

const d = new Demo2()

// new
function factory<T>(type: {new(): T}): T {
  return new type()
}