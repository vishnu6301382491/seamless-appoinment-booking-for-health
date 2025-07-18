const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kommulanehemya77:Nehemya77@cluster0.ewgfmfm.mongodb.net/docspot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => res.send('Backend running'));
app.listen(5000, () => console.log('Server started on port 5000'));
