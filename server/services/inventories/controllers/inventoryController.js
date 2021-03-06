const { Inventory } = require("../models")

class InventoryController {
    static async viewAll(req, res, next) {
        try {
            const { user_id: userId } = req.headers;

            let dataInventories = await Inventory.findAll({
                where: {
                    OwnerId: userId
                },
                order: [ ['id', 'ASC']],
                attributes: {
                    exclude:['createdAt', 'updatedAt']
                }
            });

            res.status(200).json(dataInventories);

        } catch (err) {
            next(err);
        }  
    }

    static async viewInventoryById(req, res, next) {
        try {
            const { user_id: userId } = req.headers;
            const inventoryId = req.params.id;

            let dataInventory = await Inventory.findOne({
                where: {
                    id: inventoryId,
                    OwnerId: userId
                },
                order: [ ['id', 'ASC']],
                attributes: {
                    exclude:['createdAt', 'updatedAt']
                }
            });
            if(!dataInventory) {
                next ({
                    name: 'FORBIDDEN',
                    status: 403,
                    msg: 'Not Authorized to do that',
                });
            } else {
                res.status(200).json(dataInventory);
            }


        } catch (err) {
            next(err);
        }  
    }

    static async addInventory(req, res, next) {
        try {
            const { name, type, stock, price } = req.body;
            const { user_id: userId } = req.headers;
            
            const data = {
                name,
                type,
                stock,
                price,
                status: "active",
                OwnerId: userId
            };

            const newInventory = await Inventory.create(data);

            res.status(201).json(newInventory);

        } catch (err) {
            next(err)
        }
    }

    static async updateInventory(req, res, next) {
        try {
            const { name, type, stock, price } = req.body;
            const { user_id: userId } = req.headers;
            const inventoryId = req.params.id

            let data = {
                name,
                type,
                stock,
                price
            }

            let dataInventory = await Inventory.findOne({
                where: {
                    id: inventoryId
                }
            })
            
            if(dataInventory) {
                const result = await Inventory.update(data, {
                    where: { id: inventoryId, OwnerId: userId },
                    returning: true,
                    individualHooks: true,
                })
                if(!result[1][0]) {
                    next ({
                        name: 'FORBIDDEN',
                        status: 403,
                        msg: 'Not Authorized to do that',
                    });
                } else {
                    res.status(200).json(result[1][0])
                }
            } else {
                next({
                    name: "NOTFOUND",
                    status: 404,
                    msg: `Inventory ID ${inventoryId} not found on Update`
                })
            }
        } catch (err) {
            next(err)
        }
    }
 
    static async deleteInventory(req, res, next) {
        try {
            const inventoryId = req.params.id
            const { user_id: userId } = req.headers;


            let dataInventory = await Inventory.findOne({
                where: {
                    id: inventoryId,
                    OwnerId: userId
                }
            })

            if(dataInventory) {
                await Inventory.destroy({
                    where: { id: inventoryId },
                    individualHooks: true,
                })
                res.status(200).json({ message: `Inventory ${dataInventory.name} has been deleted` })
            } else {
                next({
                    name: "NOTFOUND",
                    status: 404,
                    msg: `Inventory ID ${inventoryId} not found on Delete`
                })
            }
        } catch (err) {        
            next(err) 
        }
    }
}

module.exports = InventoryController