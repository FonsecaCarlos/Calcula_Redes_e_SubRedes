var resultado;
var oct1, oct2, oct3, oct4;

function retornaClasse(oct1){
    if( (oct1>0) && (oct1<=127) ){
        return "Classe A";
    }else if( (oct1>=128) && (oct1<=191) ){
        return "Classe B";
    }else if( (oct1>=192) && (oct1<=223) ){
        return "Classe C";
    }else if( (oct1>=224) && (oct1<=239) ){
        return "Classe D";
    }else if( (oct1>=240) && (oct1<=255) ){
        return "Classe E";
    } 
}

function masc(hosts){
    if (quantidade==-1) {
        return 0;   
    } else {
        if( 2 >= hosts ){
            return 252;
        }else if( 6 >= hosts ){
            return 248;
        }else if( 14 >= hosts ){
            return 240;
        }else if( 30 >= hosts ){
            return 224;
        }else if( 62 >= hosts ){
            return 192;
        }else if( 126 >= hosts ){
            return 128;
        }else if( 254 >= hosts ){
            return 0;
        }
    }
}

function retornaMascara(aux, classe){
    if (aux == -1) {
        if( (oct1>0) && (oct1<=127) ){
            return 255 + " . " + masc(aux) + " . " + 0 + " . " + 0;
        }else if( (oct1>=128) && (oct1<=191) ){
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;
        }else if( (oct1>=192) && (oct1<=255) ){
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
        }
    } else if ( classe == "Classe A" ) {
        if( aux<=254 ){
            aux = Math.ceil(aux); //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        }else if( (aux>254) && (aux<=65534) ){
            aux = Math.ceil(aux/256); //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;

        }else if( (aux>65534) && (aux<=16777214) ){
            aux = Math.ceil(aux/65536);  //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + masc(aux) + " . " + 0 + " . " + 0;
            
        }
            
    } else if ( classe == "Classe B" ) {
        if( aux<=254 ){
            aux = Math.ceil(aux);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        }else if( (aux>254) && (aux<=65534) ){
            aux = Math.ceil(aux/256);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + masc(aux) + " . " + 0;

        }
    } else if ( (classe == "Classe C")  ) {
        if( aux<=254 ){
            aux = Math.ceil(aux);   //A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
            return 255 + " . " + 255 + " . " + 255 + " . " + masc(aux);
            
        } 
    }
}

function retornaDados(){
    
    if( (oct1>0) && (oct1<=127) ){
        resultado += "IP : " + retornaClasse(oct1) + "</br>";
        resultado += "Mascara : " + retornaMascara(-1, retornaClasse(oct1)) + "</br>";
        resultado += "Rede : " + oct1 + " . " + 0 + " . " + 0 + " . " + 0 + "</br>";
        resultado += "IP inicial da Rede : " + oct1 + " . " + 0 + " . " + 0 + " . " + 1 + "</br>";
        resultado += "IP final da Rede : " + oct1 + " . " + 255 + " . " + 255 + " . " + 254 + "</br>";
        resultado += "Broadcast : " + oct1 + " . " + 255 + " . " + 255 + " . " + 255 + "</br>";
        if(oct1==10){
            resultado += "IP reservado para rede interna" + "</br>";
        }else if(oct1==127){
            resultado += "IP de Loopback" + "</br>";
        }
    }else if( (oct1>=128) && (oct1<=191) ){
        resultado += "IP : " + retornaClasse(oct1) + "</br>";
        resultado += "Mascara : " + retornaMascara(-1, retornaClasse(oct1)) + "</br>";
        resultado += "Rede : " + oct1 + " . " + oct2 + " . " + 0 + " . " + 0 + "</br>";
        resultado += "IP inicial da Rede : " + oct1 + " . " + oct2 + " . " + 0 + " . " + 1 + "</br>";
        resultado += "IP final da Rede : " + oct1 + " . " + oct2 + " . " + 255 + " . " + 254 + "</br>";
        resultado += "Broadcast : " + oct1 + " . " + oct2 + " . " + 255 + " . " + 255 + "</br>";
        if( (oct1==172) && ( (oct2>=16) && (oct2<=31) )){
            resultado += "IP reservado para rede interna" + "</br>";
        }
    }else if( (oct1>=192) && (oct1<=223) ){
        resultado += "IP : " + retornaClasse(oct1) + "</br>";
        resultado += "Mascara : " + retornaMascara(-1, retornaClasse(oct1)) + "</br>";
        resultado += "Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 0 + "</br>";
        resultado += "IP inicial da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 1 + "</br>";
        resultado += "IP final da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 254 + "</br>";
        resultado += "Broadcast : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 255 + "</br>";
        if( (oct1==192) && (oct2==168) ){
            resultado += "IP reservado para rede interna" + "</br>";
        }
    }else if( (oct1>=224) && (oct1<=239) ){
        resultado += "IP : " + retornaClasse(oct1) + "</br>";
        resultado += "Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 0 + "</br>";
        resultado += "IP inicial da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 1 + "</br>";
        resultado += "IP final da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 254 + "</br>";
        resultado += "Broadcast : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 255 + "</br>";
    }else if( (oct1>=240) && (oct1<=255) ){
        resultado += "IP : " + retornaClasse(oct1) + "</br>";
        resultado += "Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 0 + "</br>";
        resultado += "IP inicial da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 1 + "</br>";
        resultado += "IP final da Rede : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 254 + "</br>";
        resultado += "Broadcast : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + 255 + "</br>";
    } 
}

function exibeRede() {
    
    var ip = document.getElementById("ip").value;
    var ips = ip.split(".");
    resultado = "";
    oct1 = parseInt(ips[0]);
    oct2 = parseInt(ips[1]);
    oct3 = parseInt(ips[2]);
    oct4 = parseInt(ips[3]);
    
    if( ((oct1<=0) || (oct2<0) || (oct3<0) || (oct4<0)) || ((oct1>255) || (oct2>255) || (oct3>255) || (oct4>255)) || ( (isNaN(oct1)) || (isNaN(oct2)) || (isNaN(oct3)) || (isNaN(oct4) ) ) ){
        resultado = "IP inválido";
    }else{
        if(oct4==0){
            resultado += "IP de Rede" + "</br>";
            retornaDados();
        }else if(oct4==255){
            resultado += "IP de Broascast" + "</br>";
            retornaDados();
        }else{
            resultado += "IP : " + oct1 + " . " + oct2 + " . " + oct3 + " . " + oct4 + "</br>";
            resultado += "IP Binário : " + oct1.toString(2) + " . " + oct2.toString(2) + " . " + oct3.toString(2) + " . " + oct4.toString(2) + "</br>";
            retornaDados();
        }   
    }
    
    oct1 = "";
    oct2 = "";
    oct3 = "";
    oct4 = "";
    document.getElementById("resultado").innerHTML = resultado;
}