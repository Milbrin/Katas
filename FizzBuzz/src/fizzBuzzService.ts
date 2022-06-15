const getWordIfCondition = (condition: boolean, word: string) => (condition ? word : '');

export const getFizzBuzz = (number: number) : string => {
  const fizz = getWordIfCondition(number % 3 === 0, 'Fizz');
  const buzz = getWordIfCondition(number % 5 === 0, 'Buzz');
  if (fizz || buzz) return fizz + buzz;
  return number.toString();
};
