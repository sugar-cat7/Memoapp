import { format } from 'date-fns';

export const dateToString = (date) => {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy年M月d日 HH時mm分');
};

// export default dateToString;

export const translateErrors = (code) => {
  const error = { title: 'エラー', description: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'emailadressが不正です';
      break;
    // TODO エラー処理追加
    default:
      error.description = 'エラーです。';
  }
  return error;
};
