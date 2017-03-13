export function assignColorToData(colors, columns) {
  const dataToDisplay = [];

  if (colors < columns.length) {
    throw new Error('Not enought colors provided. Please add more');
  }

  columns.forEach((elem, index) => {
    dataToDisplay.push(Object.assign(elem, {color: colors[index]}));
  });

  return dataToDisplay;
}
