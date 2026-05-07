CREATE TABLE students (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(100) NOT NULL,
                          email VARCHAR(100) UNIQUE NOT NULL,
                          password VARCHAR(100) NOT NULL,
                          skills VARCHAR(255),
                          resume VARCHAR(255),
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           name VARCHAR(100) NOT NULL,
                           email VARCHAR(100) UNIQUE NOT NULL,
                           password VARCHAR(100) NOT NULL,
                           industry VARCHAR(100),
                           location VARCHAR(100),
                           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      company_id INT NOT NULL,
                      title VARCHAR(100) NOT NULL,
                      description TEXT,
                      salary VARCHAR(50),
                      location VARCHAR(100),
                      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE applications (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              student_id INT NOT NULL,
                              job_id INT NOT NULL,
                              status VARCHAR(50) DEFAULT 'Pending',
                              applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                              FOREIGN KEY (student_id) REFERENCES students(id),
                              FOREIGN KEY (job_id) REFERENCES jobs(id)
);