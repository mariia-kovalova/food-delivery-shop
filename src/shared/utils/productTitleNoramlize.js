export const productTittleNormalize = name => {
  if (name.length <= 16) return name;
  const start = name.slice(0, 14);
  return `${start}...`;
};
