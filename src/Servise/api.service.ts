import axios from 'axios'
import User from '../Model/User'
export default new class apiService{
    BASE_URL="http://jsonplaceholder.typicode.com"
    getUser(){
        return axios.get(`${this.BASE_URL}/Users`)
    }
    deleteUser(user_id:User){
        return axios.delete(`${this.BASE_URL}/Users/${user_id.id}`)
    }
}