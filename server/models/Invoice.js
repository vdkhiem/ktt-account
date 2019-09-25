const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Invoice = new Schema({
    companyID: {
        type: Number
    },
    invoiceNo: {
        type: String
    },
    issueDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    customer: {
        type: Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    // invoices: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'InvoiceDetail'
    // }],
    subTotal: {
        type: Number
    },
    total: {
        type: Number
    },
    amountPaid: {
        type: Number
    },
    deleted: {
        type: Boolean
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

module.exports = mongoose.model('invoices', Invoice);
