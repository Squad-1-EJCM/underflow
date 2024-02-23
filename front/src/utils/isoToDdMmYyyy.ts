function isoToDdMmYyyy(isoString: string) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  console.log(day);
  return `${day}/${month}/${year}`;
}

export default isoToDdMmYyyy;
