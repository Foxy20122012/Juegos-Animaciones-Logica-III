

const text=(frase)=>{
    document.write(frase);
}

const pantalla = document.querySelector("canvas");
const pincel = pantalla.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0,0,600,400);

pincel.fillStyle = "blue";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "blue";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,50,0,2*3.14);
pincel.fill();
