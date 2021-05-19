const { default: axios } = require('axios');
const productsUtils = require('../utils/productsUtils');
const endPoints = require('../constants/endPointsConstants');
const appConstants = require('../constants/appContants');

/*
 *  Products On Search Controller.
 *
 *  Returns `array` of 4 items related to  query [q] term
 *  @query {string} q: Term to be fetched from mercadolibre.com api
 */
exports.getProductsOnSearch = async (req, res, next) => {
  let { q } = req.query;
  q = productsUtils.normalizeString(q);

  // Getting Products From Search
  const apiOptions = {
    method: 'GET',
    url: `${endPoints.endPointsConstants.SEARCH}${q}`,
  };
  const result = await axios(apiOptions).catch((err) => {
    next(err);
  });

  const { data } = result;

  // Getting categories
  let categories = [];

  /*
   * For some products, categories path for breadcrumbs are under {data.filters}
   * here we map that array to categories to be send
   */
  if (data.filters.length) {
    const categoryFilter = data.filters.filter(
      (filter) => filter.id === appConstants.appConstants.CATEGORY_ID
    )[0];

    if (categoryFilter) {
      categories = categoryFilter.values[0].path_from_root.map((category) => {
        return category.name;
      });
    }
  } else {
    /*
     * For other products, we need to find the category with more results under {data.available_filters}
     * and later do an api fetch call to get breadcrumbs categories path
     */
    const categoryFilter = data.available_filters.filter(
      (filter) => filter.id === appConstants.appConstants.CATEGORY_ID
    )[0];

    if (categoryFilter) {
      const categoryMoreResults = categoryFilter.values.reduce(
        (prev, current) => (prev.results > current.results ? prev : current)
      );

      categories = await productsUtils.getCategoriesArray(
        categoryMoreResults.id
      );
    }
  }

  // Building products object
  let items = data.results;
  if (items.length) {
    /*
     * Since specifications asked for only 4 items to be shown in search result
     * limit is set from start to save resources
     */
    items.length = appConstants.appConstants.PRODUCTS_LIMIT;
    items = items.map((product) => {
      const amount = productsUtils.getNumberUnit(product.price);
      const decimals = productsUtils.getNumberDecimals(product.price);

      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount,
          decimals,
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        city: product.address.city_name,
      };
    });
  }

  res.json({
    author: productsUtils.authorFirm,
    categories,
    items,
  });
};

/*
 *  Product Details Controller.
 *
 *  Returns product details
 *  @param {string} id: Product id to be fetched from mercadolibre.com api
 */
exports.getProductDetails = async (req, res, next) => {
  const { id } = req.params;

  // Getting Product Details
  const options = {
    method: 'GET',
    url: `${endPoints.endPointsConstants.PRODUCT_DETAIL}/${id}`,
  };
  const result = await axios(options).catch((err) => {
    next(err);
  });
  const { data } = result;

  // Getting Product Description
  const descriptionOptions = {
    method: 'GET',
    url: endPoints.endPointsConstants.PRODUCT_DESCRIPTION(id),
  };

  const descriptionResult = await axios(descriptionOptions).catch(() => {
    return {
      data: {
        plain_text: '',
      },
    };
  });

  const description = descriptionResult.data.plain_text;
  const categories = await productsUtils.getCategoriesArray(data.category_id);
  const amount = productsUtils.getNumberUnit(data.price);
  const decimals = productsUtils.getNumberDecimals(data.price);
  const picture =
    data.pictures.length > 0 ? data.pictures[0].url : data.thumbnail;

  // JSON object to be returned from api following specifications
  res.json({
    author: productsUtils.authorFirm,
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount,
        decimals,
      },
      picture,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description,
    },
    categories,
  });
};
