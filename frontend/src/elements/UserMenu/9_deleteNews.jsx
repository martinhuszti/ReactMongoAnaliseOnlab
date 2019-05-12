import React, {Component} from "react";
import Clear from "@material-ui/icons/Clear";
import "./css/delete_news.css";


class Delete_Publication extends Component {
    emptyItem = {
        title: "",
        text: "",

    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            items: [],
        };

        this.headerchange = this.headerchange.bind(this);
    }


    async deleteNewsClick(item) {

        await fetch("/api/news", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });
        console.log("törlés");

        var array = [...this.state.items];
        var index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({items: array});
        }

    }

    componentDidMount() {
        fetch(`/api/news`, {
            method: "GET"
        })
            .then((result) => result.json())
            .then((items) => this.setState({items}, this.addClickedmenu()));
    }

    addClickedmenu() {
        this.state.items.forEach(function (element) {
            element.clicked = false;
        });
    }

    headerchange = (headerstring) => {
        this.setState({headertext: headerstring.text});

        if (headerstring.clicked === true) {
            this.state.items.forEach(function (element) {
                element.clicked = false;
            });
        } else {
            this.state.items.forEach(function (element) {
                element.clicked = false;
            });
            headerstring.clicked = true;
        }

    };

    render() {

        const {items} = this.state;

        return (
            <div>

                {items.map(item => <li id="dnews_first" key={item.id}>
                    <div onClick={this.headerchange.bind(this, item)} className="news dnews_head dnews_flex">
                        <p className="news_text dnews_flexiable">{item.title}</p>
                        <Clear className="dnews_clear" value={item} onClick={this.deleteNewsClick.bind(this, item)}/>
                    </div>
                    <div className={item.clicked ? "dnews_show" : "dnews_hide"}>
                        <div className="news news_body"> {item.text.substring(0, 200)} . . .</div>
                    </div>


                </li>)}
            </div>
        )
    }
}

export default Delete_Publication;
