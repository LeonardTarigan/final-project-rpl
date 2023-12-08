import { Timestamp } from "firebase/firestore";

function formatTime(time: number, unit: string): string {
  const roundedTime = Math.floor(time);
  return roundedTime === 1
    ? `${roundedTime} ${unit} ago`
    : `${roundedTime} ${unit}s ago`;
}

export function formatRelativeTime(timestamp: Timestamp) {
  const now = new Date().getTime();
  const date = timestamp.toDate();
  const timeDifference = now - date.getTime();
  const seconds = timeDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;

  if (seconds < 60) {
    return formatTime(seconds, "second");
  } else if (minutes < 60) {
    return formatTime(minutes, "minute");
  } else if (hours < 24) {
    return formatTime(hours, "hour");
  } else if (days < 7) {
    return formatTime(days, "day");
  } else if (weeks < 4) {
    return formatTime(weeks, "week");
  } else if (months < 12) {
    return formatTime(months, "month");
  } else {
    return formatTime(years, "year");
  }
}
