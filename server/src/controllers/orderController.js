import OrderRepository from "../repositories/orderRepository.js";
import Order from "../models/Order.js";

const orderRepository = new OrderRepository(Order)

class OrderController {
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    }

    async getOrder(req, res){
        try {
            const orders = await this.orderRepository.findAll({});
            res.status(200).json(orders)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    async getOrderId(req, res){
        try {
            const id = req.params.id;
            const orderId = await this.orderRepository.findById(id);
            if(!orderId){
                return res.status(404).json({ message: "Order not found" })
            }
            return res.status(200).json(orderId)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async saveOrder(req, res){
        try {
            const order = {
                CustomerCode: req.body.CustomerCode,
                Subtotal: req.body.Subtotal,
                Total: req.body.Total,
            }

            const orderSaved = await this.orderRepository.create(order);
            return res.status(200).json({message: 'Order placed'})
        } catch (error) {
            res.status(500).json(error)
        }
    }


    async updateOrder(req, res){
        try {
            const id = req.params.id;
            const { CustomerCode, Subtotal, Total} = req.body;
            const orderId = await this.orderRepository.findById(id);
            if (!orderId) {
                return res.status(404).json({ error: "Order not found" });
              }

            const data = {
                CustomerCode: CustomerCode,
                Subtotal: Subtotal,
                Total: Total
            }

            const orderUpdated = await this.orderRepository.update(id, data);
            console.log(orderUpdated)
            return res.status(200).json({message: 'Order placed'})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteOrder(req, res) {
        try {
          const id = req.params.id;
          const orderId = await this.orderRepository.findById(id);
          if (!orderId) {
            return res.status(404).json({ message: "Order not found" });
          }
          await this.orderRepository.delete(id);
          res.status(200).json({ message: "Deleted order" });
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
      }
}

export default OrderController;