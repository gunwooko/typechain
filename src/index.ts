const name = "Gunwoo",
age = 29, 
gender = "male";

const sayHi = (name: string, age: number, gender?:string):string => {
// 매개변수의 각 타입을 정해줄 수 있고, 또한 리턴값의 타입을 정해줄 수 있다. 이로써 더욱 선명한 코드를 작성할 수 있게 된다. 
    return (`hello ${name}, you are ${age}, you are a ${gender}!!`)
 
}

console.log(sayHi(name, age, gender))

export ={}