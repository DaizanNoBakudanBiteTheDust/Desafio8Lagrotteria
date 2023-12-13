import Carts from '../dao/dbManagers/cart.manager.js';

const manager = new Carts(); 

const getAllCarts = async () => {
    const carts = await manager.getAll();

    return carts;
}

const saveCart = async () => {
    const saveCarts = await manager.save();

    return saveCarts;
}

const cartUpdate = async () => {
    const updateCarts = await manager.update();

    return updateCarts;
}

const cartDelete = async () => {
    const deleteCarts = await manager.delete();

    return deleteCarts;
}

const cartById = async () => {
    const idCarts = await manager.getCartById();

    return idCarts;
}

const cartProductId = async () => {
    const productCarts = await manager.getProductById();

    return productCarts;
}


const cartDeleteProduct = async () => {
    const deleteProductCarts = await manager.deleteProductById();

    return deleteProductCarts;
}


export{
    getAllCarts,
    saveCart,
    cartDelete,
    cartUpdate,
    cartById,
    cartProductId,
    cartDeleteProduct
}