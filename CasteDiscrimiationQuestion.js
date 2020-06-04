class CasteDiscriminationQuestion
{
    constructor()
    {
        this.text = createElement('h2');
        this.text.position(450, 550);
        this.text.style('color', 'green');
        this.text.style('font-size', '30px');

        this.q1 = createDiv("1. How are members of a caste identifiable ? As, in how do children learn to recognize people from <br/>different castes ? If it is due to surname, what's to stop people from just changing thier name and lying <br/>about thier caste ? what's your opinion abut this that why people think that they are a bit different from <br/>them are they simply discriminate them. Infact at last we all are humans.")
        this.q1.position(3, 10);
        this.q1.style('color', 'red');
        this.q1.style('font-size', '30px');
        this.ans1 = createInput("Your Opinion");
        this.ans1.position(33, 170);
        this.ans1.style('color', 'green');
        this.ans1.style('font-size', '30px');

        this.q2 = createDiv("2. In today's date no one use to follow untouchability and although it is banned but then to we might see <br/>people discriminating between caste so from your point of view what coould be the reason for this. <br/>Why people's mentality hasn't yet changed ?")
        this.q2.position(3, 230);
        this.q2.style('color', 'red');
        this.q2.style('font-size', '30px');
        this.ans2 = createInput("Your Opinion");
        this.ans2.position(33, 350);
        this.ans2.style('color', 'green');
        this.ans2.style('font-size', '30px');

        this.q3 = createDiv("3. If you get a chance to do something good or bring a change then what would you do for this ?");
        this.q3.position(3, 410);
        this.q3.style('color', 'red');
        this.q3.style('font-size', '30px');
        this.ans3 = createInput("Your Opinion");
        this.ans3.position(33, 460);
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