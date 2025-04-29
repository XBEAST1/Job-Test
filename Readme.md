# Financial Freedom Pathway

A React.js + Node.js web application that rebuilds the Financial Freedom Pathway website with improved design and functionality.

## Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

## Project Structure

```
.
├── backend/             # Express server
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── .env           # Environment variables
│   └── server.js      # Server entry point
└── frontend/           # React application
    ├── src/
    ├── public/
    └── vite.config.js
```

## Setup & Installation

### MongoDB Setup

#### On Linux:

```bash
# Start MongoDB service
sudo systemctl start mongodb

# Check status
sudo systemctl status mongodb
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
node server.js
```

The backend will run on `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features

- Responsive design matching original website
- Contact form with:
  - Name, Email, and Message fields
  - Backend validation
  - MongoDB storage
- Email list functionality:
  - Stores user contact information
  - Separate message logging
  - API endpoints for data management

## API Endpoints

- `POST /contact` - Submit contact form
- `GET /email-list` - Retrieve email list

```
http://localhost:5000/contact/email-list
```

## Database Schema

### EmailEntry Model

- firstName (String, required)
- lastName (String, required)
- email (String, required, unique)
- timestamps

### MessageLog Model

- firstName (String, required)
- lastName (String, required)
- email (String, required)
- message (String)
- timestamps

## Development Stack

- Frontend: React + Vite
- Backend: Express.js
- Database: MongoDB
- Styling: Bootstrap + Custom CSS