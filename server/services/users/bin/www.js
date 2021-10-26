const port = process.env.PORT || 4001;
const app = require('../app');

app.listen(port, () => {
    console.log(`Users services listening at http://localhost:${port}`);
});