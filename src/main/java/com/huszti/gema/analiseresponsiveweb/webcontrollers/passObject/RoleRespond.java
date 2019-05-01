package com.huszti.gema.analiseresponsiveweb.webcontrollers.passObject;

import lombok.Data;

import java.util.ArrayList;

@Data
public class RoleRespond {
    private ArrayList<Respond> roleRespond;

    public RoleRespond(String role) {
        roleRespond = new ArrayList<>();
        switch (role) {
            case "admin":
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

    private void adminRespond(){
        roleRespond.add(new Respond("/loggedin/data","Adatok",1));
        roleRespond.add(new Respond("/loggedin/changepass","Jelszó változtatás",2));
        roleRespond.add(new Respond("/loggedin/controller","Chat",3));
        roleRespond.add(new Respond("/loggedin/students","Diákok",4));
        roleRespond.add(new Respond("/loggedin/newpublication","Új hír közzététele",5));
        roleRespond.add(new Respond("/loggedin/addperson","Új felhasználó",6));
        roleRespond.add(new Respond("/loggedin/addreq","Követelmények",7));
        roleRespond.add(new Respond("/loggedin/deletepublication","Hír törlése",8));
        roleRespond.add(new Respond("/loggedin/addlab","Új gyakorlat",9));
        roleRespond.add(new Respond("/loggedin/newTest","Új számonkérés",10));
        roleRespond.add(new Respond("/loggedin/changelab","Gyakorlat változtatás",12));
    }

    private void teacherRespond(){
        roleRespond.add(new Respond("/loggedin/data","Adatok",1));
        roleRespond.add(new Respond("/loggedin/changepass","Jelszó változtatás",2));
        roleRespond.add(new Respond("/loggedin/controller","Chat",3));
        roleRespond.add(new Respond("/loggedin/students","Diákok",4));
        roleRespond.add(new Respond("/loggedin/newpublication","Új hír közzététele",5));
        roleRespond.add(new Respond("/loggedin/addperson","Új felhasználó",6));
        roleRespond.add(new Respond("/loggedin/addreq","Követelmények",7));
        roleRespond.add(new Respond("/loggedin/deletepublication","Hír törlése",8));
    }
    private void studentRespond(){
        roleRespond.add(new Respond("/loggedin/data","Adatok",1));
        roleRespond.add(new Respond("/loggedin/result","Eredmények",11));
        roleRespond.add(new Respond("/loggedin/changepass","Jelszó változtatás",2));
        roleRespond.add(new Respond("/loggedin/controller","Chat",3));
    }
    private void noRespond(){
        roleRespond.add(new Respond("/loggedin/changepass","Jelszó változtatás",2));
        roleRespond.add(new Respond("/loggedin/controller","Chat",3));

    }
}
