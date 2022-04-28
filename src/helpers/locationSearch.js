import { ipv4Regex, urlRegex } from 'assets/constants/regex';

const validateSearch = (value) => {
  if (ipv4Regex.test(value) || urlRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

export { validateSearch };
