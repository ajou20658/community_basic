"use strict";

class userstorage{
    static #users={
        id:["a","aa","aaa"],
        pswd:["b","bb","bbb"],
        name:["woori","www","w"],
    };

    static getusers(...field){
        const users = this.#users;
        const newusers = field.reduce((newusers, field)=>{
            if(users.hasOwnProperty(field)){
                newusers[field]=users[field];
            }
            return newusers;
        },{});
        return newusers;
    }

    static getuserinfo(id){
        const users=this.#users;
        const idx=users.id.indexOf(id);
        const userkeys=Object.keys(users);
        const userinfo=userkeys.reduce((newuser,info)=>{
            newuser[info]=users[info][idx];
            //console.log(newuser);
            return newuser;
        },{});
        console.log(userinfo);
        return userinfo;
    }

}

module.exports=userstorage;