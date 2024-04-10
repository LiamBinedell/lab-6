const { app } = require('@azure/functions');

app.http('getCars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        cars = await fetch('./cars.json');
        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cars)
        };
    }
});
