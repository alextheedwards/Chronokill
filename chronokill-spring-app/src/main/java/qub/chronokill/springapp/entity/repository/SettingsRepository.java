package qub.chronokill.springapp.entity.repository;

import org.springframework.data.repository.CrudRepository;
import qub.chronokill.springapp.entity.model.Settings;

public interface SettingsRepository extends CrudRepository<Settings,Integer> {
}
