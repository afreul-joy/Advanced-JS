 class Support {
     name; 
     designation ='Support Web Dev';   //property 

     constructor (name,address) {     //constructor-special method
        this.name=name;         
        this.address=address
     }
     startSession(){     //normal method
         console.log(`${this.name} Start a support session`);
     }
 }

 const amir = new Support('Amir',"China");
 const Salman = new Support('Salman',"Poland");
 amir.startSession()
 console.log(amir);
 console.log(Salman);


