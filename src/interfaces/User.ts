import {PostType} from './PostType'

export interface User{
    name:string,
    surname:string,
    birthDate:string,
    password:string,
    email:string,
    friends: User[],
    posts:PostType[],
    online:boolean
  }