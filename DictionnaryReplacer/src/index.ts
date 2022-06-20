/* eslint-disable no-console */
export const dictionnaryReplacer = (template: string, dictionnary: Record<string, string | number>) => {
  let sentence = template;
  Object.keys(dictionnary).forEach((key) => {
    if (sentence.includes(`$${key}$`)) {
      sentence = sentence.replaceAll(`$${key}$`, dictionnary[key].toString());
    }
  });
  return sentence;
};
