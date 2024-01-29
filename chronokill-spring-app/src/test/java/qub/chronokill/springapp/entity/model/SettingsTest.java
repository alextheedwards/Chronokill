package qub.chronokill.springapp.entity.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class SettingsTest {
    @Test
    void testGetSets() {
        //Arrange
        Settings settings = new Settings();
        settings.setUserID(1);
        settings.setVoiceVol(20);
        settings.setMasterVol(15);
        settings.setMusicVol(12);
        settings.setAmbientVol(10);
        settings.setFontSize(12.0F);

        //Act
        Integer userID = settings.getUserID();
        Integer voiceVol = settings.getVoiceVol();
        Integer masterVol = settings.getMasterVol();
        Integer musicVol = settings.getMusicVol();
        Integer ambientVol = settings.getAmbientVol();
        float fontSize = settings.getFontSize();

        //Assert
        assertEquals(1, userID);
        assertEquals(20, voiceVol);
        assertEquals(15, masterVol);
        assertEquals(12, musicVol);
        assertEquals(10, ambientVol);
        assertEquals(12.0F, fontSize);
    }

    @Test
    void testSetErrorHandling() {
        //Arrange
        Settings settings = new Settings();

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> settings.setVoiceVol(null));
        assertThrows(IllegalArgumentException.class, () -> settings.setMasterVol(null));
        assertThrows(IllegalArgumentException.class, () -> settings.setMusicVol(null));
        assertThrows(IllegalArgumentException.class, () -> settings.setFontSize(null));
    }

    @Test
    void testToString() {
        // Arrange
        Settings settings = new Settings (null, 20, 15, 10, 5, 5.0f);

        // Act
        String settingsString = settings.toString();
        System.out.print(settingsString);

        // Assert
        assertEquals("Settings{userID=null, VoiceVal=20, masterVal=15, MusicVal= 10, AmbientVal=5, FontSize=5.0}", settingsString);
    }
}
