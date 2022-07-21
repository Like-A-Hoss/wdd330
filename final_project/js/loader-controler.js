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
        switch(this.race){
            case "dragonborn":
                this.str += 2
                this.cha += 1
                break;
            case "dwarf":
                this.con += 2
                this.str += 2
                break;
            case "elf":
                this.dex += 2
                this.int += 1
                break;
            case "halfing":
                this.dex += 2
                this.cha += 1
                break;
            case "human":
                this.con += 1
                this.str += 1
                this.cha += 1
                break;
            case "gnome":
                this.int += 2
                this.con += 1
                break;
            case "half-elf":
                this.cha += 2
                this.dex += 1
                this.wis += 1
                break;
            case "half-orc":
                this.str += 2
                this.con += 1
                break;
        }
        
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