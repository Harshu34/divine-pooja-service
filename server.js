const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Pooja data
const poojas = [
  {
    id: 1,
    name: "Ganapati Pooja",
    description: "Remove obstacles and bring prosperity to your life and business",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    duration: "2 hours",
    price: "₹1500"
  },
  {
    id: 2,
    name: "Lakshmi Pooja",
    description: "Attract wealth, abundance, and financial prosperity",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "3 hours",
    price: "₹2000"
  },
  {
    id: 3,
    name: "Durga Pooja",
    description: "Seek divine protection and inner strength",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    duration: "4 hours",
    price: "₹2500"
  },
  {
    id: 4,
    name: "Shiva Pooja",
    description: "For peace, spiritual growth, and inner transformation",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "2.5 hours",
    price: "₹1800"
  },
  {
    id: 5,
    name: "Vishnu Pooja",
    description: "For harmony, balance, and divine protection",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    duration: "3 hours",
    price: "₹2200"
  },
  {
    id: 6,
    name: "Saraswati Pooja",
    description: "For knowledge, wisdom, and academic success",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "2 hours",
    price: "₹1600"
  },
  {
    id: 7,
    name: "Hanuman Pooja",
    description: "For courage, strength, and protection from negative energies",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    duration: "2.5 hours",
    price: "₹1700"
  },
  {
    id: 8,
    name: "Krishna Pooja",
    description: "For love, devotion, and spiritual enlightenment",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "3 hours",
    price: "₹2100"
  },
  {
    id: 9,
    name: "Rama Pooja",
    description: "For righteousness, moral values, and family harmony",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    duration: "3.5 hours",
    price: "₹2300"
  },
  {
    id: 10,
    name: "Navagraha Pooja",
    description: "For planetary balance and cosmic harmony",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    duration: "4 hours",
    price: "₹2800"
  }
];

// Time slots
const timeSlots = [
  { id: 1, time: "6:00 AM - 10:00 AM", value: "morning" },
  { id: 2, time: "10:00 AM - 2:00 PM", value: "afternoon" },
  { id: 3, time: "2:00 PM - 6:00 PM", value: "evening" }
];

// Routes
app.get('/api/poojas', (req, res) => {
  res.json(poojas);
});

app.get('/api/timeslots', (req, res) => {
  res.json(timeSlots);
});

// Email sending is now handled by EmailJS on the frontend
// This endpoint is kept for backward compatibility
app.post('/api/book-pooja', async (req, res) => {
  try {
    const { poojaName, timeSlot, name, phone, email, address } = req.body;
    
    // Log the booking for reference
    console.log('Booking received:', {
      poojaName,
      timeSlot,
      name,
      phone,
      email,
      address
    });

    res.json({ success: true, message: 'Booking request received!' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ success: false, message: 'Failed to process booking request' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
