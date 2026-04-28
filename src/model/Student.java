package model;

public class Student {

    private int id;
    private String name;
    private String email;
    private String password;
    private String skills;
    private String resume;

    // Constructor
    public Student(int id, String name, String email, String password, String skills, String resume) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.skills = skills;
        this.resume = resume;
    }

    // Empty Constructor
    public Student() {}

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getResume() { return resume; }
    public void setResume(String resume) { this.resume = resume; }
}