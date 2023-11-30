package qub.chronokill.springapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ChronoKillRestController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }
}
