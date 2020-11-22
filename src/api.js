const BaseUrl = "https://www.breakingbadapi.com/api/"

export const getCharacters = async (page,numPerPage) => {
  const limit = `limit=${numPerPage}`
  const initialIndex = `offset=${(page-1)*numPerPage}`
  const params = `?${limit}&${initialIndex}`
  const response = await fetchData(`${BaseUrl}characters`,params)
  return response
}

export const getQuoteByName = async name => {
  const splitName = name.split(" ")
  let params = "?author="
  splitName.forEach((name,id) => {
    if(id < (splitName.length - 1)) {
      params+=`${name}+`
    } else {
      params+=`${name}`
    }
  });
  const response = await fetchData(`${BaseUrl}quote`,params)
  return response
}

export const getRandomQuote = async () => {
  const response = await fetchData(`${BaseUrl}quote/random`)
  return response
}

async function fetchData (url, params="") {
  const response = await fetch(`${url}${params}`)
  console.log(response);
  const data = await response.json()
  if(data.length > 0) {
    return data
  } else {
    throw new Error("no data was found")
  }
}