class OrderDetailRepository {
  constructor(OrderDetail) {
    this.OrderDetail = OrderDetail;
  }

  async findAll() {
    return await this.OrderDetail.find();
  }

  async findById(id) {
    return await this.OrderDetail.findById(id);
  }

  async create(data) {
    return await this.OrderDetail.create(data);
  }

  async update(id, data) {
    return await this.OrderDetail.findOneAndUpdate({ _id: id }, data
    );
  }

  async delete(id) {
    return await this.OrderDetail.findOneAndDelete({ _id: id });
  }
}

export default OrderDetailRepository;
