const getTotalAttendance = (finals) =>
  finals.reduce(
    (previousValue, currentValue, currentIndex, finals) =>
      finals[currentIndex].location.attendance + previousValue,
    0
  );

export { getTotalAttendance };
