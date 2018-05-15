var resultado2;
var quantidade = -1;

function exibeInformativo(){
    return "Quantidade de IPs não suportada pelo tipo de Rede </br> </br>" +
         "Classe A :   1.x.x.x - 126.x.x.x  => Máximo de hosts 16.777.214</br>" +
         "Classe B : 128.x.x.x - 191.x.x.x => Máximo de hosts 65.534</br>" +
         "Classe C : 192.x.x.x - 223.x.x.x => Máximo de hosts 254</br>" +
         "Classe D : 224.x.x.x - 239.x.x.x ( Reservado para multicasting )</br>" +
         "Classe E : 240.x.x.x - 254.x.x.x ( Experimental, usado para pesquisa )</br> </br>" +
         "O endereço de classe A 127 não pode ser usado e é reservado às funções de loopback e de diagnóstico"
}

function exibeIntervalosSubRede(){
    
}

function retornaDadosSubRede() {
    
    var aux = quantidade;
    var num255 = 255;
    
    if (quantidade === 0) {
       resultado2 += "Rede vazia";
        
    } else {
        resultado2 += "IP : " + retornaClasse(oct1) + "</br>";
        
        if( (quantidade>0) && (quantidade<256) ){
            if( (retornaClasse(oct1) == "Classe A") || (retornaClasse(oct1) == "Classe B") || (retornaClasse(oct1) == "Classe C") ){
                resultado2 += "Mascara : " + retornaMascara( aux, retornaClasse(oct1) ) + "</br>";
            } else if (retornaClasse(oct1) == "Classe D"){
                resultado2 = "Classe D : 224.x.x.x - 239.x.x.x ( Reservado para multicasting )</br>";
            } else {
                resultado2 = "Classe E : 240.x.x.x - 254.x.x.x ( Experimental, usado para pesquisa )</br>";
            }
            
        }else if( (quantidade>256) && (quantidade<65536) ){
            
            if( (retornaClasse(oct1) == "Classe A") || (retornaClasse(oct1) == "Classe B") ){
                resultado2 += "Mascara : " + retornaMascara( aux, retornaClasse(oct1) ) + "</br>";
            } else {
                resultado2 = exibeInformativo();
                
            }
        
        }else if( (quantidade>65536) && (quantidade<16777216) ){
            
            if ( retornaClasse(oct1) == "Classe A" ){
                resultado2 += "Mascara : " + retornaMascara( aux, retornaClasse(oct1) ) + "</br>";
            } else {
                resultado2 = exibeInformativo();
            }
        } 
    }
}

function exibeSubRede() {
    
    quantidade = document.getElementById("ipQuantidadeSubRede").value;
    var rede = document.getElementById("ipSubRede").value;
    var ips = rede.split(".");
    resultado2 = "";
    oct1 = parseInt(ips[0]);
    oct2 = parseInt(ips[1]);
    oct3 = parseInt(ips[2]);
    oct4 = parseInt(ips[3]);
    
    if( ((oct1<=0) || (oct2<0) || (oct3<0) || (oct4!=0)) || ((oct1>255) || (oct2>255) || (oct3>255) ) || ( (isNaN(oct1)) || (isNaN(oct2)) || (isNaN(oct3)) || (isNaN(oct4) ) ) ){
        resultado2 = "Rede inválida";
    }else{
        if ( (quantidade <= 0) || (quantidade == "") ) {
            resultado2 = "Quantidade de IPs inválida";
        }else{
            retornaDadosSubRede();  
        }
    }
    
    oct1 = "";
    oct2 = "";
    oct3 = "";
    oct4 = "";
    document.getElementById("resultado2").innerHTML = resultado2;
    quantidade = -1;
}