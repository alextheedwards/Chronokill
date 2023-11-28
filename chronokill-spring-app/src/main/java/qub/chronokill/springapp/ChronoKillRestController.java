package qub.chronokill.springapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChronoKillRestController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }
}