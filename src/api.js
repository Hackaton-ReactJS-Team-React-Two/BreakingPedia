const BaseUrl = "https://www.breakingbadapi.com/api/";

export const getCharacters = async (page, numPerPage) => {
  const limit = `limit=${numPerPage}`;
  const initialIndex = `offset=${(page - 1) * numPerPage}`;
  const params = `?${limit}&${initialIndex}`;
  const response = await fetchData(`characters`, params);
  return response;
};

export const getQuoteByName = async (name, random = false) => {
  const splitName = name.split(" ");
  let url = "";
  let params = "?author=";
  if (random) {
    url = "quote/random";
  } else {
    url = "quote";
  }
  splitName.forEach((name, id) => {
    if (id < splitName.length - 1) {
      params += `${name}+`;
    } else {
      params += `${name}`;
    }
  });
  const response = await fetchData(url, params);
  return response;
};

export const getRandomQuote = async () => {
  const response = await fetchData(`quote/random`);
  return response;
};

async function fetchData(url, params = "") {
  const response = await fetch(`${BaseUrl}${url}${params}`);
  const data = await response.json();
  return data;
}
