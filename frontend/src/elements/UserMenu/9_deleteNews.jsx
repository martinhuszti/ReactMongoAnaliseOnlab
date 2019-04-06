import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import "./css/delete_news.css"


class Delete_Publication extends Component {
    emptyItem = {
        title: '',
        text: ''

    };
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            items: []

        };

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
            this.setState({items: array});
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
                {this.state.items.map(item => <li id="dnews_first"key={item.id}>
                    <div className="news dnews_head dnews_flex">
                        <p className="news_text dnews_flexiable">{item.title}</p>
                        <Clear className='dnews_clear' value={item} onClick={this.deleteNewsClick.bind(this,item)}></Clear>
                    </div>


                </li>)}
            </div>
        )
    }
}

export default Delete_Publication;
