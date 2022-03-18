 class Support {
     designation ='Support Web Dev';   //default property 

     constructor (name,address) {     //constructor-special method
        this.name=name;         
        this.address=address
     }
     startSession(){     //normal method
         console.log(`${this.name} Start a support session`);
     }
 }

 const amir = new Support('Amir',"China");
 amir.startSession()
 console.log(amir);


