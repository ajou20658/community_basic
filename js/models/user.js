"use strict";
const userstorage = require("./userstorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client=this.body;
        const {id,pswd}=userstorage.getuserinfo(client.id);
        if(id){
            if(id===client.id&&pswd===client.pswd){
                return{success:true};
            }
            return{success:false,msg:"비밀번호가 틀림"};
        }return{success:false,msg:"존재하지 않는 아이디입니다"};
    }
    
    register(){
        userstorage.save(this.body);
        return{success:true,msg:"가입이 되었습니다"};
    }
}

module.exports=User;