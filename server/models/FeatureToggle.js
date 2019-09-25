const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeatureToggle = new Schema({
    description: {
        type: String
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
    },
    enabled: {
        type: Boolean
    }
});

module.exports = mongoose.model('featureToggles', FeatureToggle);