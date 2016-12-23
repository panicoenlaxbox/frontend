function Person(firstName, lastName) {
    this.firstName  = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.lastName;
    this.greet = function() {
        return "Hello " + this.fullName;
    }
}
module.exports = Person;