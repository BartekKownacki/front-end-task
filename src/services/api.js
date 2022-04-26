const baseUrl = process.env.REACT_APP_API_URL;
const secret = process.env.REACT_APP_API_SECRET;

const get = async (url, useCache) => {
  const res = await fetch(
    `${baseUrl}${url}?access_key=${secret}`,
    useCache ? { cache: "force-cache" } : {}
  ).then((res) => res.json());
  return res;
};

export { get };
