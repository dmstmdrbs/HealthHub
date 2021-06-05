"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static checkID(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static readUserUID(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT uID FROM Users WHERE id = ?;";
            db.query(query, [id.id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO Users(id, psword) VALUES(?,?);";
            db.query(query, [userInfo.id, userInfo.psword],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }

    static async addUserInfo(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO userInfo(uID,sex,uName,age,height,weight,squat,bench,dead,weak,proficiency) VALUES(?,?,?,?,?,?,?,?,?,?,?);";
            db.query(query, [userInfo.uID, userInfo.sex, userInfo.uName, userInfo.age, userInfo.height, userInfo.weight, userInfo.squat, userInfo.bench, userInfo.dead, userInfo.weak, userInfo.proficiency],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }

    static async updateExercise(exInfo) {

        return new Promise((resolve, reject) => {

            const query_del = "DELETE FROM exercises WHERE dates = ?;";
            db.query(query_del, [exInfo.dates],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });

            const query = "INSERT INTO exercises(dates,target,kinds,setIdx,reps,weight,checked) VALUES(?,?, ?, ?, ?,?,?);";
            exInfo.exercises.forEach(element => element.sets.forEach(function (e, i) {
                db.query(query, [exInfo.dates, element.target, element.kinds, i + 1, e.reps, e.weight, e.checked],
                    (err) => {
                        if (err) reject(`${err}`);
                        resolve({ success: true });
                    }
                );
            }));
        });
    }

    static async readExercise(date) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM exercises WHERE dates = ?;";
            db.query(query, [date],
                (err, data) => {
                    if (err) reject(`${err}`);
                    resolve(data);
                });
        });
    }

    static async updateUserInfo(userInfo) {

        return new Promise((resolve, reject) => {

            const query = `UPDATE userInfo SET age=?,sex=?,height=?,weight=?, 
            squat=?,bench=?,dead=?,weak=?,proficiency=? WHERE uID = ?;`;
            db.query(query, [userInfo.age, userInfo.sex, userInfo.height, userInfo.weight, userInfo.squat, userInfo.bench, userInfo.dead, userInfo.weak, userInfo.proficiency, userInfo.uID],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }
}

module.exports = UserStorage;