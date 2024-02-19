package qub.chronokill.springapp.entity.repository;

import qub.chronokill.springapp.entity.model.Users;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<Users,Integer> {
    Optional<Users> findByEmail(String email);
}
