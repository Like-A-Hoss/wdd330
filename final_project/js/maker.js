import Maker_controler from "../js/maker-controler.js";

const my_character_maker = new Maker_controler();
const stat_data = my_character_maker.generate_data()
my_character_maker.generate_labels(stat_data);