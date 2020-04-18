/* @flow */

// 基本类型
const x: number = 10

// 函数参数类型，函数返回值类型
function square (x: number = 5): number {
  return x * x
}

square()
square(x)

// 文字类型
function getColor (name: 'success' | 'warning' | 'danger') {
  switch (name) {
    case 'success': return 'green'
    case 'warning': return 'yellow'
    case 'danger': return 'red'
  }
}

getColor('success')
getColor('danger')

// 泛型
function identity<T>(value: T): T {
  return value
}

identity(5)

// 混合类型
function stringify (value: mixed): string {
  if (typeof value === 'string') {
    return value
  } else {
    return ''
  }
}

stringify('foo')

// 任何类型
function foo (obj: any): number {
  let foo: number = obj.foo
  let bar: number = foo * 2
  return bar
}

const bar = foo({ foo: 2 })

// 也许类型
function acceptsMaybeNumber (value: ?number): string {
  if (typeof value === 'number') {
    return "it is an number: " + value;
  } else {
    return "it is not an number."
  }
}

acceptsMaybeNumber(bar)

// 函数类型
const myMethod = (a: string, ...args: string[]):string => {
  return a + ' ' + args.join(' ')
}

myMethod('foo')
myMethod('foo', 'bar', 'baz')

// 对象类型
const obj: {
  foo: boolean,
  bar?: string
} = {
  foo: false
}

function hasBar (obj: any) {
  if (obj.foo) {
    return bar
  }
}

hasBar(obj)

// 数组类型
const arr1: number[] = [1, 2, 3]
const arr2: Array<string> = ['foo', 'bar']
const arr3: Array<number | string> = [5, 'ffo']

arr1.concat(arr2, arr3)

// 元组类型
const tuple: [number, string, boolean] = [3, 'foo', true]

tuple.toString()

// 类类型
class MyClass {
  static pi: number = 2
  prop: string
  method () {
    this.prop = 'foo'
  }
}

const myClass = new MyClass()

myClass.method()

// 类泛型
class IdentityClass<A, B> {
  name: A
  prop: B
  constructor (name: A, prop: B) {
    this.name = name
    this.prop = prop
  }
  method (val: B): boolean {
    this.prop = val
    return Boolean(val)
  }
}

const identityClass: IdentityClass<string, number> = new IdentityClass('prop', 30)

identityClass.method(5)

// 类型别名
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string
}

const o: MyObject = {
  foo: 5,
  bar: true,
  baz: 'baz'
}

o.toString()

// 类型别名泛型
type IdentityObject<A, B, C> = {
  foo: A,
  bar: B,
  baz: C
}

const identityObj: IdentityObject<number, boolean, string> = {
  foo: 1,
  bar: true,
  baz: 'three'
}

identityObj.toString()

// 接口类型
interface Serializable {
  name: string,
  serialize(): string
}

class Foo {
  name: string = 'Foo'
  serialize () {
    return '[Foo]'
  }
}

const iFoo: Serializable = new Foo()

iFoo.serialize()











