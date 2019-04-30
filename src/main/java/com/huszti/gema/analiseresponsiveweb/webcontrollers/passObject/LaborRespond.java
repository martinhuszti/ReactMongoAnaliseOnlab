package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

import lombok.Data;


@Data
public class LaborRespond {

    private String title;
    private String place;
    private String time;

    public LaborRespond() {
    }

    public LaborRespond(String title, String place, String time) {
        this.title = title;
        this.place = place;
        this.time = time;
    }
}
