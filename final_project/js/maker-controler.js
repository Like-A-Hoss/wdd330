import Connection from "../js/dnd-model.js";
import Attributes_view from '../js/attributes-view.js';


export default class Maker_controler{
    constructor(parent){
    this.str_view = new Attributes_view();
    this.dex_view = new Attributes_view();
    this.con_view = new Attributes_view();
    this.int_view = new Attributes_view();
    this.wis_view = new Attributes_view();
    this.cha_view = new Attributes_view();

    this.str_fetch = new Connection();
    this.dex_fetch = new Connection();
    this.con_fetch = new Connection();
    this.int_fetch = new Connection();
    this.wis_fetch = new Connection();
    this.cha_fetch = new Connection();
    }
    generate_labels(){
        const str_rawdata = this.str_fetch.getData("ability-scores", "str");
        const str_data = Object.entries(str_rawdata.properties);
        this.str_view.render_attribute(str_data, 'str');

        const dex_rawdata = this.dex_fetch.getData("ability-scores", "dex");
        this.dex_view.render_attribute(dex_data, 'dex');

        const con_rawdata = this.con_fetch.getData("ability-scores", "con");
        this.con_view.render_attribute(con_data, 'con');

        const int_rawdata = this.int_fetch.getData("ability-scores", "int");
        this.int_view.render_attribute(int_data, 'int');

        const wis_rawdata = this.wis_fetch.getData("ability-scores", "wis");
        this.wis_view.render_attribute(wis_data, 'wis');

        const cha_rawdata = this.cha_fetch.getData("ability-scores", "cha");
        this.cha_view.render_attribute(cha_data, 'cha');

    }
}