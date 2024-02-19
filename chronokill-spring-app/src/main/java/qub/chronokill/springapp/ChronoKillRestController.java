package qub.chronokill.springapp;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class ChronoKillRestController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";

    }
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> login(@RequestBody String credentials) {
        System.out.println(credentials);
        //if(user is exist)
        return ResponseEntity.ok("Login successful");
        //if(not exist)
        // go to Register

    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> register(@RequestBody String credentials) {
        System.out.println(credentials);
        //if(user is not exist)
        return ResponseEntity.ok("Registration successful");
        //if(user is exist)
        //System.out.println("an account already was made with this email, Log in using it");
    }
}