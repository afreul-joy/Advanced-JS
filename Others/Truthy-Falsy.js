// prob-1: যদি ইউজারের নাম ৩ ক্যারেকটারের বেশি হয় এবং ৫ ক্যারেকটারের ছোট হয় তাহলে সেটা ভ্যালিড 

let userName = "Tahsan Khan"

//normal way 
if((userName.length>=3 && userName.length<=5)){
    console.log("valid UserName");
}
else {
    console.log("InValid UserName");
}

//using ! not operator  
if(!(userName.length>=3 && userName.length<=5)){
    console.log("Invalid UserName"); 
}
else {
    console.log("Valid UserName");
}


// // toggle boolean 
// isActive =! isActive 

// null falsy কিন্তু এটার আগে (! not) দিয়ে দিলে সেটা truthy হয়ে যাবে 
let test = !null 
console.log(test);


