import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a Date object to a string in the format "SEP 27 2024".
 * @param date - The Date object to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
  const MONTHS: string[] = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const monthIndex: number = date.getMonth(); // 0-based index
  const day: number = date.getDate(); // 1-31
  const year: number = date.getFullYear();

  const monthAbbreviation: string = MONTHS[monthIndex];

  return `${monthAbbreviation} ${day} ${year}`;
}

/**
 * Checks if the provided date is within 48 hours from the current time.
 * @param inputDate - The Date object to check.
 * @returns `true` if `inputDate` is within the next 48 hours, otherwise `false`.
 */
export function isNew(inputDate: Date): boolean {
  // Get the current date and time
  const now: Date = new Date();

  // Calculate the difference in milliseconds between the input date and now
  const differenceInMs: number = inputDate.getTime() - now.getTime();

  // Convert 48 hours to milliseconds
  const fortyEightHoursInMs: number = 48 * 60 * 60 * 1000; // 48 hours * 60 minutes * 60 seconds * 1000 milliseconds

  // Check if the difference is positive and less than or equal to 48 hours
  return differenceInMs > 0 && differenceInMs <= fortyEightHoursInMs;
}
