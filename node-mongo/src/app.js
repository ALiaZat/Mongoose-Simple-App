const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const settingRouter = require('./routers/userSetting');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(settingRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})