function Pluss(cif = 3, dec = 2){
    var combo = document.getElementById("board");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('boardtext').innerHTML = selected;
    var bo = parseInt(document.getElementById('board').value);
    
    var combo = document.getElementById("procesador");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('procetext').innerHTML = selected;
    var pro = parseInt(document.getElementById('procesador').value);
    
    var combo = document.getElementById("memoria");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('memoriatext').innerHTML = selected;
    var me = parseInt(document.getElementById('memoria').value);
    
    var combo = document.getElementById("grafica");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('graficatext').innerHTML = selected;
    var gra = parseInt(document.getElementById('grafica').value);
    
    var combo = document.getElementById("fuente");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('fuentetext').innerHTML = selected;
    var fue = parseInt(document.getElementById('fuente').value);
    
    var combo = document.getElementById("solido");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('solidotext').innerHTML = selected;
    var sol = parseInt(document.getElementById('solido').value);
    
    var combo = document.getElementById("mecanico");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('mecanicotext').innerHTML = selected;
    var mec = parseInt(document.getElementById('mecanico').value);
    
    var combo = document.getElementById("disipacion");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('disipaciontext').innerHTML = selected;
    var dis = parseInt(document.getElementById('disipacion').value);
    
    var combo = document.getElementById("monitores");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('monitortext').innerHTML = selected;
    var mon = parseInt(document.getElementById('monitores').value);
    
    var combo = document.getElementById("chasis");
    var selected = combo.options[combo.selectedIndex].text;
    document.getElementById('chasistext').innerHTML = selected;
    var cha = parseInt(document.getElementById('chasis').value);
        
    var suma = bo+pro+me+gra+fue+sol+mec+dis+mon+cha;
    var total = suma.toString();
    total = total.split('.')
  // evaluamos si existen decimales
  if (!total[1]) {
    total[1] = '00'
  }

  let separados
  // se calcula la longitud de la cadena
  if (total[0].length > cif) {
    let uno = total[0].length % cif
    if (uno === 0) {
      separados = []
    } else {
      separados = [total[0].substring(0, uno)]
    }
    let posiciones = parseInt(total[0].length / cif)
    for (let i = 0; i < posiciones; i++) {
      let pos = ((i * cif) + uno)
      console.log(uno, pos)
      separados.push(total[0].substring(pos, (pos + 3)))
    }
  } else {
    separados = [total[0]]
  }

  document.getElementById('total').innerHTML = '$' + separados.join(',');
  
    
}










