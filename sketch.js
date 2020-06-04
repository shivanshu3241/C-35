var start;
var option;
var name;
var email;

var backgroundImg;
var backgroundImg1;
var backgroundImg2;
var backgroundImg3;

var women;
var poor;
var caste;

var database;

var x = 0;

function preload()
{
    backgroundImg = loadImage("Images/i1.PNG");
    backgroundImg1 = loadImage("Images/b1.PNG"); 
    backgroundImg2 = loadImage("Images/b2.PNG");
    backgroundImg3 = loadImage("Images/b3.PNG")
}

function setup()
{
    createCanvas(1300, 800);
    
    start = new Start();

    database = firebase.database();
}

function draw()
{
    background(backgroundImg);

    start.display();

    if(x == 1 && option == "raise your voice for lower class/poor people or for poverty")
    {
     background(backgroundImg1);
    }

    if(x == 2 && option == "raise your voice for womens")
    {
     background(backgroundImg2);
    }

    if(x == 3 && option == "raise your voice for caste discrimination")
    {
     background(backgroundImg3);
    }
}
