var Person = function (firstAndLast) {
     this.getFirstName = function () {
          return first;
     };
     this.getLastName = function () {
          return last;
     };
     this.getFullName = function () {
          return first + " " + last;
     };
     this.setFirstName = function (newFirst) {
          first = newFirst;
     };
     this.setLastName = function (newLast) {
          last = newLast;
     };
     this.setFullName = function (firstAndLast) {
          first = firstAndLast.split(" ")[0];
          last = firstAndLast.split(" ")[1];
     };


     var first= firstAndLast.split(" ")[0];
     var last= firstAndLast.split(" ")[1];

     return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();