const baseApi = 'https://api.mercadolibre.com';

exports.endPointsConstants = {
  SEARCH: `${baseApi}/sites/MLA/search?q=`,
  PRODUCT_DETAIL: `${baseApi}/items`,
  PRODUCT_DESCRIPTION: (id) => `${baseApi}/items/${id}/description`,
  PRODUCT_CATEGORIES: `${baseApi}/categories`,
};
