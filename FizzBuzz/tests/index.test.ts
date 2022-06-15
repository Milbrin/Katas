import { expect } from 'chai';
import { getFizzBuzz } from '../src/fizzBuzzService';

describe('FizzBuzz', () => {
  it('Get Fizz if number is 3', () => {
    const result = getFizzBuzz(3);
    expect(result).equal('Fizz');
  });
  it('Dont get Fizz if number is 4', () => {
    const result = getFizzBuzz(4);
    expect(result).not.equal('Fizz');
  });

  it('Get Buzz if number is 5', () => {
    const result = getFizzBuzz(5);
    expect(result).equal('Buzz');
  });
  it('Dont get Buzz if number is 6', () => {
    const result = getFizzBuzz(6);
    expect(result).not.equal('Buzz');
  });

  it('Get Fizz if number is 6', () => {
    const result = getFizzBuzz(6);
    expect(result).equal('Fizz');
  });
  it('Get Buzz if number is 10', () => {
    const result = getFizzBuzz(10);
    expect(result).equal('Buzz');
  });
  it('Get FizzBuzz if number is 15', () => {
    const result = getFizzBuzz(15);
    expect(result).equal('FizzBuzz');
  });
  it('Get FizzBuzz if number is 30', () => {
    const result = getFizzBuzz(30);
    expect(result).equal('FizzBuzz');
  });

  it('Get just the number if number is 4', () => {
    const result = getFizzBuzz(4);
    expect(result).equal('4');
  });
  it('Get just the number if number is 97', () => {
    const result = getFizzBuzz(97);
    expect(result).equal('97');
  });
});
