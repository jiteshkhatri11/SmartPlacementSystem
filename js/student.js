// Student Register
function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const skills = document.getElementById('skills').value;
    const resume = document.getElementById('resume').value;

    // Validation
    if (name === '' || email === '' || password === '') {
        document.getElementById('message').innerHTML =
            '<div class="error">Please fill all required fields!</div>';
        return;
    }

    // Store in localStorage (temporary)
    const student = { name, email, password, skills, resume };
    localStorage.setItem('student_' + email, JSON.stringify(student));
    localStorage.setItem('loggedStudent', JSON.stringify(student));

    document.getElementById('message').innerHTML =
        '<div class="success">Registration Successful! Redirecting...</div>';

    setTimeout(() => {
        window.location.href = 'student-dashboard.html';
    }, 1500);
}

// Student Login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill all fields!');
        return;
    }

    // Check localStorage
    const studentData = localStorage.getItem('student_' + email);
    if (studentData) {
        const student = JSON.parse(studentData);
        if (student.password === password) {
            localStorage.setItem('loggedStudent', JSON.stringify(student));
            window.location.href = 'student-dashboard.html';
        } else {
            alert('Wrong password!');
        }
    } else {
        alert('Student not found! Please register first.');
    }
}

// Load Student Dashboard
function loadDashboard() {
    const student = JSON.parse(localStorage.getItem('loggedStudent'));
    if (!student) {
        window.location.href = 'student-login.html';
        return;
    }
    document.getElementById('studentName').innerText = student.name;
    loadJobs();
}

// Load Available Jobs
function loadJobs() {
    const tbody = document.getElementById('jobsTable');
    const jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');

    if (jobs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No jobs available</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    jobs.forEach((job, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${job.title}</td>
                <td>${job.company}</td>
                <td>${job.location}</td>
                <td>${job.salary}</td>
                <td><button onclick="applyJob(${index})" 
                    style="width:auto; padding:6px 14px;">
                    Apply
                </button></td>
            </tr>`;
    });
}

// Apply for Job
function applyJob(index) {
    const student = JSON.parse(localStorage.getItem('loggedStudent'));
    const jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');
    const job = jobs[index];

    let applications = JSON.parse(localStorage.getItem('applications') || '[]');

    // Check if already applied
    const alreadyApplied = applications.find(
        a => a.studentEmail === student.email && a.jobTitle === job.title
    );

    if (alreadyApplied) {
        alert('You already applied for this job!');
        return;
    }

    applications.push({
        studentEmail: student.email,
        studentName: student.name,
        jobTitle: job.title,
        company: job.company,
        status: 'Pending',
        appliedOn: new Date().toLocaleDateString()
    });

    localStorage.setItem('applications', JSON.stringify(applications));
    alert('Applied successfully!');
    loadApplications();
}

// Load My Applications
function loadApplications() {
    const student = JSON.parse(localStorage.getItem('loggedStudent'));
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const myApps = applications.filter(a => a.studentEmail === student.email);

    const tbody = document.getElementById('applicationsTable');

    if (myApps.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No applications yet</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    myApps.forEach(app => {
        tbody.innerHTML += `
            <tr>
                <td>${app.jobTitle}</td>
                <td>${app.company}</td>
                <td>${app.status}</td>
                <td>${app.appliedOn}</td>
            </tr>`;
    });
}

// Logout
function logout() {
    localStorage.removeItem('loggedStudent');
    window.location.href = 'index.html';
}

// Auto load dashboard if on dashboard page
if (document.getElementById('studentName')) {
    loadDashboard();
    loadApplications();
}