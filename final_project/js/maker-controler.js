import Connection from "../js/dnd-model.js";
import Attributes_view from '../js/attributes-view.js';


export default class Maker_controler{
    constructor(parent){
    this.attribute_viewer = new Attributes_view();
    /* this.dex_view = new Attributes_view();
    this.con_view = new Attributes_view();
    this.int_view = new Attributes_view();
    this.wis_view = new Attributes_view();
    this.cha_view = new Attributes_view();*/

    this.str_fetch = new Connection();
    this.dex_fetch = new Connection();
    this.con_fetch = new Connection();
    this.int_fetch = new Connection();
    this.wis_fetch = new Connection();
    this.cha_fetch = new Connection();
    }
    
    generate_data(){
        const str_rawdata = this.str_fetch.getData("ability-scores", "str");
        const dex_rawdata = this.dex_fetch.getData("ability-scores", "dex");
        const con_rawdata = this.con_fetch.getData("ability-scores", "con");
        const int_rawdata = this.int_fetch.getData("ability-scores", "int");
        const wis_rawdata = this.wis_fetch.getData("ability-scores", "wis");
        const cha_rawdata = this.cha_fetch.getData("ability-scores", "cha");
        
        while(cha_rawdata === undefined){
            console.log(str_rawdata);
            console.log(dex_rawdata);
            console.log(con_rawdata);
            console.log(wis_rawdata);
            console.log(cha_rawdata);
            console.log(int_rawdata);

        }
        const data_out = [str_rawdata, dex_rawdata, con_rawdata, int_rawdata, wis_rawdata, cha_rawdata];
        return data_out

    }

    generate_labels(stat_array){
       for(let stat in stat_array){
        this.attribute_viewer.render_attribute(stat);
        
    /*    const str_data = Object.entries(str_rawdata.properties);
        this.str_view.render_attribute(str_data);

        
        this.dex_view.render_attribute(dex_data);

        
        this.con_view.render_attribute(con_data);

        
        this.int_view.render_attribute(int_data);

        
        this.wis_view.render_attribute(wis_data);

        
        this.cha_view.render_attribute(cha_data);
*/
        }
    }

    save(){
        const name = document.getElementById('name').value;
        const player = document.getElementById('player').value;
        const race = document.getElementById('race').value;
        const str = document.getElementById('str').value;
        const dex = document.getElementById('dex').value;
        const con = document.getElementById('con').value;
        const int = document.getElementById('int').value;
        const wis = document.getElementById('wis').value;
        const cha = document.getElementById('cha').value;
        localStorage.setItem("name",name);
        localStorage.setItem('player', player);
        localStorage.setItem('race', race);
        localStorage.setItem('str', str);
        localStorage.setItem('dex', dex);
        localStorage.setItem('con', con);
        localStorage.setItem('int', int);
        localStorage.setItem('wis', wis);
        localStorage.setItem('cha', cha);
    }
}