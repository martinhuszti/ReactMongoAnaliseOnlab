package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

import lombok.Data;

@Data
public class TestRespond {

    private String title;
    private String type;
    private String id;

    public TestRespond(String title, String type, String id) {
        this.title = title;
        this.type = type;
        this.id = id;
    }


}
