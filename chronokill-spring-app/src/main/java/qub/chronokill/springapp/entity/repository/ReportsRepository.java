package qub.chronokill.springapp.entity.repository;

import org.springframework.data.repository.CrudRepository;
import qub.chronokill.springapp.entity.model.Reports;

public interface ReportsRepository extends CrudRepository<Reports,Integer> {
}
