package qub.chronokill.springapp.entity.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class ReportsTest {
    @Test
    void testGetSets() {
        //Arrange
        Reports report = new Reports();
        report.setReportID(1);
        report.setUserID(2);
        report.setContent("Sample Report");

        //Act
        Integer reportID = report.getReportID();
        Integer userID = report.getUserID();
        String content = report.getContent();

        //Assert
        assertEquals(1, reportID);
        assertEquals(2, userID);
        assertEquals("Sample Report", content);
    }

    @Test
    void testSetErrorHandling() {
        //Arrange
        Reports report = new Reports();

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> report.setReportID(null));
        assertThrows(IllegalArgumentException.class, () -> report.setContent(null));
    }

    @Test
    void testToString() {
        // Arrange
        Reports report = new Reports(null, 2, "Example");

        // Act
        String reportString = report.toString();
        System.out.print(reportString);

        // Assert
        assertEquals("Report{reportID=null, userID='2', content='Example'}", reportString);
    }
}
