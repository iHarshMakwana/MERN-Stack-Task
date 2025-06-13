const mongoose = require('mongoose');
const Destination = require('./models/Destination');
const Package = require('./models/Package');

mongoose.connect('mongodb://127.0.0.1:27017/abmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

const imageURL = 'https://images.unsplash.com/photo-1749627995669-4d4dda3a9c1d';

const seedDestinations = [
  { name: 'Jammu & Kashmir', price: '₹4999/-', image: imageURL },
  { name: 'Himachal Pradesh', price: '₹4999/-', image: imageURL },
  { name: 'Goa', price: '₹4999/-', image: imageURL },
  { name: 'Assam', price: '₹4999/-', image: imageURL },
  { name: 'Maharashtra', price: '₹4999/-', image: imageURL },
  { name: 'Kerala', price: '₹4999/-', image: imageURL },
];


const seedPackages = [
  { title: 'Golden Temple Tour', description: 'A spiritual journey to Amritsar', image: imageURL },
  { title: 'Amazing Kerala Tour', description: 'Explore backwaters and greenery', image: imageURL },
  { title: 'Kashmir Holiday Tour', description: 'Heaven on earth experience', image: imageURL },
  { title: 'Rajasthan Tour', description: 'Palaces, forts, and deserts', image: imageURL },
  { title: 'Trip to Goa', description: 'Beaches and parties', image: imageURL },
  { title: 'Nainital Escape', description: 'Hills and lake retreat', image: imageURL },
];


async function seedDB() {
  await Destination.deleteMany({});
  await Package.deleteMany({});

  await Destination.insertMany(seedDestinations);
  await Package.insertMany(seedPackages);

  console.log('Database seeded with mock data');
  mongoose.connection.close();
}

seedDB();
