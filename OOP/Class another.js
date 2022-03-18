class Student {
    constructor(name,id){
        this.name=name;
        this.id=id
    }
    project(){
        console.log(`${this.name} doing project`);
    }
}
firstStudent = new Student("Rahim","101")
firstStudent.project()
console.log(firstStudent);



