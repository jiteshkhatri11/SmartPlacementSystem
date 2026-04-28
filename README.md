🎓 SmartPlacementSystem

A Java-based Smart Placement System designed to connect students with companies for seamless job placement management.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

📌 Overview

SmartPlacementSystem is a full-stack application that streamlines the placement process by enabling:

Students to explore and apply for jobs
Companies to post job opportunities and manage applicants
Admin to monitor and control the entire system

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Key Features


👨‍🎓 Student
📝 Register & Login
🔍 Browse job opportunities
📩 Apply for jobs
📊 Track application status


-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🏢 Company
📝 Register & Login
📢 Post job openings
👀 View applicants
🛠 Manage hiring process

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

⚙️ Admin
📋 View all students
🏢 View all companies
📊 Manage jobs
🔍 Monitor applications

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🛠️ Tech Stack
Technology	Role
☕ Java	Backend Logic
🔗 JDBC	Database Connectivity
🛢️ MySQL	Database
🌐 HTML	Structure
🎨 CSS	Styling
⚡ JavaScript	Interactivity
💻 IntelliJ IDEA	IDE

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

📁 Project Structure

SmartPlacementSystem/
│
├── src/
│   ├── controller/     # Handles user requests
│   ├── dao/            # Database operations (JDBC)
│   ├── model/          # POJO classes
│   ├── service/        # Business logic
│   └── util/           # Utility classes (DB connection)
│
├── view/
│   ├── html/           # HTML pages
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Assets
│
├── sql/
│   └── schema.sql      # Database schema
│
├── lib/
│   └── mysql-connector # JDBC driver
│
└── README.md

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🗄️ Database

Tables used in the system:

👨‍🎓 students
🏢 companies
💼 jobs
📩 applications

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/jiteshkhatri11/SmartPlacementSystem.git
2️⃣ Import into IntelliJ
Open IntelliJ IDEA
Select Open Project
Choose the project folder
3️⃣ Add MySQL Connector
Download MySQL Connector JAR
Place it inside lib/
Add it to project dependencies
4️⃣ Create Database
CREATE DATABASE placement_db;
5️⃣ Run Schema File
Execute sql/schema.sql in MySQL
6️⃣ Configure Database Connection

Create file: src/util/db.properties

db.url=jdbc:mysql://localhost:3306/placement_db
db.user=root
db.password=your_password
7️⃣ Run the Project
Open view/html/index.html in your browser

-------------------------------------------------------------------------------------------------------------------------------------------------------------------


📸 Screenshots


🚧 Coming Soon



-------------------------------------------------------------------------------------------------------------------------------------------------------------------


🚀 Future Improvements


📄 Resume Upload Feature
📧 Email Notifications
📊 Admin Dashboard Analytics
🌐 REST API Integration
🚀 Migration to Spring Boot

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

👨‍💻 🔷 AUTHOR

Jitesh Khatri
🔗 GitHub: https://github.com/jiteshkhatri11

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

📄 License

This project is licensed under the MIT License.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------
⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🛠 Contribute
