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
            next(err);
        }  
    }

    
    // static async addInventory(req, res, next) {
    //     try {
    //         const { name, type, stock, price } = req.body;
    //         const { user_id: userId } = req.headers;
            
    //         const data = {
    //             name,
    //             type,
    //             stock,
    //             price,
    //             status: "active",
    //             OwnerId: userId
    //         };

    //         const newInventory = await Inventory.create(data);

    //         res.status(201).json(newInventory);

    //     } catch (err) {
    //         next(err)
    //     }
    // }

    // static async updateInventory(req, res, next) {
    //     try {
    //         const { name, type, stock, price, status } = req.body;
    //         const { user_id: userId } = req.headers;
    //         const inventoryId = req.params.id

    //         let data = {
    //             name,
    //             type,
    //             stock,
    //             price,
    //             status
    //         }

    //         let dataInventory = await Inventory.findOne({
    //             where: {
    //                 id: inventoryId
    //             }
    //         })
            
    //         if(dataInventory) {
    //             const result = await Inventory.update(data, {
    //                 where: { id: inventoryId, OwnerId: userId },
    //                 returning: true,
    //                 individualHooks: true,
    //             })

    //             res.status(200).json(result[1][0])
    //         } else {
    //             next({
    //                 name: "NOTFOUND",
    //                 status: 404,
    //                 msg: `Inventory ID ${inventoryId} not found on Update`
    //             })
    //         }
    //     } catch (err) {
    //         next(err)
    //     }
    // }
 
    // static async deleteInventory(req, res, next) {
    //     try {
    //         const inventoryId = req.params.id
    //         const { user_id: userId } = req.headers;


    //         let dataInventory = await Inventory.findOne({
    //             where: {
    //                 id: inventoryId,
    //                 OwnerId: userId
    //             }
    //         })

    //         if(dataInventory) {
    //             await Inventory.destroy({
    //                 where: { id: inventoryId },
    //                 individualHooks: true,
    //             })
    //             res.status(200).json({ message: `Inventory ${dataInventory.name} has been deleted` })
    //         } else {
    //             next({
    //                 name: "NOTFOUND",
    //                 status: 404,
    //                 msg: `Inventory ID ${inventoryId} not found on Delete`
    //             })
    //         }
    //     } catch (err) {        
    //         next(err) 
    //     }
    // }
}

module.exports = InventoryController