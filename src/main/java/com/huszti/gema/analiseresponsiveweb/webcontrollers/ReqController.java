package com.huszti.gema.analiseresponsiveweb.webcontrollers;


import com.huszti.gema.analiseresponsiveweb.database.Requirements;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


@RestController
@RequestMapping("/api/requirements")
public class ReqController {

    @PostMapping
    public Requirements updateRequirements(@RequestBody Requirements newreq) throws IOException {

        PrintWriter writer = new PrintWriter("src/main/java/com/huszti/gema/analiseresponsiveweb/resource/req_short.txt");
        writer.println(newreq.getPresence());
        writer.println(newreq.getSignature());
        writer.println(newreq.getExam());
        writer.println(newreq.getTests());
        writer.println(newreq.getPoints());
        writer.close();

        return newreq;
    }

    @GetMapping
    public List<String> getReq() throws IOException {

        File file = new File("src/main/java/com/huszti/gema/analiseresponsiveweb/resource/ort.txt");
        if (!file.exists()) {

            PrintWriter writer = new PrintWriter(file);
        }
        Scanner sc = new Scanner(file);
        ArrayList<String> tempread = new ArrayList<>();

        while (sc.hasNextLine())
            tempread.add(sc.nextLine());
        return tempread;

    }


}
