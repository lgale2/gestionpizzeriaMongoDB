import mongoose, {mongo} from "mongoose";
import AutoIncrementFactory  from 'mongoose-sequence'

const AutoIncrement = AutoIncrementFactory (mongoose)

// Pedido (BD No Relacional)
// HEAD: Code, CustomerCode, SubTotal, Total.
// DETAIL: Code, ItemCode, Quantity, Price, otros.

const orderSchema = new mongoose.Schema({
    Code:{
        type: Number,
        unique: true
    },
    CustomerCode:{
        type: Number,
        
    },
    Subtotal:{
        type: Number,
        min: 0
    },
    Total:{
        type: Number,
        min: 0
    }
},
{
    timestamps: true,
},
);

orderSchema.plugin(AutoIncrement, {inc_field: 'Code'})

export default mongoose.model('order', orderSchema)