//HOMEWORK FROM CLASS 13
class Person{
    constructor(fNAme, lName, age, adress, fullName){
        this.fNAme = fNAme;
        this.lName = lName;
        this.age = age;
        this.adress = adress;
        this.fullName = function(){
            console.log(`${this.fNAme} ${this.lName}`);
        }
    }
}
let person = new Person("test1", "test2")

class Student extends Person{
    constructor(fNAme, lName, age, adress, subjects, academy){
        super(fNAme, lName, age, adress)
        this.subjects = subjects;
        this.academy = academy;
    }
    static studying(student, subject){
        return student.subjects.includes(subject)
    }
}

let student = new Student('Bob', 'Bobsky', 25, 'some street', ['science', 'math'], 'some academy');

person.fullName()
console.log(student);
console.log(Student.studying(student, `science`));
console.log(Student.studying(student, `art`));
console.log(Student.studying(student, `math`));