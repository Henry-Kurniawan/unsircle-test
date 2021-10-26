const { Inventory } = require("../models")

class InventoryController {
    static async viewAll(req, res, next) {
        try {
            // const { user_id } = req.headers
            const userId = 1

            let dataInventories = await Inventory.findAll({
                where: {
                    OwnerId: userId
                },
                order: [ ['id', 'ASC']],
                attributes: {
                    exclude:['createdAt', 'updatedAt']
                }
            })

            res.status(200).json(dataInventories)  
        } catch (err) {
            next(err)
        }  
    }

    static async showById(req, res, next) {
        try {
            const { id } = req.params
            let dataItems = await Item.findOne({
                    where: {
                        id
                    },
                    include: [
                        {
                            model: Category,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'status']
                            }
                        },
                        {
                            model: Ingredient,
                            where: {
                                ItemId: id
                            },
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        }
                    ]
                })

            if(dataItems) {
                res.status(200).json(dataItems)
            } else {
                next({
                    name: "NotFound",
                    code: 404,
                    message: `Item ID ${id} not found on Search By Id`
                })
            }
        } catch (err) {
            next(err)
        }
        
    }

    static async addItem(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const { name, description, price, imgUrl, CategoryId, ingredients } = req.body

            // const { id: userId } = req.currentUser
            const userId = 1

            if(!ingredients) { 
                next({
                    name: "NotEmpty",
                    message: "Ingredient is required"
                })
            } 
            
            const data = {
                name,
                description,
                price,
                imgUrl,
                CategoryId,
                AuthorId: userId
            }

            const newItem = await Item.create(data, {
                transaction: t
            })

            const { id: itemId } = newItem
            let inputIngredients = ingredients.split(',')
            let ingredientData = []

            inputIngredients.forEach((el) => {
                let tempObj = {
                    name: el,
                    ItemId: itemId
                }
                ingredientData.push(tempObj)
            }) 

            const newingredient = await Ingredient.bulkCreate(ingredientData, {
                transaction: t   
            })

            await t.commit()

            res.status(201).json({
                newItem,
                newingredient
            })
            
        } catch (err) {
            await t.rollback()
            next(err)
        }
    }

    static async updateItem(req, res, next) {
        try {
            const {name, description, price, imgUrl, CategoryId} = req.body
            const itemId = req.params.id
            let data = {
                name,
                description,
                price,
                CategoryId
            }
            
            if(imgUrl) {
                data.imgUrl = imgUrl
            }
            
            let dataItems = await Item.findOne({
                where: {
                    id: itemId
                }
            })
            
            if(dataItems) {

                const result = await Item.update(data, {
                    where: { id: itemId },
                    returning: true,
                    individualHooks: true,
                    updateType: "PUT"
                })

                
                res.status(200).json(result[1][0])
            } else {
                next({
                    name: "NotFound",
                    code: 404,
                    message: `Item ID ${itemId} not found on Update`
                })
            }
            
        } catch (err) {
            next(err)
        }
    }

    static async updateItemStatus(req, res, next) {
        try {
            const { status } = req.body
            const data = {
                status
            }
            const itemId = req.params.id

            let dataItems = await Item.findOne({
                where: {
                    id: itemId
                }
            })
            
            if(dataItems) {
                const result = await Item.update(data, {
                    where: { id: itemId },
                    returning: true,
                    individualHooks: true,
                    updateType: "PATCH",
                })

                res.status(200).json(result[1][0])

            } else {
                next({
                    name: "NotFound",
                    code: 404,
                    message: `Item ID ${itemId} not found on Update Status`
                })
            }

        } catch (err) {
            next(err)
        }
    }

    static async deleteItem(req, res, next) {
        try {
            const itemId = req.params.id
            let dataItems = await Item.findOne({
                where: {
                    id: itemId
                }
            })

            if(dataItems) {
                await Item.destroy({
                    where: { id: itemId },
                    individualHooks: true,
                })
                res.status(200).json({ message: `Item ${dataItems.name} has been deleted` })
            } else {
                next({
                    name: "NotFound",
                    code: 404,
                    message: `Item ID ${itemId} not found on Delete`
                })
            }
        } catch (err) {        
            next(err) 
        }
    }
}

module.exports = InventoryController