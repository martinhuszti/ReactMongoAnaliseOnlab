package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@Api(description = "Hello Wolrd Controller. Nem kell foglalkozni vele.")
public class HelloWorldController {
    @GetMapping("/api/hello")
    @ApiOperation(" CSak a szerveroldali időt adja vissza")

    public String sayHello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}
