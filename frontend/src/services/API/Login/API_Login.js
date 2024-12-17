import axios from 'axios';

export default class API_Autorization {

    constructor(api_url) {
        this.url = api_url;
    }


    SignIn(email,password,OnFinishedCallback = (err,result) => {}) {
        axios.post(`${this.url}/auth/login`,
            {
                email: email,
                password: password
            }
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }

    RequestReset(email,OnFinishedCallback = (err,result) => {}) {
        axios.get(
            `${this.url}/auth/restore/request?email=${email}`
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }

    SendResetPin(pin,OnFinishedCallback = (err,result) => {}) {
        axios.get(
            `${this.url}/auth/restore/pin?pin=${pin}`
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }

    SendPasswordChange(email,key,password,OnFinishedCallback = (err,result) => {}) {
        console.log("CHANGE!")
        axios.post(
            `${this.url}/auth/restore/change`,
            {
                password: password,
                key: key,
                email: email
            }
        ).then(response => {
            OnFinishedCallback(false,response.data);
        }).catch(err => OnFinishedCallback(true,err.response.data));
    }
}