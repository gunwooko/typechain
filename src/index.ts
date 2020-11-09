// interface Human { // interface는 TS에서만 실행 가능하다.
//   name:string,
//   age:number,
//   gender:string
// }

class Human {
  public name: string;
  public age: number;
  public gender: string
  constructor(name:string, age: number, gender:string){
    this.name = name;
    this.age = age;
    this.gender = gender
  }
}

// const person ={
//     name : "Gunwoo",
//     age : 29, 
//     gender : "male"
// }

const Som = new Human('Som', 28, "female")

const sayHi = (person: Human):string => {
// 매개변수의 각 타입을 정해줄 수 있고, 또한 리턴값의 타입을 정해줄 수 있다. 이로써 더욱 선명한 코드를 작성할 수 있게 된다. 
    return (`hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!`)
 
}

console.log(sayHi(Som))

export ={}