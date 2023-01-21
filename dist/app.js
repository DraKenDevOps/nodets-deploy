import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    return res.json("Hello world!");
});
app.listen(3344, () => {
    console.log('listening on port 3344');
});
//# sourceMappingURL=app.js.map