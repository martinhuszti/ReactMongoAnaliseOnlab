package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

import lombok.Data;

import java.util.ArrayList;

@Data
public class RoleRespond {
    private ArrayList<Respond> roleRespond;

    public RoleRespond(String role) {
        roleRespond = new ArrayList<>();
        System.out.println(role + " bent");
        switch (role) {
            case "admin":
                System.out.println("belemész");
                adminRespond();
                break;
            case "teacher":
                teacherRespond();
                break;
            case "student":
                studentRespond();
                break;
            default:
                noRespond();
                break;
        }

    }

    private void adminRespond() {
        roleRespond.add(new Respond("/LoggedIn/data", "Adatok", 1));
        roleRespond.add(new Respond("/LoggedIn/change_pass", "Jelszó változtatás", 2));
        roleRespond.add(new Respond("/LoggedIn/controller", "Chat", 3));
        roleRespond.add(new Respond("/LoggedIn/students", "Diákok", 4));
        roleRespond.add(new Respond("/LoggedIn/newPublication", "Új hír közzététele", 5));
        roleRespond.add(new Respond("/LoggedIn/addPerson", "Új felhasználó", 6));
        roleRespond.add(new Respond("/LoggedIn/addReq", "Követelmények", 7));
        roleRespond.add(new Respond("/LoggedIn/deletePublication", "Hír törlése", 8));
        roleRespond.add(new Respond("/LoggedIn/addLab", "Új gyakorlat", 9));
        roleRespond.add(new Respond("/LoggedIn/newTest", "Új számonkérés", 10));
    }

    private void teacherRespond() {
        roleRespond.add(new Respond("/LoggedIn/data", "Adatok", 1));
        roleRespond.add(new Respond("/LoggedIn/change_pass", "Jelszó változtatás", 2));
        roleRespond.add(new Respond("/LoggedIn/controller", "Chat", 3));
        roleRespond.add(new Respond("/LoggedIn/students", "Diákok", 4));
        roleRespond.add(new Respond("/LoggedIn/newPublication", "Új hír közzététele", 5));
        roleRespond.add(new Respond("/LoggedIn/addPerson", "Új felhasználó", 6));
        roleRespond.add(new Respond("/LoggedIn/addReq", "Követelmények", 7));
        roleRespond.add(new Respond("/LoggedIn/deletePublication", "Hír törlése", 8));
    }

    private void studentRespond() {
        roleRespond.add(new Respond("/LoggedIn/data", "Adatok", 1));
        roleRespond.add(new Respond("/LoggedIn/result", "Eredmények", 11));
        roleRespond.add(new Respond("/LoggedIn/change_pass", "Jelszó változtatás", 2));
        roleRespond.add(new Respond("/LoggedIn/controller", "Chat", 3));
    }

    private void noRespond() {
        roleRespond.add(new Respond("/LoggedIn/change_pass", "Jelszó változtatás", 2));
        roleRespond.add(new Respond("/LoggedIn/controller", "Chat", 3));
    }
}
