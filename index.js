// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`
    }
  }
  
  class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
  }
  
  class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`
        }
        else {
            return `${this.name} says squawk!`
        }        
    }
  }

  let rose = new Cat('rose', 'female')
  let koukou = new Bird('koukou', 'male')
  let cocoriko = new Bird('cocoriko', 'female')
  console.log(rose.speak())
  console.log(koukou.speak())
  console.log(cocoriko.speak())

