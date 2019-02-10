class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors(){
        
    }
}

function CountryArray(){
    return [
        new Country ("Mexico", "Spanish", "Hola Mundo",["green", "white", "red"]),
        new Country ("United States of America", "English", "Hello World",["red", "white", "blue"]),
        new Country("Canada", "English & French", "Hello World, Bonjour le monde",["red", "white", "white"]),
        new Country("Belize", "English", "Hello World",["blue", "red", "white"]),
        new Country("France", "French", "Bonjour le monde",["blue", "white", "red"]),
        new Country("That is not an option", "Memes", "Thanos Did Nothing WRONG!!!!", ["blueviolet", "darkblue", "darkgoldenrod"])
    ]
}


function SwitchCountry(){
    let input = prompt("Please input a country");
    var myCountry;
    var PickedCountry = CountryArray();

    switch (input.toLowerCase()){
        case "mexico":
        myCountry = PickedCountry[0];  
        break;
        case "usa":
        myCountry = PickedCountry[1];         
         break;
        case "canada":
        myCountry = PickedCountry[2];        
        break;
        case "belize":
        myCountry = PickedCountry[3];          
         break;
        case "france":
        myCountry = PickedCountry[4];       
        
         break;
         default:
         myCountry = PickedCountry[5];


    }
    document.getElementById("CountryName").innerText=myCountry.name;
        document.getElementById("OfficialLanguage").innerText=myCountry.lang;
        document.getElementById("HelloWorld").innerText=myCountry.greeting;
        document.getElementById("Color1").style.backgroundColor=myCountry.colors[0];
        document.getElementById("Color2").style.backgroundColor=myCountry.colors[1];
        document.getElementById("Color3").style.backgroundColor=myCountry.colors[2];
    
}