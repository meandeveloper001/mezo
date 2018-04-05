module.exports = {
  'GET /users': 'UserController.getAll',
  'GET /user/:userId/orders': 'UserController.getUserOrders',
  'GET /user/orders': 'AdminController.getAllUserOrders',
  'PUT /user/image': 'UserController.upload',
  'POST /order': 'OrderController.insertOrder',
  'POST /venue': 'AdminController.insertVenue',
  'POST /menu': 'AdminController.insertMenu',
  'POST /menu/:menuId/menuItem': 'AdminController.insertMenuItem',
  'POST /cart': 'UserController.insertCart',
  'POST /cart/:cartId/cartItem': 'UserController.insertCartItems',
  'POST /order/:orderId/orderItems': 'OrderController.dispatchCartItems',   
};
