import API_Autorization from "./Login/API_Login"
import API_Users from "./Login/API_Users";
import API_Rooms from "./Rooms/API_Rooms";

const API_URL = "http://192.168.1.94:3306"

export default new class API {
    Autroization = new API_Autorization(API_URL);
    Users = new API_Users(API_URL);
    Rooms = new API_Rooms(API_URL);
}