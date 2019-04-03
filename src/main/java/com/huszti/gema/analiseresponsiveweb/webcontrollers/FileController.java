package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class FileController {

    @RequestMapping(path = "/files", method = RequestMethod.POST)
    public ResponseEntity handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            System.out.printf("File name=%s, size=%s\n", file.getOriginalFilename(), file.getSize());
            //creating a new file in some local directory
            File fileToSave = new File("C:\\analise\\src\\main\\java\\com\\huszti\\gema\\analiseresponsiveweb\\res\\" + "requirements.pdf");
            fileToSave.delete();
            //copy file content from received file to new local file
            file.transferTo(fileToSave);
        } catch (IOException ioe) {
            //if something went bad, we need to inform client about it
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        //everything was OK, return HTTP OK status (200) to the client
        return ResponseEntity.ok().build();
    }

    @RequestMapping(path = "/dwnload", method = RequestMethod.GET)
    public ResponseEntity<Resource> download() throws IOException {
        System.out.println("asdkezd");

        File file = new File("C:\\analise\\src\\main\\java\\com\\huszti\\gema\\analiseresponsiveweb\\res\\requirements.pdf");

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=requirements.pdf");
        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");

        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(header)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);

    }
}