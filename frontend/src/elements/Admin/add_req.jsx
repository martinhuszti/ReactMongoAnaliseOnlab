
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './add_req.css'

class Addrequirements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.emptyReq,
            items: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    emptyReq = {
        attendance: '',
        mark: '',
        exam: '',
        tests: '',
        points: '',

    };
    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        console.log(item)
        await fetch('/changereq', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })

        console.log("feltöltés befejeződött")
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    render() {
        const { item } = this.state
        return (
            <div >
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="head">Jelenlét</Label>
                        <Input className="newsP_title" type="text" name="attendance" id="attendance"
                            value={item.attendance || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Aláírás</Label>
                        <Input className="newsP_title" type="text" name="mark" id="mark"
                            value={item.mark || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Vizsga</Label>
                        <Input className="newsP_title" type="text" name="exam" id="exam"
                            value={item.exam || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Számonkérések</Label>
                        <Input className="newsP_title" type="text" name="tests" id="tests"
                            value={item.tests || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="head">Pontszámítás</Label>
                        <Input className="newsP_title" type="text" name="points" id="points"
                            value={item.points || ''} onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup id="buttonFrom">
                        <Button variant={'success'} color="primary" type="submit">Változtatás</Button>
                        <span className="addreq_extra_text">*Csak lényeges, rövid infók kerüljenek a szövegdobozba</span>
                    </FormGroup>

                </Form>

                <div className="addreq_adddoc">
                    <div className="addreq_file_lookup">
                        <div className="addreq_line_text">
                            <label for="file-upload" class="addreq_file_upload">
                                Tallózás...</label>

                            <input class="extra-input" id="file-upload" type="file" accept=".doc,.docx, .pdf" onChange={(event) => this.uploadFile(event)} />
                            <span >Ide kerül a feltöltendő fájl neve</span>
                        </div>

                   
                    <div className="addreq_textholder">
                    <div>
                        <span className="addreq_extra_text">*Tallózás gombra kattintva követelményt leíró fáljt jelölhetsz ki, majd tölthetsz fel</span>
                        </div>
                    </div>
                    </div>
                    <div className="addreq_uploadbutton">
                        <Button className="addreq_uploadbutton" color="primary" >Feltöltés</Button>
                    </div>
                </div>
            </div>


        );
    }


}


export default Addrequirements;