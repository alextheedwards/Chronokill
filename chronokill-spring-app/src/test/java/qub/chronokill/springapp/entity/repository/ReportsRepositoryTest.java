package qub.chronokill.springapp.entity.repository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import qub.chronokill.springapp.entity.model.Reports;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@ExtendWith(SpringExtension.class)
public class ReportsRepositoryTest {

    @Autowired
    private ReportsRepository reportsRepository;

    @Test
    void testSaveUser() {
        // Arrange
        //Arrange
        Reports report = new Reports();
        report.setReportID(1);
        report.setUserID(2);
        report.setContent("Sample Report");

        //Act
        reportsRepository.save(report);

        //Assert
        Reports savedReport = reportsRepository.findById(report.getReportID()).orElse(null);
        assert savedReport != null;
        assertEquals(1, savedReport.getReportID());
        assertEquals(2, savedReport.getUserID());
        assertEquals("Sample Report", savedReport.getContent());
    }

}