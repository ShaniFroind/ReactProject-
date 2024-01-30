import { idText } from "typescript"

export default class User{
id!:string
name!:string
userName!:string
email!:string
constructor(id:string,Name:string,UserName:string,Email:string){
    this.id=id;
    this.name=Name;
    this.userName=UserName;
    this.email=Email
}
}