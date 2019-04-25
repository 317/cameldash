/**
 * CAMEL for camelcase, or DASH for a dashedcase.
 */
export enum CaseList {
  CAMEL,
  DASH,
}

/**
 * Make a string with all the part according to an algorithm.
 * @param {NameType} nameType The name's type. CAMEL for camelcase, or DASH for a dashedcase.
 * @param {...string} parts ...strings as much string as needed to make the name.
 */
export function process(caseList: CaseList, ...parts: Array<string>): string;
