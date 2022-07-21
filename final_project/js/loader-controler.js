export default class Loader_Controler{
    constructor(parent){
        this.name = localStorage.getItem('name');
        this.player = localStorage.getItem('player');
        this.race = localStorage.getItem('race');
        this.str = localStorage.getItem('str');
        this.dex = localStorage.getItem('dex');
        this.con = localStorage.getItem('con');
        this.int = localStorage.getItem('int');
        this.wis = localStorage.getItem('win');
        this.cha = localStorage.getItem('cha');
    }
    load_character(){
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('player').innerHTML = this.player;
        document.getElementById('race').innerHTML = this.race;
        document.getElementById('str').innerHTML = this.str;
        document.getElementById('dex').innerHTML= this.dex;
        document.getElementById('con').innerHTML= this.con;
        document.getElementById('int').innerHTML = this.int;
        document.getElementById('wis').innerHTML = this.wis;
        document.getElementById('cha').innerHTML = this.cha;
    }
}