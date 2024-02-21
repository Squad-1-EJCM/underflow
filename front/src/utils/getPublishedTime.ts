export default function getPublishedTime(date: Date) {
  const currentDate = new Date();
  const diff = Math.abs(currentDate.getTime() - date.getTime());
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const oneDayInWeeks = 7;

  const days = Math.floor(diff / oneDayInMilliseconds);
  const weeks = Math.floor(days / oneDayInWeeks);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years) return `Publicado há ${years} ano${years > 1 ? "s" : ""}`;
  if (months) return `Publicado há ${months} mêse${months > 1 ? "s" : ""}`;
  if (weeks) return `Publicado há ${weeks} semana${weeks > 1 ? "s" : ""}`;
  if (days) return `Publicado há ${days} dia${days > 1 ? "s" : ""}`;

  return { days, weeks, months };
}
