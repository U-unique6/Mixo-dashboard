# 🚀 Mixo Ads – Frontend Engineer Challenge

This project is a **Campaign Monitoring Dashboard** built as part of the **Mixo Ads Frontend Engineer Challenge**.

The dashboard displays campaign details such as **budget, status, platform, and created date** using the provided backend API.

---

## 🔗 Live Demo
https://mixo-dashboard-git-master-umanshi.vercel.app/

## 📂 GitHub Repository
https://github.com/U-unique6/Mixo-dashboard

---

## 📌 What This Project Does

- Fetches campaign data from a backend API  
- Displays campaigns in a responsive table  
- Shows summary metrics:
  - Total Budget  
  - Total Daily Budget  
  - Active Campaigns  
- Allows searching campaigns by name  
- Allows filtering campaigns by status (All / Active / Paused)  
- Shows a shimmer (skeleton loader) while data is loading  
- Handles API error states  

---

## 🛠 Technology Used

- React  
- TypeScript  
- Tailwind CSS  
- Fetch API  
- Vercel (deployment)

---

## 🌐 Backend API

**Base URL**
https://mixo-fe-backend-task.vercel.app

markdown
Copy code

**Endpoint Used**
GET /campaigns

pgsql
Copy code

**Example API Response**
```json
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
📁 Project Folder Structure
css
Copy code
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── constants/
 ├── types/
Folder Explanation
components → UI components (table, filters, cards, shimmer loader)

pages → Main dashboard page

services → API logic

constants → Centralized static strings

types → TypeScript interfaces

✨ Features Explained
📊 Dashboard
Displays all campaigns in a table

Shows campaign name, status, platform, budget, daily budget, and created date

📈 Summary Cards
Total Budget

Total Daily Budget

Number of Active Campaigns

🔍 Search
Search campaigns by campaign name

🎯 Filter
Filter campaigns by status (All / Active / Paused)

⏳ Loading State
Displays a shimmer (skeleton loader) while data is loading

❌ Error Handling
Shows an error message if the API request fails

🧵 Strings Handling
All constant UI text is stored in:

bash
Copy code
src/constants/strings.ts
Benefits
Easy to maintain

Easy to update text from one place

Ready for multi-language (i18n) support

▶️ How to Run the Project Locally
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/U-unique6/Mixo-dashboard.git
cd mixo-dashboard
Step 2: Install Dependencies
bash
Copy code
npm install
Step 3: Start the Development Server
bash
Copy code
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173
📦 Build for Production
bash
Copy code
npm run build
☁️ Deployment
The project is deployed using Vercel.

Deployment Steps
Push code to GitHub

Import repository into Vercel

Deploy

🧠 Design Decisions
Used Fetch API to keep the project lightweight

Used Tailwind CSS for fast and clean UI

Used shimmer loader for better user experience

Focused on real API data instead of assuming metrics


👩‍💻 Author
Umanshi Rajput


