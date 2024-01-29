package qub.chronokill.springapp.entity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer userID;
    private String username;
    @Column(name="email", unique=true)
    private String email;
    private String password;
    private String firstName;
    private String lastName;

    public Users() {

    }

    public Users(Integer userID, String username, String email, String password, String firstName, String lastName) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter and Setter methods
    public void setUserID(Integer userID) {this.userID = userID; }

    public Integer getUserID() {
        return this.userID;
    }

    public String getFirstName() {return this.firstName; }

    public String getLastName() { return this.lastName; }

    public String getName() {
        return this.firstName + " " + this.lastName;
    }

    public void setFirstName(String firstName) {
        if (firstName == null) {
            throw new IllegalArgumentException("Forename cannot be null");
        }
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        if (lastName == null) {
            throw new IllegalArgumentException("Surname cannot be null");
        }
        this.lastName = lastName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        if (email == null) {
            throw new IllegalArgumentException("Email cannot be null");
        }
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        if (password == null) {
            throw new IllegalArgumentException("Password cannot be null");
        }
        this.password = password;
    }

    public String getUsername() { return this.username; }

    public void setUsername(String username) { this.username = username; }

    // toString method for debugging or logging
    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", FName='" + firstName + '\'' +
                ", LName='" + lastName + '\'' +
                '}';
    }
}
