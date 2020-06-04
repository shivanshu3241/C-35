class Start
{
    constructor()
    {
      this.name_text = createDiv("Enter Your Name");
      this.name_text.position(30, 30);
      this.name_text.style('color', 'red');
      this.name_text.style('font-size', '30px');

      this.name = createInput("Name");
      this.name.position(30, 70);
      this.name.style('font-size', '30px');
      this.name.style('color', 'black');


      this.email_text = createDiv("Enter Your Email");
      this.email_text.position(30, 130);
      this.email_text.style('color', 'red');
      this.email_text.style('font-size', '30px');

      this.email = createInput('Email');
      this.email.position(30, 170);
      this.email.style('color', 'black');
      this.email.style('font-size', '30px');


      this.option_text = createDiv("Enter For Whom You Want To Raise Your Voice");
      this.option_text.position(30, 230);
      this.option_text.style('color', 'red');
      this.option_text.style('font-size', '30px');
        
      this.option = createSelect();
      this.option.position(30, 270);
      this.option.option('raise your voice for lower class/poor people or for poverty');
      this.option.option('raise your voice for womens');
      this.option.option('raise your voice for caste discrimination');
      this.option.style('font-size', '30px');
      this.option.style('color', 'black');

     
      this.button_text = createDiv("Press Here To Start");
      this.button_text.position(30, 320);
      this.button_text.style('color', 'red');
      this.button_text.style('font-size', '30px');

      this.button = createButton("start");
      this.button.position(30, 360);
      this.button.style('font-size', '30px');
      this.button.style('color', 'black');


      this.instruction = createDiv("Heyy not getting what to do soo, here are the <br/>.....................INSTRUCTIONS........................<br/> You just have to give the informations that are<br/> asked i.e. Your full name, Your Email.Id, You<br/> have to choose the option for whom you wanna<br/> raise your voice.");
      this.instruction.position(730, 430);
      this.instruction.style('font-size', '30px');
      this.instruction.style('color', 'green');

    }

    display()
    {
      this.button.mousePressed(()=>
      {
        this.name_text.hide();  
        this.button_text.hide();
        this.option_text.hide();
        this.email_text.hide();
        this.option.hide();
        this.button.hide();
        this.name.hide();   
        this.email.hide();
        this.instruction.hide();

        option = this.option.value();
        name = this.name.value();
        email = this.email.value();

        var dbref = database.ref("details");
        dbref.set({
          Name: name,
          Email: email,
          Option: option
        })

          if(option == "raise your voice for lower class/poor people or for poverty")
           {
             x = 1;
             poor = new PoorQuestion();
             poor.display();
           }

          if(option == "raise your voice for womens")
           {
             x = 2;
             women = new WomenQuestion();
             women.display();
           }

          if(option == "raise your voice for caste discrimination") 
           {
             x = 3;
             caste = new CasteDiscriminationQuestion();
             caste.display();
           }
           
        console.log(name);
        console.log(option);
      })
    }
}