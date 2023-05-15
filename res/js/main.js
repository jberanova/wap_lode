const pole = document.getElementsByClassName("pole");
for (let i = 0; i < pole.length; i++) {
  pole[i].addEventListener("click", () => {
    let pozice = i;
    switch (pozice) {
      case 6:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 8:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 10:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 11:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 14:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 20:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 22:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 28:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 30:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 31:
        pole[pozice].style.backgroundColor = "green";
        break;
      case 34:
        pole[pozice].style.backgroundColor = "green";
        break;

      default:
        pole[pozice].style.backgroundColor = "red";
        break;
    }
    if (
      pole[6].style.backgroundColor == "green" &&
      pole[8].style.backgroundColor == "green" &&
      pole[10].style.backgroundColor == "green" &&
      pole[11].style.backgroundColor == "green" &&
      pole[14].style.backgroundColor == "green" &&
      pole[20].style.backgroundColor == "green" &&
      pole[22].style.backgroundColor == "green" &&
      pole[28].style.backgroundColor == "green" &&
      pole[30].style.backgroundColor == "green" &&
      pole[31].style.backgroundColor == "green" &&
      pole[34].style.backgroundColor == "green" 
    ) {
      alert("You won!");
    }
  });
}
