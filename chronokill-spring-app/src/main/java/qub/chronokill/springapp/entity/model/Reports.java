package qub.chronokill.springapp.entity.model;

import jakarta.persistence.*;

@Entity
public class Reports {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer reportID;
    private Integer userID;
    private String content;

    public Reports() {

    }

    public Reports(Integer reportID, Integer userID, String content) {
        this.reportID = reportID;
        this.userID = userID;
        this.content = content;
    }

    // Getter and Setter methods
    public Integer getReportID() {
        return this.reportID;
    }

    public void setReportID(Integer reportID) {
        if (reportID == null) {
            throw new IllegalArgumentException("Content cannot be null");
        }
        this.reportID = reportID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        if (content == null) {
            throw new IllegalArgumentException("Content cannot be null");
        }
        this.content = content;
    }

    // toString method for debugging or logging
    @Override
    public String toString() {
        return "Report{" +
                "reportID=" + reportID +
                ", userID='" + userID + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
