const mongoose = require('mongoose');
const Doctor = require('./models/doctor'); // adjust path if needed

mongoose.connect('mongodb+srv://kommulanehemya77:Nehemya77@cluster0.ewgfmfm.mongodb.net/docspot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const doctors = await Doctor.find({ status: 'approved' });
  console.log(doctors);
  process.exit(0);
})
.catch(err => console.error(err));
