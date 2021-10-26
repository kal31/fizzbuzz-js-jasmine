describe('FizzBuzz',() => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
      });

      describe('multiples of 3', () => {
        it('fizzes for 3', () => {
          expect(fizzBuzz.play(3)).toEqual('Fizz');
        });
    
        it('fizzes for 6', () => {
          expect(fizzBuzz.play(6)).toEqual('Fizz');
        });
      });

      describe('multiples of 5', () => {
        it('fizzes for 5', () => {
          expect(fizzBuzz.play(5)).toEqual('Buzz');
        });
    
        it('fizzes for 10', () => {
          expect(fizzBuzz.play(10)).toEqual('Buzz');
        });
      });

      describe('multiples of 3 & 5', () => {
        it('fizzbuzz for 15', () => {
          expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
        });

        it('fizzbuzz for 30', () => {
            expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
          });
    
        
      });

      describe('when NOT divisible by 3,5,or 15', () => {
        it('1 returns 1', () => {
          expect(fizzBuzz.play(1)).toEqual(1);
        });

    
        
      });
});
