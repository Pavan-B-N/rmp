import axios from 'axios';

const client = axios.create({
    baseURL: 'http://192.168.1.25:8000',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

const djangoServer = axios.create({
    baseURL: 'http://virajreddysazzala.pythonanywhere.com',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default client;
export {djangoServer}
