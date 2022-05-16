function ativ_01_btn_01(){
    window.alert("Você precionou o botão 1!");
}

function ativ_01_btn_02(){
    window.alert("Você precionou o botão 2!");
}

function ativ_01_btn_03(){
    window.alert("Você precionou o botão 3!");
}

function ativ_03(){
    var num= Number(window.prompt ("Informe um número: "));
    var antecessor= num - 1;
    var sucessor= num + 1;

    window.alert("O número informado pelo usuário foi "+num+ ".Antes do número "+num+ ",temos o número "+antecessor+ ".Após o número " +num+ ",temos o número "+sucessor);
}

function ativ_06(){
    var Valor_reais= Number(window.prompt("Informe o valor em R$ "));
    var Cotacao_dolar= Number(window.prompt("Informe a cotação do dólar: "));

    var valor_dolar=Valor_reais/Cotacao_dolar;

    document.getElementById("resultado").innerHTML="Você tem R$ "+Valor_reais.toFixed(2)+".A cotação do dólar é  "+Cotacao_dolar+ ".Você tem U$ " +valor_dolar.toFixed(2);
}

function ativ_02_btn_01(){
        var nome=window.prompt ("Informe seu nome: ");
        var idade=Number(window.prompt ("Informe sua idade: "));
        window.alert("Acabei de conhecer " +nome+  ",que tem "+idade+" anos de idade.");
        
    }

function ativ_04_btn_01(){
    // //>Escreva uma função que solicite ao usuário o nome de um produto, o preço desse produto e o valor
    // em dinheiro entregue ao vendedor. Ao clicar em um botão, deve ser mostrada uma mensagem
    // baseada no seguinte exemplo: “Você comprou um produto (mouse) por R$ 185,00 e entregou ao
    // vendedor R$ 200,00 em dinheiro. Você vai receber R$ 15,00 de troco. Volte sempre!”
    var nome_produto=window.prompt ("Informe o nome do produto: ");
    var preco=Number(window.prompt ("Informe o preço do produto "));
    var dinheiro_entregue=Number(window.prompt ("Informe o valor entregue ao vendedor "));
    var troco=dinheiro_entregue-preco;

    window.alert("Você comprou um produto "+nome_produto+  " por R$ "+preco+  " e entregou ao vendedor R$ " +dinheiro_entregue+ " em dinheiro.Você vai receber R$ "+troco+ " de troco. Volte sempre!");
    
}
function ativ_05_btn_01(){
    var C=window.prompt ("informe a temperatura em Celsius: ");
    var F=(C * 9/5) + 32;
    window.alert(" A temperatura em ºC (Celsius)"+C+" convertida em ºF (Fahrenheit) é: "+F);
    
  }

  function ativ_07(){
    // Escreva uma função que solicite ao usuário o nome e o preço de um produto. Ao clicar em um botão,
    // deve ser mostrada uma mensagem baseada no seguinte exemplo: “Você comprou um produto
    // (mouse) por R$ 185,00 e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ 166,50
    // pelo seu produto. Volte sempre!”. Essa mensagem deve ser apresentada em um parágrafo no
    // documento HTML
    var nome= window.prompt("Informe o nome do produto: ");
    var preco= Number(window.prompt("Informe o preço do produto: "));
    var valor_desconto=preco*(10/100);
    var desconto=preco-valor_desconto;


    document.getElementById("resultado").innerHTML="Você comprou um produto " +nome+ " por R$ " +preco+ " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ "+desconto+ " pelo seu produto. Volte sempre!"
  }
    function ativ_08(){
        var tempo=Number(window.prompt("Informe o tempo de viagem: "));
        var vm= Number(window.prompt("Informe a velocidade média: "));
        d=vm*tempo;
        var qtde_combustivel=d/12;
        document.getElementById("resultado").innerHTML="Você percorreu  " +vm+ " km/h em " +tempo+ "h.A distância percorrida foi de " +d+ "km/h,foram gastos "+qtde_combustivel+ " litros de combustivel."
        
    }
    var c=0;
     function ativ_09_bt_01(){
       
         c++;
       
        document.getElementById("resultado").innerHTML="O contador está com "+c+" cliques";
     }
     function ativ_09_bt_02(){
         c=0
         document.getElementById("resultado").innerHTML="O contador está com "+c+" cliques";
     }
     function ativ_10_bt_01(){
        var num=Number(window.prompt("Informe um número: "));
        var quadrado= Math.pow(num,2);
        var cubo= Math.pow(num,3);
        var raizquadrada=Math.sqrt(num);
        var raizcubica=Math. cbrt(num);


        document.getElementById("resultado").innerHTML="O número "+num+"<br> Ao quadrado é: "+quadrado+"<br> ao cubo: "+cubo+"<br>Raiz Quadrada: "+raizquadrada+"<br>Raiz Cúbica: "+raizcubica;
     }