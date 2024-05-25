/*Theme Mode Function */
function on(){
    // Obtains an array of all <link>
                // elements.
                // Select your element using indexing.
                var theme = document.getElementsByTagName('link')[0];
                var pic=document.getElementById('toplogo');
                var men=document.getElementById('menu');
      
                // Change the value of href attribute 
                // to change the css sheet.
                if (theme.getAttribute('href') == '/finalProject/css/styles1.css') {
                    theme.setAttribute('href', '/finalProject/css/styles2.css');
                }else if (theme.getAttribute('href') == '/finalProject/css/styles2.css'){
                    theme.setAttribute('href', '/finalProject/css/styles3.css')
                } 
                else {
                    theme.setAttribute('href', '/finalProject/css/styles1.css');
                }

                if (pic.src.match("/finalProject/images/logo.png")) {
                    pic.src = "/finalProject/images/logoDark.png";
                }
                else if (pic.src.match("/finalProject/images/logoDark.png")){
                    pic.src = "/finalProject/images/logoGreen.png";
                }
                else {
                    pic.src = "/finalProject/images/logo.png";
                }

                if (men.src.match("/finalProject/images/menu.png")) {
                    men.src = "/finalProject/images/menuDark.png";
                }
                else if (men.src.match("/finalProject/images/menuDark.png")){
                    men.src = "/finalProject/images/menuGreen.png";
                }
                else {
                    men.src = "/finalProject/images/menu.png";
                }
            }  
/*Form Validation Script */
function validateForm() {
    var emailIn = document.forms["email"]["input"].value;
    if (emailIn == "") {
    alert("Email must be filled out");
    return false;
}
}

/*Weather API*/
function weather(){
    createCanvas(200,200);
    loadJSON('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=46322941a75ac0c00a1404216b19ffb2&unit=metric', gotData);
}
function gotData(data){
    weather=data;
}
function draw(){
    if(weather){
        var temp=weather.main.temp;
        eclipse(100,100, temp, temp);
    }
}