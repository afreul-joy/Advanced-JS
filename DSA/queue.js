class Queue {
  constructor() {
    this.queue = [];
  }
  add(element) {
    this.queue.push(element);   //push for add element
  }
  remove(element) {
      this.queue.shift(element);    // "shift" for remove "first" element 
  }
}


const person = new Queue

// add in queue
console.log(person.queue);
person.add("Anis")
console.log(person.queue);
person.add("Jhankar")
console.log(person.queue);
person.add("Harry")
console.log(person.queue);
person.add("Sumit")
console.log(person.queue);
person.add("YahooBaba")
console.log(person.queue);

//Remove From queue
console.log(person.queue);
person.remove()
console.log(person.queue);
person.remove()
console.log(person.queue);
person.remove();
console.log(person.queue);
person.remove()
console.log(person.queue);
person.remove()
console.log(person.queue);



