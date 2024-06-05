class OrderDetailController {
    constructor(orderDetailRepository, orderRepository) {
        this.orderDetailRepository = orderDetailRepository;
        this.orderRepository = orderRepository;
    }

    async getOrderDetail(req, res) {
        try {
            const ordersDetail = await this.orderDetailRepository.findAll({});
            res.status(200).json(ordersDetail)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    async getOrderDetailId(req, res) {
        try {
            const id = req.params.id;
            const orderDetailId = await this.orderDetailRepository.findById(id);
            if (!orderDetailId) {
                return res.status(404).json({ message: "Order Detail not found" })
            }
            return res.status(200).json(orderDetailId)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async saveOrderDetail(req, res) {
        try {
            const  {
                CodeOrder, ItemCode, Quantity, Price
            } = req.body

            const idOrder = await this.orderRepository.findById(CodeOrder)

            if (!idOrder) {
                return res.status(404).json({ error: "Order not found" });
            }

            const data = {
                CodeOrder: CodeOrder,
                ItemCode: ItemCode,
                Quantity: Quantity,
                Price: Price
            }

            const orderSaved = await this.orderDetailRepository.create(data);
            return res.status(200).json({ message: 'Order Detail placed' })
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }


    async updateOrderDetail(req, res) {
        try {
            const id = req.params.id;
            const  { CodeOrder, ItemCode, Quantity, Price } = req.body
            const idOrder = await this.orderRepository.findById(CodeOrder)
            if (!idOrder) {
                return res.status(404).json({ error: "Order not found" });
            }

            const idDetail = await this.orderDetailRepository.findById(id);

            const data = {
                CodeOrder: CodeOrder,
                ItemCode: ItemCode,
                Quantity: Quantity,
                Price: Price
            }

            const orderDetailUpdated = await this.orderDetailRepository.update(id, data);
            return res.status(200).json({ message: 'Order Detail placed' })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteOrderDetail(req, res) {
        try {
            const id = req.params.id;
            const orderDetailId = await this.orderDetailRepository.findById(id);
            if (!orderDetailId) {
                return res.status(404).json({ message: "Order detail not found" });
            }
            await this.orderDetailRepository.delete(id);
            res.status(200).json({ message: "Deleted order detail" });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export default OrderDetailController;