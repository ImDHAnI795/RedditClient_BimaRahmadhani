# 🚀 Reddit Client Dashboard

A modern, responsive, and dynamic Reddit client built with HTML, CSS, and JavaScript.

This application allows users to create customizable subreddit lanes, fetch real-time Reddit posts using the Reddit JSON Feed API, and organize multiple communities in a dashboard-style layout. Users can add, remove, and manage subreddit lanes while viewing post information such as titles, authors, upvotes, and comment counts.

The project focuses on API integration, asynchronous programming, state management, DOM manipulation, and responsive frontend development.

---

## ✨ Features

### Subreddit Management

- Add custom subreddit lanes
- Verify subreddit availability
- Remove subreddit lanes
- Save lanes using Local Storage
- Automatically restore saved lanes on reload

### Reddit Feed Integration

- Fetch posts from Reddit JSON API
- Display subreddit posts dynamically
- Show post titles
- Show author usernames
- Show upvote counts
- Show comment counts
- Open posts directly on Reddit

### User Experience

- Responsive dashboard layout
- Loading state while fetching data
- Error handling for invalid subreddits
- Dynamic lane rendering
- Smooth user interactions
- Modern dashboard-style interface

### Data Persistence

- Store subreddit lanes using Local Storage
- Restore user preferences automatically

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### APIs

- Reddit JSON Feed API

### JavaScript Concepts

- DOM Manipulation
- Event Handling
- Event Delegation
- Fetch API
- Async/Await
- Asynchronous Programming
- State Management
- Local Storage API
- Dynamic Rendering

### Styling Techniques

- Flexbox
- Responsive Design
- Dashboard Layout
- Modern UI Components

---

## 📂 Project Structure

```text
reddit-client-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/reddit-client-dashboard.git
```

### 2. Navigate to the Project Folder

```bash
cd reddit-client-dashboard
```

### 3. Run the Project

#### Option 1: Live Server (Recommended)

Using Visual Studio Code:

- Install the Live Server extension
- Open the project folder
- Right-click `index.html`
- Select **Open with Live Server**

#### Option 2: Open Directly

Open:

```text
index.html
```

in your preferred browser.

---

## 🔗 Reddit API Endpoint

The application uses Reddit's JSON feed:

```http
GET https://www.reddit.com/r/{subreddit}.json
```

Example:

```http
https://www.reddit.com/r/javascript.json
```

Alternative feeds:

```http
https://www.reddit.com/r/javascript/hot.json
https://www.reddit.com/r/javascript/new.json
https://www.reddit.com/r/javascript/top.json
```

---

## 🎮 How to Use

### Add a Subreddit Lane

1. Enter a subreddit name.
2. Click **Add Lane**.
3. The application fetches posts from Reddit.
4. A new lane is created displaying subreddit content.

Example:

```text
javascript
webdev
programming
reactjs
technology
```

### View Posts

Each lane displays:

- Post Title
- Author
- Upvotes
- Comments
- Thumbnail (when available)

### Remove a Lane

Click the **Remove** button in the lane header to delete a subreddit lane.

---

## 📱 Responsive Design

The dashboard is optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## ⚠️ Error Handling

The application handles:

- Invalid subreddit names
- Network failures
- API request failures
- Empty subreddit responses
- Unexpected API errors

---

## 🎯 Learning Objectives

This project was created to practice:

- Working with external APIs
- Handling asynchronous requests
- Managing application state
- Building dynamic user interfaces
- Updating the DOM efficiently
- Storing user data locally
- Creating responsive dashboard layouts

---

## ⚡ Core Functionality

### API Integration

```javascript
Fetch Reddit Posts
Process JSON Responses
Handle API Errors
```

### State Management

```javascript
Add Lane
Remove Lane
Save Lanes
Restore Lanes
```

### DOM Manipulation

```javascript
Create Dynamic Elements
Render Posts
Update UI States
```

### Asynchronous Programming

```javascript
Fetch API
Async/Await
Promise Handling
```

---

## 🔮 Future Improvements

Potential enhancements include:

- Refresh Individual Lanes
- Search Posts Within Lanes
- Sort by Hot / New / Top / Rising
- Infinite Scrolling
- Drag and Drop Lane Reordering
- Dark/Light Theme Toggle
- Bookmark Favorite Posts
- Reddit User Profile Preview
- Post Filtering Options
- Progressive Web App (PWA)
- Backend API Proxy Support

---

## 🏆 Skills Demonstrated

This project showcases:

- HTML Semantic Structure
- CSS Layout and Responsive Design
- JavaScript Fundamentals
- DOM Manipulation
- API Integration
- Asynchronous Programming
- State Management
- Local Storage Persistence
- Error Handling
- Dynamic UI Development

---

## 🤝 Contributing

Contributions are welcome.

### Steps

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed as a frontend project to practice API integration, asynchronous programming, state management, DOM manipulation, and responsive dashboard development while working with real-time Reddit data.
