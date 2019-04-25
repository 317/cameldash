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
export function process(caseList: CaseList, ...parts: Array<string>): string {
  if (caseList === CaseList.CAMEL) {
    return makeCamel(...parts);
  }
  if (caseList === CaseList.DASH) {
    return makeDash(...parts);
  }
  return '';
}

function makeCamel(...parts: Array<string>) {
  let array = Array<String>();
  let stringToParse = parts.pop() + '';
  array = array.concat(parts);
  const stpArray = stringToParse.split(/([A-Z]+[a-z0-9]+)/);
  array = array.map(
    element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase(),
  );
  array = array.concat(stpArray);
  array = array.filter(elt => elt != '');
  const returner = array.join('');
  return returner;
}

function makeDash(...parts: Array<string>) {
  let array = Array<String>();
  let stringToParse = parts.pop() + '';
  array = array.concat(parts);
  const stpArray = stringToParse.split(/([A-Z]+[a-z0-9]+)/);
  array = array.concat(stpArray);
  array = array.map(element => element.toLowerCase());
  array = array.filter(elt => elt != '');
  const returner = array.join('-');
  return returner;
}
