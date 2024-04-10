const { app } = require('@azure/functions');
import data from './cars.json' assert { type: 'json' };

app.http('addCar', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const newCar = request.json();
        data.push(newCar);

        return {
            status: 200,
            body: "Car added successfully!"
        };
    }
});
