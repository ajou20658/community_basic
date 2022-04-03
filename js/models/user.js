"use strict";
const userstorage = require("./userstorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body=this.body;
        const {id,pswd}=userstorage.getuserinfo(body.id);
        if(id){
            if(id===body.id&&pswd===body.pswd){
                return{success:true};
            }
            return{success:false,msg:"비밀번호가 틀림"};
        }return{success:false,msg:"존재하지 않는 아이디입니다"};
    }
    
}

module.exports=User;