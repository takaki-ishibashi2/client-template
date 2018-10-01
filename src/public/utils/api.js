import axios from 'axios';
export const fetchRandomUserDataJson = () => {
  return axios.get('https://randomuser.me/api/')
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('Error:', err.message);
      return {};
    });
}
