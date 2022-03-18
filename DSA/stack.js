//Stack-> LIFO
// Queue-> FIFO  Q আগে এবং F আগে

// Stack data structure by using array in class

class Numbers {
  constructor() {
    this.stack = [];            //Empty stack/ তাক 
  }
  add(element) {
    this.stack.push(element);   //push for add element
  }
  remove(element) {
    this.stack.pop(element); //        //pop for remove last element
  }
}

const plates = new Numbers();

// add in stack  
console.log(plates.stack);
plates.add("Abul");
console.log(plates.stack);
plates.add("Karim");
console.log(plates.stack);
plates.add("Rahim");
console.log(plates.stack);
plates.add("Nehal");
console.log(plates.stack);
plates.add("John");
console.log(plates.stack);

//Remove From stack
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);






// class Student{
//     constructor(name,address,email){
//         this.name=name;
//         this.address=address;
//         this.email=email;
//     }
//     display(dept){
//         this.dept=dept
//         console.log(`${this.name},${this.address},${this.email},${this.dept},`)
//     }
// }

// const person=new Student("Joy","Mym","joy@gmail.com")
// person.display("CSE")
// console.log(person);
