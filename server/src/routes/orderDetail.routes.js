
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

const orderDetailRepository = new OrderDetailRepository(OrderDetail)
const orderDetailController = new OrderDetailController(orderDetailRepository, orderRepository)


const router = Router();

router.get('/orderdet', (req, res) => orderDetailController.getOrderDetail(req, res))
router.get('/orderdet/:id', (req, res) => orderDetailController.getOrderDetailId(req, res))
router.post('/orderdet', (req, res) => orderDetailController.saveOrderDetail(req, res))
router.put('/orderdet/:id', (req, res) => orderDetailController.updateOrderDetail(req, res))
router.delete('/orderdet/:id', (req, res) => orderDetailController.deleteOrderDetail(req, res))
export default router;