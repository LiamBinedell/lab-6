const { app } = require('@azure/functions');
import data from './cars.json' assert { type: 'json' };

app.http('getCars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        };
    }
});
