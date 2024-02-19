package qub.chronokill.springapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;
import qub.chronokill.springapp.entity.model.Users;
import qub.chronokill.springapp.entity.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private  final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public  boolean isUserExistsByEmail(String email) {
        Optional<Users> existingUser = userRepository.findByEmail(email);
        return existingUser.isPresent();
    }
}
