/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  handleFetch,
  setNav,
  getEl
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const [secret, _err] = await handleFetch('/api/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }

  const fetchBtn = getEl('#fetch-btn')

  fetchBtn.addEventListener('click', async () => {
    const [data, err] = await getPostsFromDB()
    console.log(data)
  })

  async function getPostsFromDB() {
    const url = `/api/posts/`;
    const res = await handleFetch(url, {method: "GET"});
    return res
  };

};

main();
