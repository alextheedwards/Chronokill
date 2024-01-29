package qub.chronokill.springapp.entity.repository;

//import org.h2.engine.Setting;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import qub.chronokill.springapp.entity.model.Settings;
//import qub.chronokill.springapp.entity.model.Users;

//import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
@DataJpaTest
@ExtendWith(SpringExtension.class)
public class SettingsRepositoryTest {

    @Autowired
    private SettingsRepository settingsRepository;

    @Test
    void testSaveUser() {
        // Arrange
        Settings settings = new Settings();
        settings.setUserID(1);
        settings.setVoiceVol(20);
        settings.setMasterVol(15);
        settings.setMusicVol(12);
        settings.setAmbientVol(10);
        settings.setFontSize(12.0F);

        // Act
        settingsRepository.save(settings);

        // Assert
        Settings savedSettings = settingsRepository.findById(settings.getUserID()).orElse(null);
        assert savedSettings != null;
        assertEquals(20, savedSettings.getVoiceVol());
        assertEquals(15, savedSettings.getMasterVol());
        assertEquals(12, savedSettings.getMusicVol());
        assertEquals(10, savedSettings.getAmbientVol());
        assertEquals(12.0F, savedSettings.getFontSize());
    }

}
