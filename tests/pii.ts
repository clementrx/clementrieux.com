const FRENCH_PHONE = /(?:\+33\s?|\b0)[1-9](?:[\s.-]?\d{2}){4}\b/;
const STREET = /\b\d{1,4}(?:\s?(?:bis|ter))?,?\s+(?:rue|avenue|boulevard|bd|chemin|allée|impasse|place|route|quai)\b/i;
const POSTCODE_CITY = /\b\d{5}\s+[A-ZÉÈ][a-zéèêàç]+/;
const NUMERIC_DATE = /\b(?:0?[1-9]|[12]\d|3[01])[/.-](?:0?[1-9]|1[0-2])[/.-](?:19|20)\d{2}\b/;
const BIRTH_WORDS = /\b(?:né le|née le|born on|date de naissance|fecha de nacimiento)\b/i;

const DETECTORS: ReadonlyArray<[string, RegExp]> = [
  ["phone number", FRENCH_PHONE],
  ["street address", STREET],
  ["postcode and city", POSTCODE_CITY],
  ["full date", NUMERIC_DATE],
  ["birth date wording", BIRTH_WORDS],
];

export function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ");
}

export function findPersonalData(text: string): string[] {
  return DETECTORS.flatMap(([label, pattern]) => {
    const match = pattern.exec(text);
    return match ? [`${label}: "${match[0]}"`] : [];
  });
}
