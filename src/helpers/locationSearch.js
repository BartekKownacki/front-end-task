import { ipv4Regex, urlRegex } from 'assets/constants/regex';
import { get } from 'services/api';

const validateSearch = (value) => {
  if (ipv4Regex.test(value) || urlRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const getLocation = async (inputValue) => {
  const result = await get(inputValue);
  const searchedLocation = {
    ip: result.ip,
    country: result.country_name,
    continent: result.continent_name,
    city: result.city,
    capital: result.location.capital,
    latitude: result.latitude,
    longitude: result.longitude,
  };
  return searchedLocation;
};

export { validateSearch, getLocation };
