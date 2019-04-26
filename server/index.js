const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const funds = require('./seedDB');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/funds', async (req, res, next) => {
    try {
        return res.status(200).json(
            funds.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    description_short: el.description_short,
                    image: el.image,
                }
            })
        );
    } catch (err) {
        return res.status(404).send({ message: err });
    }
});

app.get('/api/funds/:fundId', async (req, res, next) => {
    try {
        const found = funds.filter(el => {
            return el.id === +req.params.fundId});
        if (found.length === 0) {
            return res.status(404).send({ message: 'Fund not found' });
        }
        return res.status(200).json(
            {
                id: found[0].id,
                name: found[0].name,
                description_full: found[0].description_full,
                amount_min: found[0].amount_min,
                amount_max: found[0].amount_max,
            }
    );
        } catch (err) {
        return res.status(404).send({ message: err });
    }
});

app.post('/api/funds/:fundId', async (req, res, next) => {
    try {
        const found = funds.filter(el => {
            return el.id === +req.params.fundId});
        if (found.length === 0) {
            return res.status(404).send({ message: 'Fund not found' });
        }
        return res.status(200).json({ status:true });
    } catch (err) {
        return res.status(404).send({ message: 'Something wrong' });
    }
});

app.use('', async (req, res, next) => {
    try {
        return res.status(404).send({ message: 'Wrong path' });
    } catch (err) {
        return res.status(404).send({ message: 'Wrong path' });
    }
});

app.use((error, req, res, next) => {
    const { statusCode: status, message, data } = error;
    res.status(status).json({ message, data });
});

app.listen(8888, () => {
    console.log('server started at 8888 port');
});
