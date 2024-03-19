const express = require('express');
const router = express.Router();
const app = express();
const { createBooking } = require('../Controller/BookingController');

router.post('/create', createBooking);
// Middleware to parse JSON bodies
app.use(express.json());



// Define a port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = router;