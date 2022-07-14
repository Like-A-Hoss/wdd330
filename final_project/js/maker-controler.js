import Attributes_view from "./attributes-view";
import Connection from "./dnd-model";

export default class Maker_controler{
    constructor(parent){
    this.str_view = new Attributes_view();
    this.dex_view = new Attributes_view();
    this.con_view = new Attributes_view();
    this.int_view = new Attributes_view();
    this.wis_view = new Attributes_view();
    this.cha_view = new Attributes_view();

    str_fetch = new Connection();
    dex_fetch = new Connection();
    con_fetch = new Connection();
    int_fetch = new Connection();
    wis_fetch = new Connection();
    cha_fetch = new Connection();
    }
    generate_labels(){
        str_data = str_fetch.getData("ability-scores", "str");
        str_view.render_attribute(str_data, 'str');
    }
}