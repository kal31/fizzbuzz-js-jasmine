class FizzBuzz {
// _ infront of a method indictaes private method 
// one that should be only be available in that class 
   play(number) {
       
    if (number % 3 === 0 && number % 5 == 0){
        return 'FizzBuzz';
    }else if(number % 5 == 0) {
        return 'Buzz';
    }else if  (number % 3 == 0) {
        return 'Fizz';
    }else {
        return number;
    }
       
   }

}

// make sure each describe has to tests 
//(it) number divisibe by 10 and not divisible by 10

