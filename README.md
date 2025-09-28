# 🕉️ Divine Pooja Services

A modern, responsive website for booking authentic Vedic pooja services with a complete booking flow and email notifications.

## Features

### 🏠 **Home Page**
- Hero section with call-to-action
- Features showcase
- Popular poojas section
- Customer testimonials
- Responsive design

### 📖 **About Us Page**
- Mission and values
- Team of spiritual guides
- Company heritage and statistics
- Commitment to customers

### 📞 **Contact Us Page**
- Contact information
- Contact form
- FAQ section
- Location details
- Social media links

### 🛍️ **Services Page**
- Search functionality for poojas
- Pooja cards with images, descriptions, and pricing
- Book Now buttons for each service
- Responsive grid layout

### ⏰ **Time Selection Page**
- Available time slots (6 AM - 10 AM, 10 AM - 2 PM, 2 PM - 6 PM)
- Pooja summary
- Instructions and expectations

### 📝 **Booking Form Page**
- Customer details form
- Booking summary
- Email submission to admin
- Important notes and guidelines

## Technology Stack

### Backend
- **Node.js** with Express.js
- **Nodemailer** for email services
- **CORS** for cross-origin requests
- **Body-parser** for request parsing

### Frontend
- **React.js** with functional components
- **React Router** for navigation
- **Axios** for API calls
- **CSS3** with modern styling
- **Responsive design** for all devices

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PUJA
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and React frontend (port 3000).

## Email Configuration

The application uses Gmail SMTP for sending booking notifications. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Update the `.env` file with your credentials

## API Endpoints

- `GET /api/poojas` - Get all available poojas
- `GET /api/timeslots` - Get available time slots
- `POST /api/book-pooja` - Submit booking request

## Booking Flow

1. **Browse Services** - User visits the services page
2. **Search & Select** - User searches and selects a pooja
3. **Time Selection** - User chooses a convenient time slot
4. **Form Submission** - User fills in personal details
5. **Email Notification** - Admin receives formatted email with booking details

## Email Template

The booking confirmation email includes:
- Beautiful HTML formatting
- Pooja details
- Customer information
- Time slot
- Contact information
- Professional styling

## Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: support@divinepoojaservices.com
- Phone: +91 9876543210

---

**Divine Pooja Services** - Connecting you with authentic Vedic traditions and spiritual wisdom.
