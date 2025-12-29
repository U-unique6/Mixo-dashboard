Mixo Ads – Frontend Engineer Challenge

This project is a Campaign Monitoring Dashboard.
It is built as part of the Mixo Ads Frontend Engineer Challenge.

The dashboard shows campaign details like budget, status, platform, and created date using the provided backend API.

Live Demo

(Add your deployed link here)
Example: https://mixo-dashboard.vercel.app

GitHub Repository

(Add your GitHub repo link here)

What This Project Does

Fetches campaign data from an API

Displays campaigns in a table

Shows total budget, daily budget, and active campaigns

Allows searching campaigns by name

Allows filtering campaigns by status

Shows a loading shimmer while data is loading

Handles API errors

Technology Used

React

TypeScript

Tailwind CSS

Fetch API

Vercel (for deployment)

Backend API

Base URL:

https://mixo-fe-backend-task.vercel.app


Endpoint used:

GET /campaigns


Example response:

{
  "id": "camp_001",
  "name": "Summer Sale - Meta",
  "brand_id": "brand_001",
  "status": "active",
  "budget": 10000,
  "daily_budget": 500,
  "platforms": ["meta"],
  "created_at": "2025-11-01T10:00:00Z"
}

Project Folder Structure
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── constants/
 ├── types/


Explanation:

components → UI parts (table, filters, cards, loader)

pages → Main dashboard page

services → API calls

constants → All static text (strings)

types → TypeScript types

Features Explained
Dashboard

Shows all campaigns in a table

Displays campaign name, status, platform, budget, daily budget, and created date

Summary Cards

Total Budget

Total Daily Budget

Number of Active Campaigns

Search

Search campaigns using campaign name

Filter

Filter campaigns by status (All / Active / Paused)

Loading State

Shows a shimmer (skeleton loader) while data is loading

Error Handling

Shows an error message if API fails

Strings Handling

All constant text is stored in:

src/constants/strings.ts


This makes the code:

Easy to maintain

Easy to change text in one place

Ready for multi-language support

How to Run the Project
Step 1: Clone the project
git clone https://github.com/your-username/mixo-dashboard.git
cd mixo-dashboard

Step 2: Install dependencies
npm install

Step 3: Start the project
npm run dev


Open browser:

http://localhost:5173

How to Build for Production
npm run build

Deployment

The project is deployed using Vercel.

Steps:

Push code to GitHub

Import repository in Vercel

Deploy

Design Decisions (Simple Explanation)

Used fetch API to keep the project lightweight

Used Tailwind CSS for fast and clean UI

Used shimmer loader for better user experience

Focused on real API data instead of guessing metrics

Future Improvements

Pagination

Sorting

Charts

Dark mode

Author

Umanshi Rajput