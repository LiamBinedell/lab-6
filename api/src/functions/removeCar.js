const { app } = require('@azure/functions');

app.http('removeCar', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    route: 'removeCar/{carId}',
    handler: async (request, context) => {
        return { body: 'you called me' };
    }
});
