import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  return new Date(dateString).toLocaleString("fr-FR", dateOptions);
};

export const dayLefts = (date: string) => {
  const endDate = new Date(date);

  return Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
};

export const percentage = (a: number, b: number) => {
  const percentage = Math.round((a / b) * 100);
  return percentage;
};
export const largestValueInArray = (array: number[]) => {
  if (array.length === 0) return 0;
  return array.reduce((largest, current) => (current > largest ? current : largest), 0);
};
export const averageValueInArray = (array: number[]) => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
};

export const sumValueInArray = (array: number[]) => {
  return array.reduce((a, b) => a + b, 0);
};

