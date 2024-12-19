import axios from 'axios';

export default class API_Rooms {

    constructor(api_url) {
        this.url = api_url;
    }


    GetAllRooms(queryAdd,OnFinishedCallback = (err,result) => {}) {
        axios.get(`${this.url}/rooms/get?${queryAdd}`
        ).then(response => {
            console.log(response);
            OnFinishedCallback(false,response.data);
        }).catch(err => {
            console.log(err);
            OnFinishedCallback(true,err.response?.data)
        });
    }

    GetRoom(id,OnFinishedCallback = (err,result) => {}) {
        axios.get(`${this.url}/rooms/get?id=${id}`
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }
}