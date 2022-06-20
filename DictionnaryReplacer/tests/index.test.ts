import { expect } from 'chai';
import { dictionnaryReplacer } from '../src';

const dictionnary = {
  firstname: 'Georges',
  lastname: 'Sempéré',
  age: 42,
};

describe('DictionnaryReplacer', () => {
  it('Replace $firstname$ by Georges', () => {
    const template = '$firstname$ is here !';
    const sentence = dictionnaryReplacer(template, dictionnary);
    expect(sentence).equal('Georges is here !');
  });
  it('Replace $lastname$ by Sempéré', () => {
    const template = '$lastname$ is a beautiful name.';
    const sentence = dictionnaryReplacer(template, dictionnary);
    expect(sentence).equal('Sempéré is a beautiful name.');
  });
  it('Replace $age$ by 42', () => {
    const template = '$age$ is pretty young !';
    const sentence = dictionnaryReplacer(template, dictionnary);
    expect(sentence).equal('42 is pretty young !');
  });
  it('Replace $firstname$ by Georges, $lastname$ by Sempéré and $age$ by 42', () => {
    const template = '$firstname$ $lastname$ is $age$ years old.';
    const sentence = dictionnaryReplacer(template, dictionnary);
    expect(sentence).equal('Georges Sempéré is 42 years old.');
  });
  it('Dont replace $key$ if not in dictionnary', () => {
    const template = '$plop$ is not in dictionnary.';
    const sentence = dictionnaryReplacer(template, dictionnary);
    expect(sentence).equal('$plop$ is not in dictionnary.');
  });
});
