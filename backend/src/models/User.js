"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);
      
            if (user) {
              if (user.id === client.id && user.psword === client.psword) {
                return { success: true };
              }
              return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
          } catch (err) {
            return { success: false, msg: err };
          }
    }

    async checkID(){
        const client = this.body;
        try {
            const user = await UserStorage.checkID(client.id);
      
            if (user) {
              if (user.id === client.id) {
                return { success: true };
              }
            }
            
          } catch (err) {
            return { success: false, msg: err };
          }
    }


    async register(){
        const client = this.body;
        try{

          const user = await UserStorage.getUserInfo(client.id);
      
            if (user) {
              if (user.id === client.id) {
                return { success: false, msg:err};
              }
            }
        const response = await UserStorage.save(client);
        return response;
        } catch (err){
            return { success : false, msg : err};
        }
    }

    async saveExercise(){
      const client = this.body;
      try{
      const response = await UserStorage.updateExercise(client);
      client
      response
      return response;
      } catch (err){
          return { success : false, msg : err};
      }
  }

  async addUserInfo(){
      const client = this.body;
      try{
      const response = await UserStorage.addUserInfo(client);
      client
      response
      return response;
      } catch (err){
          return { success : false, msg : err};
      }
  }

  async getUserUID(){
      const client = this.body;
      try{
      const response = await UserStorage.readUserUID(client);
      return response;
      } catch (err){
          return { success : false, msg : err};
      }
  }

    async getExercise(){
      const client = this.body;
      try{
      const response = await UserStorage.readExercise(client);
      return response;
      } catch (err){
          return { success : false, msg : err};
      }
  }

  async saveUserInfo(){
      const client = this.body;
      try{
      const response = await UserStorage.updateUserInfo(client);
      client
      response
      return response;
      } catch (err){
          return { success : false, msg : err};
      }
  }

    async getUserInfo(){
      const client = this.body;
      try{
      const response = await UserStorage.getUserInfo(client);
      return response;
      } catch (err){
          return { success : false, msg : err};
      }

      
  }
  async getUserInfo_uID(){
      const client = this.body;
      try{
      const response = await UserStorage.getUserInfo_uID(client);
      return response;
      } catch (err){
          return { success : false, msg : err};
      }

      
  }
}

module.exports = User;