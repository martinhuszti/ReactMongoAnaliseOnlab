package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloWorldController {
    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}
