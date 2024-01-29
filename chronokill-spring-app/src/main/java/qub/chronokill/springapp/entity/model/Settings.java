package qub.chronokill.springapp.entity.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
@Entity
@Table(name = "Settings")
public class Settings {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer userID;
    @Column(name = "voice_vol")
    private Integer VoiceVol;
    @Column(name = "master_Vol")
    private Integer masterVol;
    @Column(name = "Music_Vol")
    private Integer MusicVol;
    @Column(name = "Ambient_Vol")
    private Integer AmbientVol;
    @Column(name = "font_Size")
    private float fontSize;

    public Settings() {

    }

    public Settings(Integer userID, Integer VoiceVol, Integer masterVol, Integer MusicVol, Integer AmbientVol, float fontSize) {
        this.userID = userID;
        this.VoiceVol = VoiceVol;
        this.masterVol = masterVol;
        this.MusicVol = MusicVol;
        this.AmbientVol = AmbientVol;
        this.fontSize = fontSize;

    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getVoiceVol() {
        return VoiceVol;
    }

    public void setVoiceVol(Integer voiceVol) {
        VoiceVol = voiceVol;
    }

    public Integer getMasterVol() {
        return masterVol;
    }

    public void setMasterVol(Integer masterVol) {
        this.masterVol = masterVol;
    }

    public Integer getMusicVol() {
        return MusicVol;
    }

    public void setMusicVol(Integer musicVol) {
        MusicVol = musicVol;
    }

    public Integer getAmbientVol() {
        return AmbientVol;
    }

    public void setAmbientVol(Integer ambientVol) {
        AmbientVol = ambientVol;
    }

    public float getFontSize() {
        return fontSize;
    }

    public void setFontSize(Float fontSize) {
        this.fontSize = fontSize;
    }
    // toString method for debugging or logging
    @Override
    public String toString() {
        return "Settings{" +
                "userID=" + userID +
                ", VoiceVol='" + VoiceVol + '\'' +
                ", masterVol='" + masterVol + '\'' +
                ", MusicVol='" + MusicVol + '\'' +
                ", AmbientVol='" + AmbientVol + '\'' +
                ", MusicVol='" + fontSize + '\'' +
                '}';
    }

}