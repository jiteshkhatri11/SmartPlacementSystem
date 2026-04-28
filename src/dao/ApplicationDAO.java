package dao;

import model.Application;
import util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ApplicationDAO {

    // Apply for a job
    public boolean applyJob(Application application) {
        String query = "INSERT INTO applications (student_id, job_id, status) VALUES (?, ?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, application.getStudentId());
            ps.setInt(2, application.getJobId());
            ps.setString(3, application.getStatus());
            int rows = ps.executeUpdate();
            return rows > 0;
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    // Get all applications by student
    public List<Application> getApplicationsByStudent(int studentId) {
        List<Application> list = new ArrayList<>();
        String query = "SELECT * FROM applications WHERE student_id=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, studentId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(new Application(
                        rs.getInt("id"),
                        rs.getInt("student_id"),
                        rs.getInt("job_id"),
                        rs.getString("status")
                ));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return list;
    }

    // Get all applications by job
    public List<Application> getApplicationsByJob(int jobId) {
        List<Application> list = new ArrayList<>();
        String query = "SELECT * FROM applications WHERE job_id=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, jobId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(new Application(
                        rs.getInt("id"),
                        rs.getInt("student_id"),
                        rs.getInt("job_id"),
                        rs.getString("status")
                ));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return list;
    }

    // Update application status
    public boolean updateStatus(int applicationId, String status) {
        String query = "UPDATE applications SET status=? WHERE id=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, status);
            ps.setInt(2, applicationId);
            int rows = ps.executeUpdate();
            return rows > 0;
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }
}