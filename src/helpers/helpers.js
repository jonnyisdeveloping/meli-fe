const getQueryString = (query) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  return params.get(query);
};

export default getQueryString;
