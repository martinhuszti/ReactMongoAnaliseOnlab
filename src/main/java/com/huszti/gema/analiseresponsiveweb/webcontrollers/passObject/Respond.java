package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

public class Respond {
    private String link;
    private String text;
    private int motiv;

    public Respond() {
    }

    public Respond(String link, String text, int motiv) {
        this.link = link;
        this.text = text;
        this.motiv = motiv;
    }
}
