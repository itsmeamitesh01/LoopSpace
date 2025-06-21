# 🌐 LoopSpace – MERN Stack Social Media App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/itsmeamitesh01/LoopSpace)
![Repo Size](https://img.shields.io/github/repo-size/itsmeamitesh01/LoopSpace)



LoopSpace is a feature-rich **social media web application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It enables users to connect, share updates, and interact through posts, comments, and likes — all in a modern, responsive UI.

---

## 🔧 Features

1. **User Authentication** – Secure sign-up and login with JWT  
2. **User Profiles** – Customize with bio, profile picture, and personal details  
3. **Posts** – Create, edit, delete, and view posts with text/images  
4. **Comments and Likes** – Engage with content through real-time interaction  
5. **Notifications** – Real-time alerts for likes, comments, and follows  
6. **News Feed** – Dynamic feed from followed users  
7. **Search Functionality** – Discover and connect with others  
8. **Responsive Design** – Fully mobile-optimized layout

---

## 📦 Installation

### 1. Clone the repository:
   ```
   git clone https://github.com/YESIMGOD/LoopSpace.git
   ```

### 2. Navigate to the project directory:
   ```
   cd loopspace
   ```

### 3. Install dependencies:
   - **Server dependencies:**
     ```
     cd server
     npm install
     ```

   - **Client dependencies:**
     ```
     cd ../client
     npm install
     ```

### 4. Set up environment variables:
   - **create a .env file in the server directory the following variables:**
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

### 5. Run the application:
   - **Start server:**
     ```
     cd server
     npm start
     ```

   - **Start client:**
     ```
     cd ../client
     npm start
     ```

## 💡 How to Use
1. **Sign Up/Login** – Register or log in with existing credentials.
2. **Create Profile** – Set up bio and profile picture.
3. **Make Posts** – Share thoughts and images
4. **Engage** – Like and comment on other users' posts.
5. **Follow Users** – Build your network.
6. **Notifications** – Receive real-time alerts.

## 🧠 Tech Stack
- **Frontend** – React.js
- **Backend** – Node.js, Express.js
- **Database** – MongoDB Atlas
- **Authentication** – JWT

## 📄 License
This project is under the [MIT License](LICENSE)

## 🙏 Acknowledgements
- Thanks to the open-source community for the tools and libraries used in this project.
- Inspired by popular social media platforms that connect people worldwide.
