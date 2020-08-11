class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  printData() {
    console.log(`name: ${this.name}, id: ${this.id}`)
  }
}

class Student extends Person {
  constructor(name, id, grades) {
    super(name, id);
    this.grades = grades;

    this.printData(){
      super.printData();
      console.log(`grades: ${this.grades}`)
    }

    addGrade(num){
      this.grades.push(num)
    }
  }
}

let nick = new Person("nick", 123)
nick.printData()