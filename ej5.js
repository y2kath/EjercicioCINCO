function alumno()
{
    var aluH = parseFloat(document.getElementById("aluH").value);  
    var aluM = parseFloat(document.getElementById("aluM").value);
    var total = (aluH + aluM)*0.01
    var ph = aluH / total
    var pm = aluM / total

    document.getElementById("ph").innerHTML = "El porcentaje de hombres es del " + ph + "%";
    document.getElementById("pm").innerHTML = " El porcentaje de mujeres es del " + pm + "%";
}