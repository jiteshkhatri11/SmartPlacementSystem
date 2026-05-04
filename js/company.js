// Company Register
function companyRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const industry = document.getElementById('industry').value;
    const location = document.getElementById('location').value;

    // Validation
    if (name === '' || email === '' || password === '') {
        document.getElementById('message').innerHTML =
            '<div class="error">Please fill all required fields!</div>';
        return;
    }

    // Store in localStorage
    const company = { name, email, password, industry, location };
    localStorage.setItem('company_' + email, JSON.stringify(company));
    localStorage.setItem('loggedCompany', JSON.stringify(company));

    document.getElementById('message').innerHTML =
        '<div class="success">Registration Successful! Redirecting...</div>';

    setTimeout(() => {
        window.location.href = 'company-dashboard.html';
    }, 1500);
}

// Company Login
function companyLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        document.getElementById('message').innerHTML =
            '<div class="error">Please fill all fields!</div>';
        return;
    }

    // Check localStorage
    const companyData = localStorage.getItem('company_' + email);
    if (companyData) {
        const company = JSON.parse(companyData);
        if (company.password === password) {
            localStorage.setItem('loggedCompany', JSON.stringify(company));
            window.location.href = 'company-dashboard.html';
        } else {
            document.getElementById('message').innerHTML =
                '<div class="error">Wrong password!</div>';
        }
    } else {
        document.getElementById('message').innerHTML =
            '<div class="error">Company not found! Please register first.</div>';
    }
}

// Load Company Dashboard
function loadCompanyDashboard() {
    const company = JSON.parse(localStorage.getItem('loggedCompany'));
    if (!company) {
        window.location.href = 'company-login.html';
        return;
    }
    document.getElementById('companyName').innerText = company.name;
    loadPostedJobs();
}

// Post New Job
function postJob() {
    const company = JSON.parse(localStorage.getItem('loggedCompany'));
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const location = document.getElementById('location').value;

    if (title === '' || location === '') {
        document.getElementById('message').innerHTML =
            '<div class="error">Please fill all required fields!</div>';
        return;
    }

    const job = {
        title,
        description,
        salary,
        location,
        company: company.name,
        companyEmail: company.email,
        postedOn: new Date().toLocaleDateString()
    };

    // Save to localStorage
    let jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');
    jobs.push(job);
    localStorage.setItem('allJobs', JSON.stringify(jobs));

    document.getElementById('message').innerHTML =
        '<div class="success">Job posted successfully!</div>';

    // Clear form
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('location').value = '';

    loadPostedJobs();
}

// Load Posted Jobs
function loadPostedJobs() {
    const company = JSON.parse(localStorage.getItem('loggedCompany'));
    const jobs = JSON.parse(localStorage.getItem('allJobs') || '[]');
    const myJobs = jobs.filter(j => j.companyEmail === company.email);

    const tbody = document.getElementById('jobsTable');

    if (myJobs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No jobs posted yet</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    myJobs.forEach(job => {
        // Count applications for this job
        const applications = JSON.parse(localStorage.getItem('applications') || '[]');
        const appCount = applications.filter(a => a.jobTitle === job.title).length;

        tbody.innerHTML += `
            <tr>
                <td>${job.title}</td>
                <td>${job.location}</td>
                <td>${job.salary}</td>
                <td>${appCount} application(s)</td>
            </tr>`;
    });
}

// Logout
function logout() {
    localStorage.removeItem('loggedCompany');
    window.location.href = 'index.html';
}

// Auto load dashboard if on dashboard page
if (document.getElementById('companyName')) {
    loadCompanyDashboard();
}