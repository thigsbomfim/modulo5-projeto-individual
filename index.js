const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const lista = [];

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





