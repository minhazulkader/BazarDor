# 🛒 বাজার দর | BazarDor

<p align="center">
  <strong>প্রয়োজনীয় পণ্যের দাম এক নজরে</strong>
  <br />
  A Smart Daily Market Price Tracker for Bangladesh
</p>

<p align="center">
  <a href="https://bazar-dor-bd.netlify.app/">🌐 Live Website</a> ·
  <a href="https://github.com/minhazulkader/BazarDor">📦 GitHub Repository</a>
</p>

---

## 📖 About The Project

**বাজার দর (BazarDor)** is a modern, responsive web application designed to help people in Bangladesh check and compare the prices of everyday essential products.

Users can explore daily market prices of rice, lentils, vegetables, fish, meat, eggs, oil, spices, and other necessary products in one place.

The application provides product-wise price information, category-based browsing, market price comparisons, and user authentication for a better experience.


## ✨ Key Features

### 1. 🏠 Modern Homepage
- Clean and user-friendly homepage.
- Responsive design for mobile, tablet, and desktop.
- Attractive hero section with a call-to-action button.
- Displays essential market products.

### 2. 📈 Live-Style Market Price Ticker
- Scrolling market price ticker.
- Displays product names, prices, and price changes.
- Helps users quickly identify market price movements.

### 3. 📦 Product Listing & Categories
- Browse all available products.
- Explore products by category.
- Responsive product card layout.
- Product prices displayed using Bengali numerals.
- Loading skeletons while fetching data.

### 4. 📊 Product Details & Price Comparison
- Individual product detail pages.
- Minimum, maximum, and average price information.
- Market-wise price comparison.
- Product information and unit details.
- Protected product detail routes for authenticated users.

### 5. 🔐 Authentication System
Powered by **Better Auth**.

- Email and password registration.
- Email and password login.
- Google authentication.
- GitHub authentication.
- User session management.
- Sign out functionality.
- Protected routes.

### 6. 👤 User Profile Management
- View user profile information.
- Update profile name.
- Manage authenticated user sessions.

### 7. 🔃 Product Sorting
- Default sorting.
- Price: Low to High.
- Price: High to Low.
- Supports Bengali numerals for numeric sorting.

### 8. 📱 Fully Responsive Design
- Mobile-friendly navigation.
- Responsive product grids.
- Tablet and desktop layouts.
- Consistent UI across screen sizes.

### 9. 🔔 Toast Notifications
- Login success and error notifications.
- Registration notifications.
- Logout confirmation.
- Form validation feedback.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework and application routing |
| React | User interface development |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| DaisyUI | UI components |
| Better Auth | Authentication and session management |
| MongoDB | Database |
| MongoDB Adapter | Better Auth database integration |
| React Hot Toast | Toast notifications |
| REST API | Market product and category data |
| Git & GitHub | Version control |
| Netlify | Deployment and hosting |

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js (LTS version)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/minhazulkader/BazarDor.git
```

### 2. Navigate to the project directory

```bash
cd BazarDor
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory.

Add the following environment variables:

```env
# MongoDB
DATABASE_URI=your_mongodb_connection_string
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=bazar-dor

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Important:** Replace the placeholder values with your actual credentials. Never commit `.env.local` or expose secret keys publicly.

### 5. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🔑 Authentication Configuration

This project uses Better Auth with MongoDB.

Supported authentication providers:

- Email & Password
- Google OAuth
- GitHub OAuth

For production deployment, configure the appropriate environment variables in your hosting provider.

OAuth callback URLs:

**Google:**
```text
https://bazar-dor-bd.netlify.app/api/auth/callback/google
```

**GitHub:**
```text
https://bazar-dor-bd.netlify.app/api/auth/callback/github
```

---

## 🚀 Deployment

The application is deployed using Netlify.

**Live Website:**  
https://bazar-dor-bd.netlify.app/

For production deployment:

1. Connect the GitHub repository to Netlify.
2. Configure the required environment variables.
3. Set the production Better Auth URL.
4. Configure Google and GitHub OAuth callback URLs.
5. Deploy the application.

---

## 📂 Project Links

- **Live Website:** https://bazar-dor-bd.netlify.app/
- **GitHub Repository:** https://github.com/minhazulkader/BazarDor

---

## 👨‍💻 Developer

**Minhazul Kader Tonmoy**

CSE Student | Frontend Developer

---

<p align="center">
  Made with ❤️ in Bangladesh
  <br />
  <strong>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</strong>
</p>
