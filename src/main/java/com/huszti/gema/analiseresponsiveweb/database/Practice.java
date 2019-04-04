package com.huszti.gema.analiseresponsiveweb.database;

import com.huszti.gema.analiseresponsiveweb.database.Users.SimpleUser;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.ManyToMany;
import java.util.List;

@Data
@Document
public class Practice {
    @Id
    private String id;
    @ManyToMany
    private List<SimpleUser> praticipants;
    private String time;

}
