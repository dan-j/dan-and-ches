const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

export default (now, then) => {
  const diff = parseInt((then - now) / 1000, 10);
  const days = Math.floor(diff / SECONDS_IN_DAY);
  const hours = Math.floor(diff / SECONDS_IN_HOUR) % 24;
  const minutes = Math.floor(diff / SECONDS_IN_MINUTE) % 60;
  const seconds = Math.floor(diff % 60);

  return { days, hours, minutes, seconds };
};
