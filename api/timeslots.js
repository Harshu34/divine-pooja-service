// Time slots
const timeSlots = [
  { id: 1, time: "6:00 AM - 10:00 AM", value: "morning" },
  { id: 2, time: "10:00 AM - 2:00 PM", value: "afternoon" },
  { id: 3, time: "2:00 PM - 6:00 PM", value: "evening" }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    res.json(timeSlots);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
