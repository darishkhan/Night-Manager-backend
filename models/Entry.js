const {default:mongoose} = require('mongoose')
const {Schema} = mongoose;

const EntrySchema = new Schema({
    date:{
        type:Number
    },
    month:{
        type:Number
    },
    year:{
        type: Number
    },
    entry:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('entry', EntrySchema);