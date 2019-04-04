package com.huszti.gema.analiseresponsiveweb.database;


import java.time.LocalDate;
import java.util.List;

public class Requirements {


    private String presence;
    private String signature;
    private String exam;
    private String tests;
    private String points;
    private LocalDate modification_date;


    public Requirements(String presence, String signature, String exam, String tests, String points) {
        this.presence = presence;
        this.signature = signature;
        this.exam = exam;
        this.tests = tests;
        this.points = points;
        this.modification_date = LocalDate.now();
    }

    public Requirements() {

        this.modification_date = LocalDate.now();
    }

    public String getPresence() {
        return presence;
    }

    public String getSignature() {
        return signature;
    }

    public String getExam() {
        return exam;
    }

    public String getTests() {
        return tests;
    }

    public String getPoints() {
        return points;
    }

    public String getModification_date() {
        return modification_date.toString();
    }

    public void setPresence(String presence) {
        this.presence = presence;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public void setExam(String exam) {
        this.exam = exam;
    }

    public void setTests(String tests) {
        this.tests = tests;
    }

    public void setPoints(String points) {
        this.points = points;
    }

    public void setModification_date(LocalDate modification_date) {
        this.modification_date = modification_date;
    }
}
