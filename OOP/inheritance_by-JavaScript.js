class Laptop{
    constructor(name,brand){
        this.name=name;
        this.brand=brand;
    }
    prices(price){
        this.prices=price
        console.log(`Laptop = ${this.name},${this.brand},${this.price}`);
    }
}

// const firstLaptop=new Laptop("Macbook","Apple")
// firstLaptop.prices("10")
// console.log(firstLaptop);

class Ram extends Laptop {
    ramName(name){
        this.name=name;
        console.log(`${this.name}`);
    }
}

secondLaptop=new Ram("840","Hp")
console.log(secondLaptop);
secondLaptop.ramName("corsair")