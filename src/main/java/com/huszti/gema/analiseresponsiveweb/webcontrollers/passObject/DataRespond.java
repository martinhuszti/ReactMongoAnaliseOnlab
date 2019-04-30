package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;


import com.huszti.gema.analiseresponsiveweb.database.Class.Labor;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class DataRespond {
    private String name;
    private String neptun;
    private String email;
    private LocalDate registration_date;
    private LocalDate last_login;
    private List<LaborRespond> gyak;

    public DataRespond() {
        gyak=new ArrayList<>();
    }

    public void addGyakList(LaborRespond templab){
        gyak.add(templab);
    }
    public void addAllGyakList(List<LaborRespond> templab){
        gyak.addAll(templab);
    }
}
