///JavaScript to set links on pages
const links = [
    {
        label: "Week1 Notes",
        url: "../wdd330/week1/index.html"
    },
    {
        label: "Week2 Notes",
        url: "../wdd330/week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "../wdd330/week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "../wdd330/week4/index.html"
    },
    {
        label: "Week 5 Notes",
        url: "../wdd330/week5/index.html"
    },
    {
        label: "Todo App",
        url: "../wdd330/todo/index.html"
    },
    {
        label: "Week 7 Notes",
        url: "../wdd330/week7/index.html"
    }
];
let message = " ";
for (text in links){
    let link = `<li><a href='${links[text].url}'>${links[text].label}</a></li>` ;
    message += link;
}
document.getElementById('navList').innerHTML = message;

const header_Generator = " <h1>WDD 340 Assignments of Nathan Hoskins</h1> <p>A portfollio of work made for class.</p> "
document.getElementById('header').innerHTML = header_Generator;

const footer_generator = "<p>Copyright 2022 Nathan S. Hoskins.  Done for academic credit with Brigham Young University - Idaho, Online <br /> All rights reserved.  Images used are sourced from google and used in accordance to US Free Use Doctrine, Academic Calause.</P>"
document.getElementById('footer').innerHTML = footer_generator;