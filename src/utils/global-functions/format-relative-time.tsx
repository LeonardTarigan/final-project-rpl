export function formatRelativeTime(date: Date): string {
  const now: Date = new Date();
  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 3600) {
    const minutes: number = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 86400) {
    const hours: number = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 2592000) {
    const days: number = Math.floor(diffInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 31536000) {
    const months: number = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years: number = Math.floor(diffInSeconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}
