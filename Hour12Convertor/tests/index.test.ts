import { expect } from 'chai';
import { getHour12Formatted, Hour24 } from '../src';

describe('Hour12Converter', () => {
  it('Must handle 03:40', () => {
    const hour24 = '03:40';
    const hour12 = getHour12Formatted(hour24);
    expect(hour12).equal('03:40AM');
  });
  it('Must handle 14:12', () => {
    const hour24 = '14:12';
    const hour12 = getHour12Formatted(hour24);
    expect(hour12).equal('02:12PM');
  });
  it('Must handle 00:20', () => {
    const hour24 = '00:20';
    const hour12 = getHour12Formatted(hour24);
    expect(hour12).equal('12:20AM');
  });
  it('Must handle 12:01', () => {
    const hour24 = '12:01';
    const hour12 = getHour12Formatted(hour24);
    expect(hour12).equal('12:01PM');
  });
  it('Must throw 12:', () => {
    const hour24 = '12:' as Hour24;
    expect(() => getHour12Formatted(hour24)).to.throw();
  });
  it('Must throw 12:zz', () => {
    const hour24 = '12:zz' as Hour24;
    expect(() => getHour12Formatted(hour24)).to.throw();
  });
  it('Must throw zz:12', () => {
    const hour24 = 'zz:12' as Hour24;
    expect(() => getHour12Formatted(hour24)).to.throw();
  });
  it('Must throw 1222', () => {
    const hour24 = '1222' as Hour24;
    expect(() => getHour12Formatted(hour24)).to.throw();
  });
});
