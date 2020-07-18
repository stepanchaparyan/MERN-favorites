export const colorPicker = category => {
  let color;
  switch (category) {
    case 'Film':
      color = 'red';
      break;
    case 'Music':
      color = 'blue';
      break;
    case 'Books':
      color = 'limeGreen';
      break;
    case 'Other':
      color = 'orange';
      break;
    default:
      color = 'black';
  }
  return color;
};
