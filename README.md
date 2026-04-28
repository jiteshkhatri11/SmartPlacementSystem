🎓 SmartPlacementSystem

A Java-based Smart Placement System designed to connect students with companies for seamless job placement management.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
📌 Overview

A full-stack Java-based Smart Placement System that connects students and companies for efficient job placement management.

This system simplifies the recruitment process by providing a centralized platform for job postings, applications, and administration.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
✨ Features

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

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🏗️ 🔷 SYSTEM DESIGN (EXPLAINED)
🔹 1. Controller Layer
Handles HTTP/User requests
Routes actions (Login, Apply Job, Post Job)
🔹 2. Service Layer
Contains business logic
Example: eligibility checks before applying
🔹 3. DAO Layer
Handles database queries using JDBC
Performs CRUD operations
🔹 4. Database Layer
Stores structured data:
Students
Companies
Jobs
Applications

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
🗄️ Database

Tables used in the system:

👨‍🎓 students
🏢 companies
💼 jobs
📩 applications

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Installation & Setup
🔹 1. Clone Repository
git clone https://github.com/jiteshkhatri11/SmartPlacementSystem.git
🔹 2. Open in IntelliJ
File → Open → Select Project
🔹 3. Add MySQL Connector
Place JAR in lib/
Add to dependencies
🔹 4. Setup Database
CREATE DATABASE placement_db;
🔹 5. Run Schema
Execute sql/schema.sql
🔹 6. Configure DB

Create: src/util/db.properties

db.url=jdbc:mysql://localhost:3306/placement_db
db.user=root
db.password=your_password
🔹 7. Run Project
Open view/html/index.html

-------------------------------------------------------------------------------------------------------------------------------------------------------------------


📸 Screenshots

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚧 Coming Soon

🚀 Future Improvements
📄 Resume Upload Feature
📧 Email Notifications
📊 Admin Dashboard Analytics
🌐 REST API Integration
🚀 Migration to Spring Boot

-------------------------------------------------------------------------------------------------------------------------------------------------------------------


👨‍💻 Author


Jitesh Khatri
🔗 GitHub: https://github.com/jiteshkhatri11

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
📄 License

This project is licensed under the MIT License.
