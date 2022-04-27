const baseUrl = process.env.REACT_APP_API_URL;
const secret = process.env.REACT_APP_API_SECRET;

const get = async (url) => {
  const res = await fetch(`${baseUrl}${url}?access_key=${secret}`, {
    cache: "force-cache",
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res.status);
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

export { get };
