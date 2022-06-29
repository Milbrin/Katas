import { match } from 'ts-pattern';

export type Hour24 = `${number}${number}:${number}${number}`;
type Hour12 = `${number}${number}:${number}${number}${'A' | 'P'}M`;

export const getHour12Formatted = (hour24: Hour24) : Hour12 => {
  const [hours, minutes] = hour24.split(':').map((string) => string.trim());
  const hoursWithZero = (hoursInitial: string) => (+hoursInitial < 10 ? `0${+hoursInitial}` : hoursInitial);
  const minutesWithZero = (minutesinitial: string) => (+minutesinitial < 10 ? `0${+minutesinitial}` : minutesinitial);
  const format12 = match({ hours, minutes })
    .when((data) => (data.hours === '' || data.minutes === ''), () => { throw new Error('No hours or minutes'); })
    .when((data) => (Number.isNaN(+data.hours) || Number.isNaN(+data.minutes)), () => { throw new Error('Hours or minutes not valid'); })
    .when((data) => (+data.hours > 23 || +data.hours < 0), (data) => { throw new Error(`Impossible hours : ${data.hours}`); })
    .when((data) => (+data.minutes > 59 || +data.minutes < 0), (data) => { throw new Error(`Impossible minutes : ${data.minutes}`); })
    .when((data) => (+data.hours === 0), (data) => `${+hoursWithZero(data.hours) + 12}:${minutesWithZero(data.minutes)}AM`)
    .when((data) => (+data.hours < 12), (data) => `${hoursWithZero(data.hours)}:${minutesWithZero(data.minutes)}AM`)
    .when((data) => (+data.hours === 12), (data) => `${hoursWithZero(data.hours)}:${minutesWithZero(data.minutes)}PM`)
    .when((data) => (+data.hours > 12), (data) => `${+data.hours - 12 < 10 ? `0${+data.hours - 12}` : +data.hours - 12}:${minutesWithZero(data.minutes)}PM`)
    .otherwise(() => { throw new Error('Unknown problem'); });
  return format12 as Hour12;
};
