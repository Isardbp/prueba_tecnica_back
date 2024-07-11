const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

let products = [
    { id: 1, name: 'Product Test 1', price: 10.99 },
    { id: 2, name: 'Product U 2', price: 24.99 },
    { id: 3, name: 'Product Test 3', price: 14.49 }
  ];
  
  // Endpoint GET para obtener todos los productos
  app.get('/products', (req, res) => {
    try {
      res.json(products);
    } catch (error) {
      console.error('Error fetching products data:', error);
      res.status(500).send('Error fetching products data');
    }
  });

app.get('/user', async (req, res) => {
    try {
      const response = {
        userName: "Isard",
        mail: "isard.bergonyo@gmail.com",
        img: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
      };
      console.log('Sending user data:', response);
      res.json(response);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).send('Error fetching user data');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
