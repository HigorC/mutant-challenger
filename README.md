# Desafio Mutant

Repositório destinado ao desafio de implementação da Mutant.

## Execução:
A aplicação pode ser executada de duas formas:

1. Utilizando o Vagrant (necessário possuir o Vagrant e o VirtualBox instalados)
2. Utilizando o Docker (necessário possuir o Docker e o docker-compose instalados)

### Vagrant

Para iniciar a máquina virtual juntamente com os containers do docker executar:

```
vagrant up
```

Na primeira execução será pedido a permissão para instalar o plugin 'vagrant-docker-compose'.

Uma vez aceito, esperar o download e executar novamente:

```
vagrant up
```

### Docker

Para iniciar a aplicação pelo docker, navegar até a pasta /app e executar:

```
docker-compose up -d
```

## Rotas/Saída

A aplicação disponibiliza uma rota para cada exercício pedido, totalizando assim 3 rotas. Cada rota processa o resultado, salva-o no Elastisearch e retorna o resultado processado.

Rotas disponíveis:

1. http://localhost:8080/exercise/1

2. http://localhost:8080/exercise/2

3. http://localhost:8080/exercise/3


## Elasticsearch

Uma vez startado, é possivel acessar o Elastic Search pela porta padrão (9200), para realizar consultas.
O serviço no entanto demora alguns segundos para ser iniciado.

## Testes

Os testes são executados automaticamente durante o build do dockerfile, dessa forma a aplicação só irá iniciar se todos os testes passarem.

Para executá-los manualmente: 

```
npm run test 
```