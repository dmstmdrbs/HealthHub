"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
}


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);

    },
    checkID: async (req, res) => {
        const user = new User(req.body);
        const response = await user.checkID();
        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    addUserInfo: async (req, res) => {
        const user = new User(req.body);
        const response = await user.addUserInfo();
        return res.json(response);

    },

    getUserUID: async (req, res) => {
        req.body = req.params.id;
        const user = new User(req.body);
        const response = await user.getUserUID();
        return res.json(response);
    },

    saveExercise: async (req, res) => {
        const user = new User(req.body);
        const response = await user.saveExercise();
        return res.json(response);
    },
    getExercise: async (req, res) => {
        req.body = req.params.date;
        const user = new User(req.body);
        const response = await user.getExercise();
        return res.json(response);
    },
    saveUserInfo: async (req, res) => {
        const user = new User(req.body);
        const response = await user.saveUserInfo();
        return res.json(response);
    },
    getUserInfo: async (req, res) => {
        req.body = req.params.uName;
        const user = new User(req.body);
        const response = await user.getUserInfo();
        return res.json(response);
    },


}

module.exports = {
    output,
    process,
};