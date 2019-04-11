import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import { CSSTransition } from 'react-transition-group';
import "./css/delete_news.css"


class Delete_Publication extends Component {
    emptyItem = {
        title: '',
        text: '',
        menuActive: false,

    };
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            items: [],
        };
    }
    toggleMenu = (item, ev) => {
        let menuState = !item.menuActive;
        this.setState({
            item: { menuActive: menuState }
        });
    }

    deleteNewsClick = (item, ev) => {

        fetch('/deletenews', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
        console.log("törlés")

        var array = [...this.state.items];
        var index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ items: array });
        }

        console.log(this.state.items);
    }

    componentDidMount() {


        fetch(`/getallnews`)
            .then(result => result.json())
            .then(items => this.setState({ items }));

        console.log("betöltés befejeeződött")
    }

    render() {


        return (
            <div>

                {this.state.items.map(item => <li id="dnews_first" key={item.id}>
                    <div className="news dnews_head dnews_flex">
                        <p onClick={this.toggleMenu.bind(this, item)} className="news_text dnews_flexiable">{item.title}</p>
                        <Clear className='dnews_clear' value={item} onClick={this.deleteNewsClick.bind(this, item)}></Clear>
                    </div>
                    <CSSTransition
                        timeout={350}
                        classNames="menu"
                        key={item.menuActive}>
                        <div className="news news_body"> {item.text.substring(0, 200)} . . .</div>
                    </CSSTransition>
                </li>)}
            </div>
        )
    }
}

export default Delete_Publication;
