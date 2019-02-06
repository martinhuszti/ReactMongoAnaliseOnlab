package com.huszti.gema.analiseresponsiveweb;

import com.huszti.gema.analiseresponsiveweb.database.User;
import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AnaliseResponsiveWebApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(AnaliseResponsiveWebApplication.class, args);
    }


    @Override
    public void run(String... args) {
        userRepository.save(new User("Martin", "passw", "sdsad"));
    }
}
