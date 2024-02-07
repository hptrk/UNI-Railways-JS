export const formatTime = function (seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};

export const callEverySecond = function (callback) {
  const interval = setInterval(callback, 1000);
  return interval;
};
