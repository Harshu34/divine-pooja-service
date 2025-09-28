module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
