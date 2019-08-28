# Desafio Mutant

Para executar a aplicação é necessário o Vagrant e o VirtualBox instalados.

## Execução:

Para iniciar a máquina virtual juntamente com os containers do docker executar:

```
vagrant up
```

Na primeira execução será pedido a permissão para instalar o plugin 'vagrant-docker-compose'.

Uma vez aceito, esperar o download e executar novamente:

```
vagrant up
```

Uma vez startado, é possivel acessar o Elastic Search pela porta padrão (9200), para realizar consultas.
O serviço no entanto demora alguns segundos para ser iniciado.

Por isso na aplicação Node foi implementado uma estratégia para só salvar os logs quando o serviço estiver de pé.

Depois que os logs forem salvos, a aplicação Node é terminada e não reiniciada (propositalmente), pois do contrário o salvamento será chamado indefinidamente até que a aplicação seja terminada manualmente ou de algum erro. 

## Testes

Os testes são executados automaticamente durante o build do dockerfile, dessa forma a aplicação só irá iniciar se todos os testes passarem.

Para executá-los manualmente: 

```
npm run test 
```