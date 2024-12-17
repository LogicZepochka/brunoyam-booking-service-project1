import axios from 'axios';

export default class API_Users {

    constructor(api_url) {
        this.url = api_url;
    }


    GetUserProfileById(id,OnFinishedCallback = (err,result) => {}) {
        axios.get(`${this.url}/profile/get?id=${id}&loadRooms=true`
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }
}