import { describe, expect, it } from "vitest";
import { findPersonalData, htmlToText } from "./pii";

describe("findPersonalData", () => {
  it.each([
    ["06.12.34.56.78", "phone number"],
    ["06 12 34 56 78", "phone number"],
    ["+33 6 12 34 56 78", "phone number"],
    ["13 Rue de la Paix", "street address"],
    ["75002 Paris", "postcode and city"],
    ["01/02/1990", "full date"],
    ["Né le 3 mars", "birth date wording"],
  ])("flags %s as %s", (text, label) => {
    expect(findPersonalData(`Contact ${text} here`).join()).toContain(label);
  });

  it.each([
    "clement.rieux@yahoo.com",
    "2019 – 2021",
    "Data Scientist since 2023",
    "Master 2, Toulouse School of Economics",
  ])("does not flag public information: %s", (text) => {
    expect(findPersonalData(text)).toEqual([]);
  });
});

describe("htmlToText", () => {
  it("drops scripts, styles and tags", () => {
    const html = "<style>a{}</style><p>Hello <b>world</b></p><script>var x=0612345678</script>";
    expect(htmlToText(html).trim()).toBe("Hello world");
  });
});
