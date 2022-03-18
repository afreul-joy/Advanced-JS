//Stack-> LIFO 
// Queue-> FIFO  Q আগে এবং F আগে 

class Stack{
    constructor(){
        this.stack=[]
    }
    add(element){
        this.stack.push(element)
    }
}

const plates = new Stack
plates.add("Abul")
plates.add("Karim")
plates.add("Rahim")

// console.log(plates.stack);


class Student{
    constructor(name,address,email){
        this.name=name;
        this.address=address;
        this.email=email;
    }
    display(dept){
        this.dept=dept
        console.log(`${this.name},${this.address},${this.email},${this.dept},`)
    }
}

const person=new Student("Joy","Mym","joy@gmail.com")
person.display("CSE")
console.log(person);

