class WomenQuestion
{
    constructor()
    {
        this.text = createElement('h2');
        this.text.position(450, 550);
        this.text.style('color', 'green');
        this.text.style('font-size', '30px');

        this.q1 = createDiv("1. Do you think that the current feminist revolts fulfill their advocasy role on women's rights and <br/>social awareness ?");
        this.q1.position(3, 10);
        this.q1.style('color', 'red');
        this.q1.style('font-size', '30px');
        this.ans1 = createRadio("h2");
        this.ans1.option('1. Yes');
        this.ans1.option('2. No');
        this.ans1.option('3. MayBe');
        this.ans1.position(33, 100);
        this.ans1.style('color', 'green');
        this.ans1.style('font-size', '30px');

        this.q2 = createDiv("2. So, You all might be knowing about the gender discrimination or the voilence for women. No one want's <br/>that he/she sholud always be discriminated or felt different from other's or feel awkward. So choose the <br/>options to give your opinion about this.");
        this.q2.position(3, 200);
        this.q2.style('font-size', '30px');
        this.q2.style('color', 'red'); 
        this.ans2 = createSelect("h2");
        this.ans2.option('1. If you get an opportunity to raise your voice for them will you raise/I will raise my voice for them');
        this.ans2.option('2. No i will never raise my voice for them/I will let them be there in the same condition');
        this.ans2.option('3. MayBe I will if i get support to raise my voice for them or i get an opportunity to do something helpful for them');
        this.ans2.position(20, 400);
        this.ans2.style('font-size', '25px');
        this.ans2.style('color', 'green');

        this.button = createButton("Submit");
        this.button.position(1000, 550);
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
        })
    }
}