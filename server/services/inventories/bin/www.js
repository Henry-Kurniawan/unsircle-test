const port = process.env.PORT || 4002;
const app = require('../app');

app.listen(port, () => {
    console.log(`Inventories services listening at http://localhost:${port}`);
});