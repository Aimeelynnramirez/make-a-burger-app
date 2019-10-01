import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://make-a-burger-app.firebaseio.com'
});

export default instance;