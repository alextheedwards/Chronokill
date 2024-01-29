package qub.chronokill.springapp.entity.repository;

import qub.chronokill.springapp.entity.model.Users;
//import qub.chronokill.springapp.entity.repository.UserRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@ExtendWith(SpringExtension.class)
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testSaveUser() {
        // Arrange
        Users user = new Users();
        user.setEmail("mark@example.com");
        user.setUsername("marky");
        user.setPassword("secure");
        user.setFirstName("Mark");
        user.setLastName("Inpole");

        // Act
        userRepository.save(user);

        // Assert
        Users savedUser = userRepository.findById(user.getUserID()).orElse(null);
        assert savedUser != null;
        assertEquals("Mark Inpole", savedUser.getName());
        assertEquals("mark@example.com", savedUser.getEmail());
        assertEquals("secure", savedUser.getPassword());
    }

}