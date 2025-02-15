// 2025-01-27 09:41:23.692Z
const getMonth = (month: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[month - 1];
};

export const getFormattedDate = (date: string) => {
  const formattedDate = date.split('T')[0].split('-');

  return `${getMonth(+formattedDate[1])} ${formattedDate[2]}, ${formattedDate[0]}`;
};
