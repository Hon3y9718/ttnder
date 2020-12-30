import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-techicious.herokuapp.com'
});

export default instance