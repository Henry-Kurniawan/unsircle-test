const port = process.env.PORT || 4000;
const app = require('../app');

app.listen(port, () => {
    console.log(`API-gateways listening at http://localhost:${port}`);
});