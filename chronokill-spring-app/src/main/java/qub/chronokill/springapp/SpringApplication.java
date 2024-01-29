package qub.chronokill.springapp;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import qub.chronokill.springapp.entity.model.Settings;
import qub.chronokill.springapp.entity.repository.SettingsRepository;
import qub.chronokill.springapp.entity.repository.UserRepository;
import qub.chronokill.springapp.entity.model.Users;
import qub.chronokill.springapp.entity.repository.ReportsRepository;
import qub.chronokill.springapp.entity.model.Reports;

@SpringBootApplication
public class SpringApplication {

    public static void main(String[] args) {
        org.springframework.boot.SpringApplication.run(SpringApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository, SettingsRepository settingsRepository, ReportsRepository reportsRepository) {
        return args -> {
            userRepository.save(new Users(null, "un", "a@example.com", "pass", "FName", "LName"));
            userRepository.save(new Users(null, "40271476", "40271476@qub.uk", "pass", "Hassan", "Alkhawam"));
            settingsRepository.save(new Settings(1, 10, 20, 30, 40, 25));
            reportsRepository.save(new Reports(null, 1, "string"));
        };
    }
}

