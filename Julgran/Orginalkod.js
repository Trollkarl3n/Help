// Din Kod på julgran v1 med kommentarer

"use strict"; // Tvingar strikt syntax för att undvika vanliga JavaScript-fel

function ritaRad(bredd, tecken) {
    // Första loopen: Skapar själva toppen av granen
    for (let i = 1; i <= bredd; i++) {
        let rad = "            "; // Fix längdmellanrum som en "baslinje"
        // Problem: Mellanrummet är hårdkodat och inte beroende av bredden

        // Loop för att lägga till mellanslag för att centrera raderna
        for (let j = 1; j <= bredd - i; j++) {
            rad = rad + " ";
        }
        // Loop för att lägga till stjärnor (*)
        for (let k = 1; k <= 2 * i - 1; k++) {
            rad = rad + tecken;
        }

        // Skriver ut raden
        document.writeln(rad); 
        // Problem: `document.writeln` är inte anpassad för radbrytningar, vilket gör formatet beroende av webbläsaren.
    }

    // Loopen för att skapa granens stam
    for (let i = 1; i <= 3; i++) {
        let stam = "                    " + "888";
        // Problem: Mellanslag är hårdkodat, vilket gör att stammen inte centreras dynamiskt om bredden ändras.

        document.writeln(stam); 
        // Problem: Inga radbrytningar gör att texten kan bli felplacerad i vissa webbläsare.
    }
}

// Anropar funktionen med en bredd av 10 och tecknet "*"
ritaRad(10, "*");