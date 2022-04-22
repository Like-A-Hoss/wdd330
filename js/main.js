///JavaScript to set links on pages
const links = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    }
];
let message = " ";
for (text in links){
    let link = `<li><a href='${links[text].url}'>${links[text].label}</a></li>` ;
    message += link;
}
document.getElementById('navList').innerHTML = message;