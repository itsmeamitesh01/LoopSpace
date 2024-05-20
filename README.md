<h1><bold>LoopSpace</bold></h1>

Loopspace is a feature-rich social media web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides users with a platform to connect, share updates, and engage with each other through posts, comments, and likes. The application offers a seamless and interactive user experience, leveraging the power of modern web technologies.


<h3><bold>Features</bold></h3>

1. <strong>User Authentication</strong>: Secure sign-up and login with JWT authentication.
2. <strong>User Profiles</strong>: Create and customize user profiles with bio, profile picture, and personal details.
3. <strong>Posts</strong>: Create, edit, delete, and view posts with text and images.
4. <strong>Comments and Likes</strong>: Engage with posts by adding comments and likes.
5. <strong>Real-Time Notifications</strong>: Get real-time updates for likes, comments, and new followers.
6. <strong>News Feed</strong>: View a dynamic feed of posts from users you follow.
7. <strong>Search Functionality</strong>: Find and connect with other users through search.
8. <strong>Responsive Design</strong>: Fully responsive design for optimal viewing on desktops, tablets, and mobile devices.


<h3><bold>Installation</bold></h3>

1. Clone the repository:
   ```
   git clone https://github.com/YESIMGOD/LoopSpace.git
   ```

2. Navigate to the project directory:
   ```
   cd loopspace
   ```

3. Install dependencies:
   - Server dependencies:
     ```
     cd server
     npm install
     ```

   - Client dependencies:
     ```
     cd ../client
     npm install
     ```

4. Set up environment variables:
   - create a .env file in the server directory the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

5. Run the application:
   - Start server:
     ```
     cd server
     npm start
     ```

   - Start client:
     ```
     cd ../client
     npm start
     ```

     
<h3><bold>How to use</bold></h3>

1. <strong>Sign Up/Login</strong>: Create a new account or log in with existing credentials.
2. <strong>Create Profile</strong>: Customize your profile with a bio and profile picture.
3. <strong>Make Posts</strong>: Share your thoughts and photos with your followers.
4. <strong>Engage</strong>: Like and comment on posts from other users.
5. <strong>Follow Users</strong>: Follow other users to see their posts in your feed.
6. <strong>Notifications</strong>: Stay updated with real-time notifications for interactions.


<h3><bold>Acknowledgements</bold></h3>

- Thanks to the open-source community for the tools and libraries used in this project.
- Inspired by popular social media platforms that connect people worldwide.
