
//import sequelize from "../config/db";

import OrderDetailRepository from "../repositories/orderDetailRepository.js"
import OrderDetailController from '../controllers/orderDetailController.js'
import OrderDetail from "../models/OrderDetail.js";

//order 
import OrderRepository from "../repositories/orderRepository.js";
import OrderController from '../controllers/orderController.js'
import Order from "../models/Order.js"
import { Router } from "express";
const orderRepository = new OrderRepository(Order);
const orderController = new OrderController(orderRepository)


const router = Router();

router.get('/order', (req, res) => orderController.getOrder(req, res))
router.get('/order/:id', (req, res) => orderController.getOrderId(req, res))
router.post('/order', (req, res) => orderController.saveOrder(req, res))
router.put('/order/:id', (req, res) => orderController.updateOrder(req, res))
router.delete('/order/:id', (req, res) => orderController.deleteOrder(req, res))
export default router;