import axios from 'axios';

const KEY='AIzaSyDiC95G9uLC4FnxztfYbsE8k6ZELKB6-Pg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});