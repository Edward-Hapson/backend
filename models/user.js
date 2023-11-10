// require dependencies
const { Schema, model } = require("mongoose")

const schema = new Schema({

    username: {
        type: String,
        required: true,
        index: true
    },

    password: {
        type: String,
        required: true,
        index: true
    },
 

}, {
    timestamps: true
})

// INDEXING
schema.index({ updatedAt: -1 }, { background: true })
schema.index({ createdAt: -1 }, { background: true })

// AUTO-POPULATE
schema.plugin(require("mongoose-autopopulate"))

// MODEL
const User = model('user', schema)

// EXPORT
module.exports = User