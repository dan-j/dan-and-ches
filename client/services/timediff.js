const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

export default (now, then) => {
  const diff = parseInt((then - now) / 1000, 10);

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (diff > 0) {
    days = Math.floor(diff / SECONDS_IN_DAY);
    hours = Math.floor(diff / SECONDS_IN_HOUR) % 24;
    minutes = Math.floor(diff / SECONDS_IN_MINUTE) % 60;
    seconds = Math.floor(diff % 60);
  }

  return { days, hours, minutes, seconds };
};
