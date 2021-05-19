/*
 *  Get query string
 *
 *  Giving a query string name, returns query value
 *  @param {string} query: Query string to search for
 */
const getQueryString = (query) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  return params.get(query);
};

/*
 *  Thousands Separator
 *
 *  Giving a number, returns number separated by dots
 *  on each thousand separator
 *  @param {int} number: Number to format
 */
const thousandSeparator = (number) => {
  const sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
  let numberWithSeparator = `${number}`;
  const separator = '.';

  while (sRegExp.test(numberWithSeparator)) {
    numberWithSeparator = numberWithSeparator.replace(
      sRegExp,
      `$1${separator}$2`
    );
  }
  return numberWithSeparator;
};

/*
 *  Map Product Conditions
 *
 *  Giving a key string, returns translated value
 */
const mapProductCondition = {
  new: 'Nuevo',
  used: 'Usado',
  not_specified: 'No Especificado',
};

export { getQueryString, thousandSeparator, mapProductCondition };
