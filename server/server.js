const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5481;

const FeatureToggle = require('./models/FeatureToggle');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/featureToggleDB', { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB database connection established successfully"));

const featureToggleRoutes = express.Router();
featureToggleRoutes.route('/').get((req, res) => {
    FeatureToggle.find((err, featureToggles) => {
        if (err) {
            console.log(err);
        } else {
            res.json(featureToggles);
        }
    });
});

featureToggleRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    FeatureToggle.findById(id, (err, featureToggle) => {
        res.json(featureToggle);
    });
});

featureToggleRoutes.route('/add').post((req, res) => {
    let featureToggle = new FeatureToggle(req.body);
    featureToggle.save()
        .then(featureToggle => {
            res.status(200).json({'featureToggle': 'featureToggle added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new featureToggle failed');
        });
});

featureToggleRoutes.route('/update/:id').post((req, res) => {
    FeatureToggle.findById(req.params.id, (err, featureToggle) => {
        if (!featureToggle)
            res.status(404).send("data is not found");
        else
            featureToggle.description = req.body.description;
            featureToggle.enabled = req.body.enabled;
            featureToggle.updatedBy = req.body.updatedBy;
            featureToggle.updatedOn = new Date;

            featureToggle.save().then(featureToggle => {
                res.json('featureToggle updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/featuretoggles', featureToggleRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});