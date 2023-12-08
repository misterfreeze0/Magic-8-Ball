/* magic 8 ball
prompt the user for a question
return random from available answers
display response in an alert
*/

    const answers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];
    
    function eightBallChoice() {
        return answers[Math.floor(Math.random() * answers.length)];
    }
    
    // Prompt the user for a question
    const userQuestion = prompt("Ask the Magic 8-Ball a question:");
    
    // Get the response
    const response = eightBallChoice();
    
    // Display the response in an alert
    alert(`Magic 8-Ball says: ${response}`);
    
    