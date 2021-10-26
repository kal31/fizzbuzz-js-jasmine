class FizzBuzz {
// _ infront of a method indictaes private method 
// one that should be only be available in that class 

    isDivisibleByThree(number) {
         return number % 3 === 0;
    }

    isDivisibleByFive(number) {
        return number % 5 === 0;
   }

    isDivisibleByFifteen(number) {
        return number % 15 == 0;
    }
 
    play(number) {
      if (this.isDivisibleByFifteen(number)) {
         return 'FizzBuzz';
      } else if (this.isDivisibleByFive(number)) {
         return 'Buzz';
      } else if (this.isDivisibleByThree(number)) {
         return 'Fizz';
      } else {
         return number;
      }
    }
}

// let fizzBuzz = new FizzBuzz();

// for (let i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.play(i));
// }
   





