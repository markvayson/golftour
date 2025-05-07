export const ordinal = (n: number): string => {
  if (11 <= n % 100 && n % 100 <= 13) {
    return `${n}th`;
  }
  const suffix = ["st", "nd", "rd"][(n % 10) - 1] || "th";
  return `${n}${suffix}`;
};
