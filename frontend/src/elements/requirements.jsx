import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';
import React, {Component} from 'react';
import './requirements.css';

const PlaceString = 'Követelmények';

class Requirements extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.refreshPage = this.refreshPage.bind(this);

    }

    async refreshPage(event) {
        event.preventDefault();
        await fetch(`/getnews`)
            .then(result => result.json())
            .then(items => this.setState({items}));

        console.log("betöltés befejeeződött")
    }


    render() {


        return (
            <div id="placeholder_news">
                <div id="placeholder_header"/>
                <div id="width_class">

                    <div class="news news_head">
                        <p class="news_text" dangerouslySetInnerHTML={{__html: PlaceString}}/>
                    </div>
                    <div className="news news_body">
                        <div className="req_flex">
                            <ul className="req_itemtext">
                                <li>
                                    <span>Jelenlét:</span>
                                    <p>Előadáson nincs, gyakorlatokon legalább 70% a jelenléti követelmény. A jelenlét
                                        minden
                                        gyakorlaton ellenőrzésre kerül.
                                        Érvényes aláírással rendelkező keresztféléves hallgatók számára, illetve javító
                                        szándékkal
                                        a tárgyat újra felvevő hallgatók számára a bejárás gyakorlatra sem kötelező (de
                                        ajánlott).</p>
                                </li>
                                <li>
                                    <span>Aláírás:</span>
                                    <p>Aláírást az kap, aki a gyakorlaton a jelenléti követelményt teljesítette, és
                                        mindhárom
                                        zárthelyit külön-külön legalább 40%-ra megírta.</p>
                                </li>
                                <li>
                                    <span>Vizsga:</span>
                                    <p>Csak érvényes aláírással rendelkező hallgató bocsátható vizsgára. A 90 perces
                                        írásbeli
                                        vizsgadolgozat feladatok megoldását és a tételek, definíciók pontos kimondását,
                                        valamint a
                                        félév során elhangzott bizonyításokat kéri számon. Nagyobb súllyal tartalmazza
                                        azt az anyagrészt, amelyet évközi zárthelyikben nem kértünk számon, ebből az
                                        anyagrészből is teljesíteni
                                        kell legalább 40%-ot. Ha a vizsgázó ezt a részt 40%-nál kisebb eredménnyel
                                        teljesíti, vagy ha
                                        a teljes dolgozat értékelése nem éri el a 40%-ot, akkor a vizsgajegy elégtelen.
                                        Egyébként a
                                        vizsgajegy kialakítása a félévközi zárthelyi dolgozatokon és a vizsgán mutatott
                                        teljesítmény
                                        együttes figyelembevételével történik: az 1. és 2. zárthelyi dolgozatokon elért
                                        százalékos teljesítményt 1
                                        4
                                        szorzóval, a vizsgadolgozaton elért százalékos teljesítményt 1
                                        2
                                        szorzóval vesszük
                                        figyelembe. (A 0. zárthelyi eredménye a vizsgajegybe nem számít bele.)
                                        Az így számított p eredmény alapján az érdemjegy:
                                    </p>
                                </li>


                            </ul>
                            <ul className="req_itemtext">
                                <li>
                                    <span>Számonkérések:</span>
                                    <p>Minden zárthelyi írásbeli dolgozat, melyen semmiféle segédeszköz nem használható.
                                        A
                                        zárthelyik ütemezése, tematikája és bővebb, aktuális információk megtalálhatók a
                                        tárgy honlapján.</p>
                                </li>
                                <li>
                                    <span>Pontszámítás:</span>
                                    <p>Az így számított p eredmény alapján az érdemjegy:
                                        0 p 40 esetén elégtelen(1),
                                        40 ≤ p 55 esetén elégséges (2),
                                        55 ≤ p 65 esetén közepes (3),
                                        65 ≤ p 80 esetén jó (4),
                                        80 ≤ p ≤ 100 esetén jeles (5)
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <a className="req_download" href="../img/Analisys_logo.svg" download>Logo letöltése</a>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }


}


export default Requirements;