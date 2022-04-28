import store from 'store/store';
import { AppActions } from 'store/app.actions';

const baseUrl = process.env.REACT_APP_API_URL;
const secret = process.env.REACT_APP_API_SECRET;

const get = async (url) => {
  const res = await fetch(`${baseUrl}${url}?access_key=${secret}`, {
    cache: 'force-cache',
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((res) => {
      return res.ip ? res : Promise.reject(res);
    })
    .catch((err) => {
      store.dispatch(AppActions.setApiError(true));
    });

  return res;
};

export { get };
