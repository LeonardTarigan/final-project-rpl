const generateUsername = (input: string): string => {
  const formattedString = input.replace(/\s/g, "").toLowerCase();

  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const transformedString = `${formattedString}${randomDigits}`;

  return transformedString;
};
