package com.huszti.gema.analiseresponsiveweb;

import com.huszti.gema.analiseresponsiveweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@SpringBootApplication
public class AnaliseResponsiveWebApplication implements CommandLineRunner {

    @Autowired
    private UserRepository sda;

    public static void main(String[] args) {
        SpringApplication.run(AnaliseResponsiveWebApplication.class, args);
    }

    @EnableWebSecurity
    public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .csrf().disable();
        }
    }

    @Override
    public void run(String... args) {

    }
}
