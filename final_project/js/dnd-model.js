import { getJSON } from "../js/utilities.js";

/*building model*/
export default class Connection{
    constructor(){
        this.baseUrl = "https://www.dnd5eapi.co/api/";
        this._data = {};
    }
    async getData(section, item) {
        // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
        const query =
          this.baseUrl +
          `${section}/${item}`;
        console.log(query);
        this._data = await getJSON(query);
        console.log(this._data)
        return this._data;
      }
     
}