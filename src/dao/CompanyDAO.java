package dao;

import model.Company;
import util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CompanyDAO {

    // Register new company
    public boolean registerCompany(Company company) {
        String query = "INSERT INTO companies (name, email, password, industry, location) VALUES (?, ?, ?, ?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, company.getName());
            ps.setString(2, company.getEmail());
            ps.setString(3, company.getPassword());
            ps.setString(4, company.getIndustry());
            ps.setString(5, company.getLocation());
            int rows = ps.executeUpdate();
            return rows > 0;
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    // Login company
    public Company loginCompany(String email, String password) {
        String query = "SELECT * FROM companies WHERE email=? AND password=?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, email);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                return new Company(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("email"),
                        rs.getString("password"),
                        rs.getString("industry"),
                        rs.getString("location")
                );
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return null;
    }

    // Get all companies
    public List<Company> getAllCompanies() {
        List<Company> list = new ArrayList<>();
        String query = "SELECT * FROM companies";
        try {
            Connection con = DBConnection.getConnection();
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(query);
            while (rs.next()) {
                list.add(new Company(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("email"),
                        rs.getString("password"),
                        rs.getString("industry"),
                        rs.getString("location")
                ));
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return list;
    }
}