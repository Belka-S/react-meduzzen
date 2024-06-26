export const getAnswerArr = (
  obj: { [key: string]: unknown },
  isReverse: boolean,
) => {
  const arr = (Object.keys(obj) as Array<keyof typeof obj>).reduce(
    (acc, key) => {
      if (obj[key] && String(key).includes('question_answer_')) {
        acc.push(obj[key]);
      }
      return acc;
    },
    [] as (typeof obj)[keyof typeof obj][],
  );

  return isReverse ? arr.reverse() : arr;
};
