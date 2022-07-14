

export default class Attributes_view{
    render_attribute(attribute_data, attribute_name){
        const tag_id = `${attribute_name}_lbl`;
        document.getElementById(tag_id).innerHTML = `<div class="tooltip">${attribute_name}<span class="tooltiptext">${attribute_data.desc}</span></div>`;
    }
}