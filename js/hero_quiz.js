function hero_quiz(){
    let score = 0;
    const quiz =[
        ["What is Superman's real name?", "Clark Kent"],
        ["What is Wonder Woman's real name?", "Diana Prince"],
        ["What is Batman's real name?", "Bruce Wayne"],
        ["What is Flash's real name?", "Barry Allen"]
    ];
    for (const [question, answer] of quiz){
        const response = prompt(question);
        if (response === answer){
            alert('Correct!');
            score ++;
        } else{
            alert('Worg!  The correct answer was ' + answer);
        }
    }
}