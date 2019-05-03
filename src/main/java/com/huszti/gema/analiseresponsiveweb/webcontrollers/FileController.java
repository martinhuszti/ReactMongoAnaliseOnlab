package com.huszti.gema.analiseresponsiveweb.webcontrollers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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
@Api(description = "File kezeléshez tartozó controller")
public class FileController {

    @RequestMapping(path = "/files", method = RequestMethod.POST)
    @ApiOperation("Fájl feltöltést kezel. ResponseEntityvel tér vissza")
    @ApiParam("file-t vár")
    public ResponseEntity handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            System.out.printf("File name=%s, size=%s\n", file.getOriginalFilename(), file.getSize());
            //creating a new file in some local directory
            Path path = Paths.get("./src/main/java/com/huszti/gema/analiseresponsiveweb/resource/");
            File fileToSave = new File(path + "/req_short.txt");
            File newFile = new File(fileToSave.getCanonicalPath());
            System.out.println(fileToSave.getPath());
            System.out.println(fileToSave.getAbsolutePath());
            System.out.println(fileToSave.getCanonicalPath());
            if (fileToSave.createNewFile()) {
                System.out.println("File is created!");
            } else {
                System.out.println("File already exists.");
                //fileToSave.delete();
            }


            System.out.println(newFile.getPath());
            System.out.println(newFile.getAbsolutePath());
            System.out.println(newFile.getCanonicalPath());
            //copy file content from received file to new local file
            file.transferTo(newFile);
        } catch (IOException ioe) {
            //if something went bad, we need to inform client about it
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        //everything was OK, return HTTP OK status (200) to the client
        return ResponseEntity.ok().build();
    }

    @RequestMapping(path = "/dwnload", method = RequestMethod.GET)
    @ApiOperation("Letöltést kezeli. ResponseEntityvel tér vissza")
    public ResponseEntity<Resource> download() throws IOException {

        File file = new File("C:\\analise\\src\\main\\java\\com\\huszti\\gema\\analiseresponsiveweb\\res\\req_short.txt");

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=req_short.txt");
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