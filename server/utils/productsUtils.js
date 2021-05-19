const { default: axios } = require('axios');
const endPoints = require('../constants/endPointsConstants');

/*
 *  Author Firm to be send in api response
 */
exports.authorFirm = {
  name: 'Jonny',
  lastname: 'Acevedo',
};

/*
 *  Build Category List.
 *
 *  Fetch category to api and build an array with [path_from_root]
 *  data parameter to be used as breadcrumb for FE
 *  @param {string} categoryId: Category Id to be fetched
 */
exports.getCategoriesArray = async (categoryId) => {
  const categoryApiOptions = {
    method: 'GET',
    url: `${endPoints.endPointsConstants.PRODUCT_CATEGORIES}/${categoryId}`,
  };

  const categoryResult = await axios(categoryApiOptions).catch(() => {
    return [];
  });

  return categoryResult.data.path_from_root.map((category) => {
    return category.name;
  });
};

/*
 *  Get number unit
 *
 *  Returns number as unit only, removing decimals
 *  @param {int} number: Number to be converted
 */
exports.getNumberUnit = (number) =>
  parseInt(Number.parseFloat(number).toFixed(0), 10);

/*
 *  Get number decimals
 *
 *  Returns decimals values as a number
 *  @param {int} number: Number where decimals are coming from
 */
exports.getNumberDecimals = (number) =>
  parseInt(number.toString().split('.')[1], 10) || null;

/*
 *  Normalize String
 *
 *  Returns string normalized without accents
 *  @param {string} string: String to normalize
 */
exports.normalizeString = (string) =>
  string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
