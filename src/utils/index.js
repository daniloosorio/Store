/**
 * This function calculates totañ price of a new order
 * @param {Array} products cardProduct: Array of objects 
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let sum =0 // total
    products.forEach(product =>sum += product.price)
    return sum
}