package model;

public class Application {

    private int id;
    private int studentId;
    private int jobId;
    private String status;

    // Constructor
    public Application(int id, int studentId, int jobId, String status) {
        this.id = id;
        this.studentId = studentId;
        this.jobId = jobId;
        this.status = status;
    }

    // Empty Constructor
    public Application() {}

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getStudentId() { return studentId; }
    public void setStudentId(int studentId) { this.studentId = studentId; }

    public int getJobId() { return jobId; }
    public void setJobId(int jobId) { this.jobId = jobId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}