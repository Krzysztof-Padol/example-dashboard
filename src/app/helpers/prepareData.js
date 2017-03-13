import {TO_SHORT_COLORS_ARRAY} from './../constants/errors';

export function assignColorToData(colors, columns) {
  const dataToDisplay = [];

  if (colors.length < columns.length) {
    throw new Error(TO_SHORT_COLORS_ARRAY);
  }

  columns.forEach((elem, index) => {
    dataToDisplay.push(Object.assign(elem, {color: colors[index]}));
  });

  return dataToDisplay;
}
