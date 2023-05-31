const formatNumber = {
  numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  },
  numberWithComas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};

export const { numberWithComas, numberWithSpaces } = formatNumber;
