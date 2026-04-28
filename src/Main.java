import util.DBConnection;
import java.sql.Connection;

public class Main {
    public static void main(String[] args) {
        Connection con = DBConnection.getConnection();
        if (con != null) {
            System.out.println("Database connected successfully!");
        } else {
            System.out.println("Connection failed!");
        }
    }
}