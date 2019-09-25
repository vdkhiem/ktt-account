const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    companyID: {
        type: Number
    },
    businessName: {
        type: String
    },
    gstTaxNo: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    region: {
        type: String
    },
    postalCode: {
        type: String
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

module.exports = mongoose.model('customers', Customer);
