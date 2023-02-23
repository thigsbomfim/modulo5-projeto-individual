# Ordenador de propriedades CSS

_Este é um programa em Node.js que ordena as propriedades CSS inseridas pelo usuário em ordem alfabética._

## Instalação

`1.` Certifique-se de que o Node.js está instalado na sua máquina.

`2.` Clone este repositório ou faça o download dos arquivos.

`3.` Abra o terminal e navegue até o diretório onde os arquivos foram salvos.


## Passo a passo:

`1.` Importe o módulo readline e crie uma interface para leitura e escrita;

````
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
````

`2.` Crie um array vazio lista que irá armazenar as propriedades do CSS;

````
const lista = [];
````

`3.` Declare uma função autoexecutável chamada propiedadesCSS;

`4.` Dentro da função propiedadesCSS, use o método question da biblioteca readline para fazer uma pergunta ao usuário;

`5.` A pergunta exibe uma mensagem para o usuário digitar uma propriedade do CSS e informa que para encerrar a execução deve digitar "stop";

`6.` Quando o usuário digita uma resposta, a função de callback passada como segundo argumento para o método question é executada;

`7.` Se a resposta do usuário for "stop", a função exibe as propriedades do CSS em ordem alfabética e encerra a execução;

`8.` Se a resposta do usuário não for "stop", a propriedade é adicionada ao array lista e a função propiedadesCSS é chamada novamente para fazer a próxima pergunta.

````
(function propiedadesCSS(){

    readline.question(`\nPara encerrar a execução digite "stop"\nInsira uma propriedade do CSS -> `, (valor) => {
        
        if(valor.toLowerCase() === 'stop'){
            
            console.log('\nPropiedades Ordenadas: \n')
            lista.sort().forEach((props)=> console.log(`- ${props}`))
            
            readline.close()
        }
        else{
            lista.push(valor)
            propiedadesCSS()
        }

    })

})()
````


## Como executar o código 

`1.` No terminal, execute o comando `node index.js` para iniciar o programa.

`2.` Insira as propriedades CSS desejadas. Para encerrar a execução, digite "stop".

`3.` O programa exibirá as propriedades em ordem alfabética.


## Saída no terminal

````
$ node index.js

Para encerrar a execução digite "stop"
Insira uma propriedade do CSS -> background-color
Insira uma propriedade do CSS -> font-size
Insira uma propriedade do CSS -> color
Insira uma propriedade do CSS -> border-radius
Insira uma propriedade do CSS -> stop

Propiedades Ordenadas:

- background-color
- border-radius
- color
- font-size 
````


## Licença

_Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes._
