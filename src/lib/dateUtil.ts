function dateUtil(bidFinish: Date) {
  const now = new Date();
  const diff = bidFinish.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff <= 0) {
    return "0";
  }

  if (days == 0 && hours == 0 && minutes == 0) {
    return seconds + " sec";
  }

  if (days == 0 && hours == 0) {
    return minutes + " min" + " : " + seconds + " sec";
  }

  if (days == 0) {
    return (
      hours + " hour" + " : " + minutes + " min" + " : " + seconds + " sec"
    );
  }

  return (
    days +
    " day" +
    " : " +
    hours +
    " hour" +
    " : " +
    minutes +
    " min" +
    " : " +
    seconds +
    " sec"
  );
}

export default dateUtil;
