export const getDefaultValues = (inputs, user) =>
  inputs.reduce(
    (acc, input) => ({
      ...acc,
      [input.inputName]: user[input.inputName],
    }),
    {}
  );
