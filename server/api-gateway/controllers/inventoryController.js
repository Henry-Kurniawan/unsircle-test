const axios = require('axios');

const BASE_URL_INVENTORIES = "http://localhost:4002";

class InventoryController {
    static async viewAll(req, res, next) {
        try {
            const { id: userId } = req.currentUser
            const { data } = await axios({
                method: "GET",
                url: `${BASE_URL_INVENTORIES}/inventories`,
                headers: {
                    user_id: userId
                }
            });

            res.status(200).json(data);

        } catch (err) {
            if(err.response.data) {
                next ({
                    name: "SERVICESERROR",
                    status: err.response.status,
                    msg: err.response.data.msg,
                });
            } else {
                next(err);
            }
        }  
    }

    static async viewInventoryById(req, res, next) {
        try {
            const { id: userId } = req.currentUser;
            const inventoryId = req.params.id;
            const { data } = await axios({
                method: "GET",
                url: `${BASE_URL_INVENTORIES}/inventories/${inventoryId}`,
                headers: {
                    user_id: userId
                }
            });
            res.status(200).json(data);

        } catch (err) {
            if(err.response.data) {
                next ({
                    name: "SERVICESERROR",
                    status: err.response.status,
                    msg: err.response.data.msg,
                });
            } else {
                next(err);
            }
        }  
    }

    
    static async addInventory(req, res, next) {
        try {
            const { name, type, stock, price } = req.body;
            const { id: userId } = req.currentUser
            
            const payload = {
                name,
                type,
                stock,
                price
            };

            const { data } = await axios({
                method: "POST",
                url: `${BASE_URL_INVENTORIES}/inventories`,
                headers: {
                    user_id: userId
                },
                data: payload
            });

            res.status(201).json(data);

        } catch (err) {
            if(err.response.data) {
                next ({
                    name: "SERVICESERROR",
                    status: err.response.status,
                    msg: err.response.data.msg,
                });
            } else {
                next(err);
            }
        }
    }

    static async updateInventory(req, res, next) {
        try {
            const { name, type, stock, price } = req.body;
            const { id: userId } = req.currentUser;
            const inventoryId = req.params.id;

            let payload = {
                name,
                type,
                stock,
                price
            }

            const { data } = await axios({
                method: "PUT",
                url: `${BASE_URL_INVENTORIES}/inventories/${inventoryId}`,
                headers: {
                    user_id: userId
                },
                data: payload
            });

            res.status(200).json(data);
        } catch (err) {
            if(err.response.data) {
                next ({
                    name: "SERVICESERROR",
                    status: err.response.status,
                    msg: err.response.data.msg,
                });
            } else {
                next(err);
            }
        }
    }
 
    static async deleteInventory(req, res, next) {
        try {
            const inventoryId = req.params.id;
            const { id: userId } = req.currentUser;


            const { data } = await axios({
                method: "DELETE",
                url: `${BASE_URL_INVENTORIES}/inventories/${inventoryId}`,
                headers: {
                    user_id: userId
                }
            });

            res.status(200).json(data);
            
        } catch (err) {        
            if(err.response.data) {
                next ({
                    name: "SERVICESERROR",
                    status: err.response.status,
                    msg: err.response.data.msg,
                });
            } else {
                next(err);
            } 
        }
    }
}

module.exports = InventoryController