package qub.chronokill.springapp.entity.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UsersTest {
    @Test
    void testGetSets() {
        //Arrange
        Users user = new Users();
        user.setUserID(1);
        user.setEmail("mark@example.com");
        user.setUsername("marky");
        user.setPassword("secure");
        user.setFirstName("Mark");
        user.setLastName("Inpole");

        //Act
        Integer userID = user.getUserID();
        String email = user.getEmail();
        String username = user.getUsername();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        //Assert
        assertEquals(1, userID);
        assertEquals("mark@example.com", email);
        assertEquals("marky", username);
        assertEquals("secure", password);
        assertEquals("Mark", firstName);
        assertEquals("Inpole", lastName);
    }

    @Test
    void testSetErrorHandling() {
        //Arrange
        Users user = new Users();

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> user.setFirstName(null));
        assertThrows(IllegalArgumentException.class, () -> user.setLastName(null));
        assertThrows(IllegalArgumentException.class, () -> user.setEmail(null));
        assertThrows(IllegalArgumentException.class, () -> user.setPassword(null));
    }

    @Test
    void testToString() {
        // Arrange
        Users user = new Users(null, "marky", "mark@example.com", "secure", "Mark", "Inpole");

        // Act
        String userString = user.toString();
        System.out.print(userString);

        // Assert
        assertEquals("User{userID=null, username='marky', email='mark@example.com', password='secure', FName='Mark', LName='Inpole'}", userString);
    }
}
