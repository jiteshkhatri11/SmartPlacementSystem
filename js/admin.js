// Admin Login (hardcoded for now)
const ADMIN_EMAIL = "admin@placement.com";
const ADMIN_PASSWORD = "admin123";

// Load Admin Dashboard
function loadAdminDashboard() {
    loadStats();
    loadAllStudents();
    loadAllCompanies();
    loadAllJobs();
}

// Load Stats
function loadStats() {
    const jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');

    // Count students
    let studentCount = 0;
    for (let key in localStorage) {
        if (key.startsWith('student_')) studentCount++;
    }

    // Count companies
    let companyCount = 0;
    for (let key in localStorage) {
        if (key.startsWith('company_')) companyCount++;
    }

    document.getElementById('totalStudents').innerText = studentCount;
    document.getElementById('totalCompanies').innerText = companyCount;
    document.getElementById('totalJobs').innerText = jobs.length;
    document.getElementById('totalApplications').innerText = applications.length;
}

// Load All Students
function loadAllStudents() {
    const tbody = document.getElementById('studentsTable');
    let students = [];

    for (let key in localStorage) {
        if (key.startsWith('student_')) {
            students.push(JSON.parse(localStorage.getItem(key)));
        }
    }

    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No students found</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    students.forEach((student, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.skills || 'N/A'}</td>
            </tr>`;
    });
}

// Load All Companies
function loadAllCompanies() {
    const tbody = document.getElementById('companiesTable');
    let companies = [];

    for (let key in localStorage) {
        if (key.startsWith('company_')) {
            companies.push(JSON.parse(localStorage.getItem(key)));
        }
    }

    if (companies.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No companies found</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    companies.forEach((company, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${company.name}</td>
                <td>${company.email}</td>
                <td>${company.industry || 'N/A'}</td>
                <td>${company.location || 'N/A'}</td>
            </tr>`;
    });
}

// Load All Jobs
function loadAllJobs() {
    const tbody = document.getElementById('jobsTable');
    const jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');

    if (jobs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No jobs found</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    jobs.forEach((job, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${job.title}</td>
                <td>${job.location}</td>
                <td>${job.salary || 'N/A'}</td>
            </tr>`;
    });
}

// Logout
function logout() {
    localStorage.removeItem('loggedAdmin');
    window.location.href = 'index.html';
}

// Auto load dashboard
if (document.getElementById('totalStudents')) {
    loadAdminDashboard();
}