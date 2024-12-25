const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const foodRoutes = require('./src/routes/foodRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

const app = express();
const port = 3020;

app.use(
    cors({
      origin: "*", // Cho phép truy cập từ tất cả các domain
    })
  ); // Thêm middleware CORS để cho phép truy cập từ các domain khác

app.use(bodyParser.json()); // Giúp parse dữ liệu JSON
app.use('/api', foodRoutes); 
app.use('/api', userRoutes);
app.use('/api', cartRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});