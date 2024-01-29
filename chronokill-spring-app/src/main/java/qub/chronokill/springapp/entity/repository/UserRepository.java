package qub.chronokill.springapp.entity.repository;

import qub.chronokill.springapp.entity.model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users,Integer> {
}
