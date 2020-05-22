$$ = sel => document.querySelector(sel);

document.documentElement.style.overflow = 'hidden';

let curr1Pos = 0;
let curr2Pos = 0;

let curtain1 = $$("#cur1");
let curtain2 = $$("#cur2");

let theCanvas = $$("#myCanvas");
theCanvas.width = innerWidth;
theCanvas.height = innerHeight;
const WIDTH = theCanvas.width;
const HEIGHT = theCanvas.height;
let context;

let casinoName = $$("#casinoName");
let presents = $$("#prsnts");
const STARTTOP = innerHeight/1.8;
const STARTLEFT = innerWidth/2.2;
let currentTop = STARTTOP;
let currentLeft = STARTLEFT;

const FSIZE = 0;
let currentFSize = FSIZE;

const STARTOPA = 1;
let currentOpa = STARTOPA;

let card1ImgX = -200;
let card1ImgY = 0;

let card2ImgX = 2000;
let card2ImgY = 300;

let card3ImgX = 500;
let card3ImgY = -1000;

let acey = $$("#acey");
let deucey = $$("#deucey");
const ZEROOPA = 0;
let aceyOpa = ZEROOPA;
let deuceyOpa = ZEROOPA;

function moveCurtains()
{
    curr1Pos -= 1;
    curtain1.style.left = curr1Pos + "px";

    curr2Pos -= 1;
    curtain2.style.right = curr2Pos + "px";
    
    if(curr1Pos == -380)
        setInterval("displayCasinoName()", 60);

}

function skip()
{
    location.href = "intro.html";
}

function displayCasinoName()
{
    currentOpa -= 0.015;
    casinoName.style.opacity = currentOpa;
    casinoName.style.color = "white";

    currentFSize += 0.16;
    casinoName.style.fontSize = currentFSize + "em";

    currentTop -= 5.5;
    currentLeft -= 8.5;

    casinoName.style.top = currentTop + "px";
    casinoName.style.left = currentLeft + "px";

    if(currentFSize == 10.240000000000006)
    {
        casinoName.style.display = "none";
        currentFSize = FSIZE;
        currentTop = STARTTOP;
        currentLeft = STARTLEFT;
        currentOpa = STARTOPA;
        setInterval("displayPresents()", 60);
    }
}

function displayPresents()
{
    presents.style.color = "indianred";

    presents.style.opacity = currentOpa;

    currentFSize += 0.16;
    presents.style.fontSize = currentFSize + "em";
            
    currentTop -= 5.5;
    currentLeft += 1.4;

    presents.style.top = currentTop + "px";
    presents.style.left = currentLeft + "px";

    if(currentFSize == 20.160000000000014)
    {
        presents.style.display = "none";

        setInterval("borderTriangles()", 10);
        setTimeout("drawCard1();drawCard2()", 1);
    }
}

function drawCard1()
{
    context.clearRect(0,0,WIDTH,HEIGHT);
    let card1Img = new Image();
    card1Img.src = `images/BackgroundBlack.png`;
    context.drawImage(card1Img, card1ImgX, card1ImgY);

    card1ImgX += 2;
    card1ImgY += .8;

    if(card1ImgX <= 399)
        requestAnimationFrame(drawCard1);
}

function drawCard2()
{
    let card2Img = new Image();
    card2Img.src = `images/BackgroundRed.png`;
    context.drawImage(card2Img, card2ImgX, card2ImgY);

    card2ImgX -= 5;
    card2ImgY -= .71;

    drawCard3();
    if(card2ImgX > 500)
        requestAnimationFrame(drawCard2);
}

function drawCard3()
{
    let card3Img = new Image();
    card3Img.src = `images/BackgroundRed.png`;
    context.drawImage(card3Img, card3ImgX, card3ImgY);

    card3ImgX -= .70;
    card3ImgY += 4.65;

    if(card3ImgY == 394.99999999999613)
        setInterval("aceyTxt()", 100);
}

function borderTriangles()
{
    
    context.beginPath();
    context.fillStyle = "crimson";
    context.moveTo(0,innerHeight/2);
    context.lineTo(0,innerHeight);
    context.lineTo(1300, 1300);
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(innerWidth, 0);
    context.lineTo(innerWidth,400);
    context.lineTo(0,-innerHeight);
    context.fill();
    context.stroke();
}

function aceyTxt()
{
    acey.style.color = "white";
    aceyOpa += 0.02;
    acey.style.opacity = aceyOpa;

    if(acey.style.opacity == 1.02)
        setInterval("deuceyTxt()", 100);
}

function deuceyTxt()
{
    deucey.style.color = "white";
    deuceyOpa += 0.06;
    deucey.style.opacity = deuceyOpa;
    
    if(deucey.style.opacity > 2)
        skip();
}

function setUp()
{
    acey.style.opacity = aceyOpa;
    deucey.style.opacity = deuceyOpa;

    acey.style.top = currentTop-360 + "px";
    deucey.style.top = currentTop-330 + "px";

    acey.style.left = currentLeft-270 + "px";
    deucey.style.left = currentLeft-235 + "px";

    acey.style.fontSize = 6 + "em";
    deucey.style.fontSize = 10 + "em";

    context = theCanvas.getContext("2d");
    setInterval("moveCurtains()", 6);
}

addEventListener('load', setUp);
$$("button").addEventListener('click', skip);