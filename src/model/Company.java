package model;

public class Company {

    private int id;
    private String name;
    private String email;
    private String password;
    private String industry;
    private String location;

    // Constructor
    public Company(int id, String name, String email, String password, String industry, String location) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.industry = industry;
        this.location = location;
    }

    // Empty Constructor
    public Company() {}

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getIndustry() { return industry; }
    public void setIndustry(String industry) { this.industry = industry; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
}