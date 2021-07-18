import { format } from 'date-fns';

const dateToString = (date) => {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy年M月d日 HH時mm分');
};

export default dateToString;
