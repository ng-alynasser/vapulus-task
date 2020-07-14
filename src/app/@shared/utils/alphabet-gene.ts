export function generateAlphabet(charA: string, charZ: string): string[] {
  let alphabetArray = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);

  for (; i <= j; ++i) {
    alphabetArray.push(String.fromCharCode(i));
  }

  return alphabetArray;
}
