class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender = gender,
    this.interests = interests
    this.bio = function() {
      return [`${this.fullName} is ${this.age} years old. They like ${this.interests}`]
     }
  }
  
  get fullName() {
    let fullName = [this.firstName, this.lastName]
   return fullName
  }

  
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests,subject, bio) {
    super(firstName, lastName, age, gender, interests, bio),
    this.subject = subject
  }

  greeting() {
    return [`Hello. My name is ${this.fullName} and I teach ${subject}`]
  }
}
class Student extends Person {
  constructor(firstName, lastName, age, gender, interests, bio) {
    super(firstName, lastName, age, gender, interests, bio)
  }

  greeting() {
    return [`Yo, I'm ${this.name}`]
  }
}