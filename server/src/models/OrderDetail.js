import mongoose, {mongo} from "mongoose";
import AutoIncrementFactory  from 'mongoose-sequence'

const AutoIncrement = AutoIncrementFactory(mongoose)

// Pedido (BD No Relacional)
// HEAD: Code, CustomerCode, SubTotal, Total.
// DETAIL: Code, ItemCode, Quantity, Price, otros.

const orderDetailSchema = new mongoose.Schema({
    DetailCode:{
        type: Number,
        unique: true
    },
    CodeOrder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    ItemCode:{ //product
        type: Number
    },
    Quantity:{
        type: Number
    },
    Price:{
        type: Number
    }
},
{
    timestamps: true
}
);

orderDetailSchema.plugin(AutoIncrement, {inc_field: 'DetailCode'})

export default mongoose.model('orderdetail', orderDetailSchema)