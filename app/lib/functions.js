export function limitStringTo15Words(inputString) {
  // Split the string into an array of words
  const words = inputString.split(/\s+/);

  // Take the first 15 words
  const truncatedWords = words.slice(0, 15);

  // Join the words back into a string
  const truncatedString = truncatedWords.join(" ");

  // Add "..." to the end if there are more than 15 words
  const finalString =
    words.length > 15 ? truncatedString + "..." : truncatedString;

  return finalString;
}
