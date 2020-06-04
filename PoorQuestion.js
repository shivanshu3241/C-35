class PoorQuestion 
{
    constructor()
    {
        this.text = createElement('h2');
        this.text.position(450, 550);
        this.text.style('color', 'green');
        this.text.style('font-size', '30px');

        this.q1 = createDiv('1. We all are aware of the condition of poor people or the (B.P.L) people, Many of us think about them and<br/> most of us help them like providing them food or work but then also many people are still not having<br/> money to have a proper meal. What do you think about this that what could be the reason ?');
        this.q1.position(3, 10);
        this.q1.style('color', 'red');
        this.q1.style('font-size', '30px');
        this.ans1 = createInput("Your Opinion");
        this.ans1.position(33, 150);
        this.ans1.style('color', 'green');
        this.ans1.style('font-size', '30px');

        this.q2 = createDiv('2. Have you ever tried to help them by justing giving them money, work, food or just spending time with <br/>them OR have you ever tried to know that, what they feel ?');
        this.q2.position(3, 230);
        this.q2.style('font-size', '30px');
        this.q2.style('color', 'red'); 
        this.ans2 = createRadio('h2');
        this.ans2.option('Yes');
        this.ans2.option('No');
        this.ans2.position(33, 320);
        this.ans2.style('font-size', '30px');
        this.ans2.style('color', 'green');

        this.q3 = createDiv('3. From your point of view suggest one way that would bring a change in their life or a way that our Indian <br/>government should do for them.');
        this.q3.position(3, 400);
        this.q3.style('color', 'red');
        this.q3.style('font-size', '30px'); 
        this.ans3 = createInput("Your Opinion");
        this.ans3.position(33, 500);
        this.ans3.style('color', 'green');
        this.ans3.style('font-size', '30px');

        this.button = createButton("Submit");
        this.button.position(1000, 650);
        this.button.style('font-size', '30px');
        this.button.style('color', 'black');
    }

    display()
    {
        this.button.mousePressed(()=>
        {
          this.text.html("THANK YOU!! For giving your opinion.");
          console.log(this.ans1.value());
          console.log(this.ans2.value());
          console.log(this.ans3.value());  
        })
    }
}