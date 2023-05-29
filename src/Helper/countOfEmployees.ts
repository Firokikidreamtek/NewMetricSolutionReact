export const countOfEmployees = (value: any) => {
  const str = "Alfred";
  if (value > 1) {
    return `${value} сотрудников`;
  } else {
    return `${value} сотрудник`;
  }
};
