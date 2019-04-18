package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

import lombok.Data;

import java.util.ArrayList;

@Data
public class RoleRespond {
private ArrayList<Respond> roleRespond;

    public RoleRespond(String role) {
        roleRespond =new ArrayList<>();
        System.out.println(role +" bent");
        if(role.equals("admin")){
            System.out.println("belemész");
            adminRespond();
        }
       else if(role.equals("teacher")){
            teacherRespond();
        }
        else if(role.equals("student")){
            studentRespond();
        }
        else{
            noRespond();
        }

    }
    private void adminRespond(){
        roleRespond.add(new Respond("/LoggedIn/data","Adatok"));
        roleRespond.add(new Respond("/LoggedIn/result","Eredmények"));
        roleRespond.add(new Respond("/LoggedIn/change_pass","Jelszó változtatás"));
        roleRespond.add(new Respond("/LoggedIn/controller","Chat"));
        roleRespond.add(new Respond("/LoggedIn/students","Diákok"));
        roleRespond.add(new Respond("/LoggedIn/newPublication","Új hír közzététele"));
        roleRespond.add(new Respond("/LoggedIn/addPerson","Új felhasználó"));
        roleRespond.add(new Respond("/LoggedIn/addReq","Követelmények"));
        roleRespond.add(new Respond("/LoggedIn/deletePublication","Hír törlése"));
        roleRespond.add(new Respond("/LoggedIn/addLab","Új gyakorlat"));
        roleRespond.add(new Respond("/LoggedIn/newTest","Új számonkérés"));
    }

    private void teacherRespond(){
        roleRespond.add(new Respond("/LoggedIn/data","Adatok"));
        roleRespond.add(new Respond("/LoggedIn/result","Eredmények"));
        roleRespond.add(new Respond("/LoggedIn/change_pass","Jelszó változtatás"));
        roleRespond.add(new Respond("/LoggedIn/controller","Chat"));
        roleRespond.add(new Respond("/LoggedIn/students","Diákok"));
        roleRespond.add(new Respond("/LoggedIn/newPublication","Új hír közzététele"));
        roleRespond.add(new Respond("/LoggedIn/addPerson","Új felhasználó"));
        roleRespond.add(new Respond("/LoggedIn/addReq","Követelmények"));
        roleRespond.add(new Respond("/LoggedIn/deletePublication","Hír törlése"));
    }
    private void studentRespond(){
        roleRespond.add(new Respond("/LoggedIn/data","Adatok"));
        roleRespond.add(new Respond("/LoggedIn/result","Eredmények"));
        roleRespond.add(new Respond("/LoggedIn/change_pass","Jelszó változtatás"));
        roleRespond.add(new Respond("/LoggedIn/controller","Chat"));
    }
    private void noRespond(){
        roleRespond.add(new Respond("/LoggedIn/change_pass","Jelszó változtatás"));
        roleRespond.add(new Respond("/LoggedIn/controller","Chat"));
    }
}
