const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceDetail = new Schema({
    companyID: {
        type: Number
    },
    invoice: {
        type: Schema.Types.ObjectId, 
        ref: 'Invoice'
    },
    description: {
        type: String
    },
    accountID: {
        type: String
    },
    amount: {
        type: Number
    },
    createdBy: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedBy: {
        type: String
    },
    updatedOn: {
        type: Date
    }
});

module.exports = mongoose.model('invoices', InvoiceDetail);
