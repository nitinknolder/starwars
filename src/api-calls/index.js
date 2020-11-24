import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export async function searchPeople(name) {
  let resp;
  try {
    const response = await axios.get(`${BASE_URL}/people?search=${name}`);
    resp = {
      count: response.data.count,
      data: response.data.results,
      error: null
    };
  } catch (err) {
    resp = {
      count: 0,
      data: null,
      error: err.message
    };
  }
  return resp;
}
export async function searchPlanets(name) {
  const response = await axios.get(`${BASE_URL}/planets?search=${name}`);
  return {
    count: response.data.count,
    results: response.data.results
  };
}

export async function authenticate(userName, password) {
  let data = {
    isAuthenticated: false,
    error: null
  };
  const response = await searchPeople(userName);
  if (response.data) {
    const findExactUser = response.data.find(item => item.name.toLowerCase() === userName.toLowerCase());
    if (findExactUser) {
      // check password
      data.isAuthenticated = findExactUser.birth_year === password;
    }
  } else {
    data.error=response.error;
  }
  return data;
}
