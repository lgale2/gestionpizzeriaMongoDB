class OrderRepository {
  constructor(Order) {
    this.Order = Order;
  }

  async findAll() {
    return await this.Order.find();
  }

  async findById(id) {
    return await this.Order.findById(id);
  }

  async create(data) {
    return await this.Order.create(data);
  }

  async update(id, data) {
    return await this.Order.findOneAndUpdate( { _id: id }, data );
  }

  async delete(id) {
    return await this.Order.findOneAndDelete({ _id: id } );
  }
}

export default OrderRepository;
