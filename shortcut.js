let money = 900;
let myVar = 300
// normal way
let food;
if (money>100){
    food = 'biriyani'
    console.log(food);
}
else {
    food="vhaat"
    console.log(food);
}
// ternary
let foodie =  money>100 ? 'biriyani' : 'vhaat'
console.log(foodie);

let drink = (money >100 && myVar > 100) ? 'coke' : 'water'
console.log(drink);


let isActive = true ;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User")
// isActive ? showUser() : hideUser()
isActive && showUser()
isActive || hideUser()

// toggle boolean 
isActive =! isActive 