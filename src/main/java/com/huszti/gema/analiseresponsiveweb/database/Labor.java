package com.huszti.gema.analiseresponsiveweb.database;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "labors")
@ApiModel(description = "Gyakorlat leírását szolgálló modell")
public class Labor {

    @Id
    private String id;
    @ApiModelProperty(notes = "Gyakorlat nevét határozza")
    private String title;
    @ApiModelProperty(notes = "Gyakorlat helyét határozza")
    private String place;
    @ApiModelProperty(notes = "Gyakorlat időpontját határozza")
    private String time;

    private List<String> student_ids;
    private String teacher_id;

}
