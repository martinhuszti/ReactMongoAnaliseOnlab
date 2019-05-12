import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import "./css/add_req.css";
import {FileService} from "./8_AddRequirements/FileService.jsx";

class Addrequirements extends Component {
    emptyReq = {
        presence: "",
        signature: "",
        exam: "",
        tests: "",
        points: "",

    };

    constructor(props) {
        super(props);

        this.fileService = new FileService();

        this.state = {
            item: this.emptyReq,
            items: [],
            data: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        console.log(item);
        await fetch("/api/requirements", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });
        console.log("feltöltés befejeződött");
    }


    componentWillMount() {
        fetch("/api/requirements", {
            method: "GET"
        })
            .then((result) => result.json())
            .then((requirment) => {

                this.setState({
                    item: requirment
                });

            });

    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append("file", event.target.files[0]);
        data.append("name", "my_file");
        data.append("description", "this file is uploaded by young padawan");

        //calling async Promise and handling response or error situation
        FileService.uploadFileToServer(data).then(() => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {

            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
    };

    render() {
        const {item} = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="head">Jelenlét</Label>
                        <Input className="newsP_title" type="text" name="presence" id="presence"
                               defaultValue={this.state.items.presence}
                               value={item.presence || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Aláírás</Label>
                        <Input className="newsP_title" type="text" name="signature" id="signature"
                               value={item.signature || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Vizsga</Label>
                        <Input className="newsP_title" type="text" name="exam" id="exam"
                               value={item.exam || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Számonkérések</Label>
                        <Input className="newsP_title" type="text" name="tests" id="tests"
                               value={item.tests || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Pontszámítás</Label>
                        <Input className="newsP_title" type="text" name="points" id="points"
                               value={item.points || ""} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={"success"} color="primary" type="submit">Változtatás</Button>
                        <span
                            className="addreq_extra_text">*Csak lényeges, rövid infók kerüljenek a szövegdobozba</span>
                    </FormGroup>

                </Form>

                <div className="addreq_adddoc">
                    <div className="addreq_file_lookup">
                        <div className="addreq_line_text">
                            <label htmlFor="file-upload" className="addreq_file_upload">
                                Tallózás...</label>

                            <input className="extra-input" id="file-upload" type="file" accept=".doc,.docx, .pdf"
                                   onChange={this.handleUploadFile}/>
                        </div>


                        <div className="addreq_textholder">
                            <div>
                                <span className="addreq_extra_text">*Tallózás gombra kattintva követelményt leíró fáljt jelölhetsz ki, majd tölthetsz fel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }


}


export default Addrequirements;