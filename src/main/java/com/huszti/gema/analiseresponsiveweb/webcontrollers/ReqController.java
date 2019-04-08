package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Requirements;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


@RestController
public class ReqController {

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/uploadreq")
    public Requirements updateRequirements(@RequestBody Requirements newreq) throws FileNotFoundException, UnsupportedEncodingException {

        PrintWriter writer = new PrintWriter("src/main/java/com/huszti/gema/analiseresponsiveweb/resource/req_short.txt", "UTF-8");
        writer.println(newreq.getPresence());
        writer.println(newreq.getSignature());
        writer.println(newreq.getExam());
        writer.println(newreq.getTests());
        writer.println(newreq.getPoints());
        writer.close();

        return newreq;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getreq")
    public List<String> getReq() throws FileNotFoundException {

        File file = new File("src/main/java/com/huszti/gema/analiseresponsiveweb/resource/req_short.txt");
        Scanner sc = new Scanner(file);
        ArrayList<String> tempread = new ArrayList<>();

        while (sc.hasNextLine())
            tempread.add(sc.nextLine());
        System.out.println(tempread.get(2));
        return tempread;

    }


}
