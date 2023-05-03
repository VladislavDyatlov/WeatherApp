export const onTime = (old_date: number): string =>{
  const getDayName = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const date = new Date();
  const now = new Date(old_date * 1000);

  if (now.getDate() === date.getDate()) {
    return "Сегодня";
  } else if (now.getDate() === date.getDate() + 1) {
    return "Завтра";
  }

  return `${getDayName[now.getDay()]} ${now.getUTCDate()}`;
  // данная функция служит для формирования из числа даты полученной из api в такой ответ Вс 30
  // так же присутствует проверка в которой текущая дата и следующая за ней меняется на Сегодня и Завтра
}

export const onTimes = (old_date: number): string =>{
    const now = new Date(old_date * 1000);
    const nows = `${now.getMinutes()}`;
    
    return `${now.getHours()}:${nows.length !== 2 ? nows.padStart(2, '0') : nows }`;
    // тут сделана проверка на длинну информации переменной nows
    // если у переменной всего один символ то к нему добаляется 0 (5:08 вместо 5:8)
}