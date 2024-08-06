const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    shortId:{
        type: String,
        unique: true,
    },

    redirectURL:{
        type: String,
        required:true,
        unique: true
    },

},
{
    Timestamp: true
}
)

const urls = mongoose.model("urls", urlSchema);

module.exports = urls;