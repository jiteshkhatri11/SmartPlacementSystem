🎓 SmartPlacementSystem
<div align="center">












</div>
📌 Overview

A Java-based Smart Placement System designed to connect students 🎓 with companies 🏢 for seamless job placement management.

It provides a centralized platform for job postings, applications, and administration.

✨ Features
👨‍🎓 Student
📝 Register & Login
🔍 Browse job opportunities
📩 Apply for jobs
📊 Track application status
🏢 Company
📝 Register & Login
📢 Post job openings
👀 View applicants
🛠 Manage hiring process
⚙️ Admin
📋 View all students
🏢 View all companies
📊 Manage jobs
🔍 Monitor applications
🛠️ Tech Stack
Technology	Role
☕ Java	Backend Logic
🔗 JDBC	Database Connectivity
🛢️ MySQL	Database
🌐 HTML	Structure
🎨 CSS	Styling
⚡ JavaScript	Interactivity
💻 IntelliJ IDEA	IDE
📁 Project Structure
SmartPlacementSystem/
│
├── src/
│   ├── controller/     # Handles user actions
│   ├── dao/            # Database operations
│   ├── model/          # POJO classes
│   ├── service/        # Business logic
│   └── util/           # DB connection
│
├── view/
│   ├── html/
│   ├── css/
│   ├── js/
│   └── images/
│
├── sql/
│   └── schema.sql
│
├── lib/
│   └── mysql-connector
│
└── README.md
🏗️ System Design
🔹 Controller Layer

Handles user requests like login, job application, job posting.

🔹 Service Layer

Contains business logic (e.g., eligibility checks).

🔹 DAO Layer

Handles database operations using JDBC (CRUD).

🔹 Database Layer

Stores:

Students
Companies
Jobs
Applications
🗄️ Database Tables
👨‍🎓 students
🏢 companies
💼 jobs
📩 applications
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/jiteshkhatri11/SmartPlacementSystem.git
2️⃣ Open in IntelliJ
File → Open → Select Project
3️⃣ Add MySQL Connector
Place JAR in lib/
Add to dependencies
4️⃣ Create Database
CREATE DATABASE placement_db;
5️⃣ Run Schema
Execute sql/schema.sql
6️⃣ Configure Database

Create file: src/util/db.properties

db.url=jdbc:mysql://localhost:3306/placement_db
db.user=root
db.password=your_password
7️⃣ Run Project
Open view/html/index.html
📸 Screenshots

🚧 Coming Soon

🚀 Future Improvements
📄 Resume Upload Feature
📧 Email Notifications
📊 Admin Dashboard
🌐 REST API Integration
🚀 Spring Boot Migration
👨‍💻 Author

Jitesh Khatri
🔗 GitHub: https://github.com/jiteshkhatri11

📄 License

MIT License

⭐ Support
⭐ Star the repository
🍴 Fork it
🛠 Contribute
