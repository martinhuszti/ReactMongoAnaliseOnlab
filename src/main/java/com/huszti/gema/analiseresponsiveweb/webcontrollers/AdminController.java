package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import com.huszti.gema.analiseresponsiveweb.database.Users.Admin;
import com.huszti.gema.analiseresponsiveweb.database.Users.Student;
import com.huszti.gema.analiseresponsiveweb.repository.AdminRepository;
import com.huszti.gema.analiseresponsiveweb.repository.StudentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addadmin")
    public Admin addAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
        return admin;
    }

}
