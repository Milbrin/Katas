import { getFizzBuzz } from './fizzBuzzService';

const tryFizzBuzzForOneToCent = () => {
  for (let index = 1; index <= 100; index++) {
    // eslint-disable-next-line no-console
    console.log(`${index} : ${getFizzBuzz(index)}`);
  }
};

tryFizzBuzzForOneToCent();
