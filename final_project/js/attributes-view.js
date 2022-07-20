

export default class Attributes_view{
    render_attribute(attribute_data){
        const tag_id = `${attribute_data.index}_lbl`;
        document.getElementById(tag_id).innerHTML = `<div class="tooltip">${attribute_data.name}<span class="tooltiptext">${attribute_data.desc[0]}</span></div>`;
    }
}