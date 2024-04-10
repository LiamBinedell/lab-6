const { app } = require('@azure/functions');
const fs = require('fs/promises');
const path = require('path')

app.http('getCars', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try{
            const cars = await fs.readFile(path.resolve(__dirname, 'cars.json'), 'utf-8');
            return {
                body: JSON.stringify(JSON.parse(cars))
            };
        }
        catch(error){
            context.error(500, `Error reading car data: ${error}`);
        }
    }
});
