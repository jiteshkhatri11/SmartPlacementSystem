package dao;

import model.Job;
import util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JobDAO {

    // Add new job
    public boolean addJob(Job job) {
        String query = "INSERT INTO jobs (company_id, title, description, salary, location) VALUES (?, ?, ?, ?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, job.getCompanyId());
            ps.setString(2, job.getTitle());
            ps.setString(3, job.getDescription());
            ps.setString(4, job.getSalary());
            ps.setString(5, job.getLocation());
            int rows = ps.executeUpdate();
            return rows > 0;
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    // Get all jobs
    public List<Job> getAllJobs() {
        List<Job> list = new ArrayList<>();
        String query = "SELECT * FROM jobs";
        try {
            Connection con = DBConnection.getConnection();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(query);
            while (rs.next()) {
                list.add(new Job(
                        rs.getInt("id"),
                        rs.getInt("company_id"),
                        rs.getString("title"),
                        rs.getString("description"),
                        rs.getString("salary"),
                        rs.getString("location")
                ));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return list;
    }

    // Get job by ID
    public Job getJobById(int id) {
        String query = "SELECT * FROM jobs WHERE id=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new Job(
                        rs.getInt("id"),
                        rs.getInt("company_id"),
                        rs.getString("title"),
                        rs.getString("description"),
                        rs.getString("salary"),
                        rs.getString("location")
                );
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return null;
    }

    // Get jobs by company ID
    public List<Job> getJobsByCompany(int companyId) {
        List<Job> list = new ArrayList<>();
        String query = "SELECT * FROM jobs WHERE company_id=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, companyId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(new Job(
                        rs.getInt("id"),
                        rs.getInt("company_id"),
                        rs.getString("title"),
                        rs.getString("description"),
                        rs.getString("salary"),
                        rs.getString("location")
                ));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return list;
    }
}