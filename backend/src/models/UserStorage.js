"use strict";

const db = require("../config/db");

class UserStorage{
    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data)=>{
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query,[userInfo.id, userInfo.name, userInfo.psword], 
            (err)=>{
                if (err) reject(`${err}`);
                resolve({success: true});
            });
        });
    }

    static async updateExercise(exInfo){
            return new Promise((resolve, reject)=>{

                const query_del = "DELETE FROM exercises WHERE dates = ?;";
                db.query(query_del,[exInfo.dates], 
                    (err)=>{
                        if (err) reject(`${err}`);
                        resolve({success: true});
                    });

                const query = "INSERT INTO exercises(dates,kinds,setIdx,reps,weight,checked) VALUES(?, ?, ?, ?,?,?);";
                exInfo.exercises.forEach(element => element.sets.forEach(function(e,i){
                    db.query(query, [exInfo.dates, element.kinds,i+1,e.reps,e.weight,e.checked], 
                        (err)=>{
                            if (err) reject(`${err}`);
                            resolve({success: true});
                        }
                    );
                }));
            });
    }

    static async readExercise(date){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM exercises WHERE dates = ?;";
            db.query(query, [date], 
            (err, data)=>{
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    // static async updateExercise(exInfo){
    //     return new Promise((resolve, reject)=>{
    //         const query = "UPDATE exercises SET kinds = ?, reps = ?, weight = ? WHERE dates = ?;";
    //         db.query(query, [exInfo.kinds, exInfo.reps, exInfo.weight, exInfo.dates], 
    //         (err)=>{
    //             if (err) reject(`${err}`);
    //             resolve({success: true});
    //         });
    //     });
    // }
}

module.exports = UserStorage;