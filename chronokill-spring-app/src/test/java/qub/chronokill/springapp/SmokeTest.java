package qub.chronokill.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class SmokeTest {

    @Autowired
    private ChronoKillRestController controller;

    @Test
    void contextLoads() throws Exception {
        assertNotNull(controller);
    }
}
