# Sistema com arquitetura n-tier

## Core Domain

A camada mais interna do sistema é onde estão implementadas as "business rules" que, diferentemente do "business logic", representa os aspectos intrínsecos do negócio, atividade ou sistema. Geralmente as regras de negócio existem no mundo das ideias mesmo sem a representação da mesma por um sistema.

O "business rule" geralmente carrega ou representa a modelagem de uma CLASSE BASE ou ENTIDADE BASE, pra onde todos os outros componentes irão convergir direta ou indiretamente.
Exemplo:

    Um software de cadastro, atualização e gerenciamento de funcionários de uma empresa.

No caso acima, a entity base do software seria os funcionários e sobre eles incidirão e convergirão todas as outras classes que tratam sobre salário, horário/agenda, benefícios, regras de acesso às dependências internas, impostos incidentes, etc. 
Todas essas regras internas inerentes àquele negócio específico, é chamado de 'business logic'.



Design Patterns mais simples

Abstract Factory (pág. 95)
Adapter (140)xii
Composite (160)
Decorator (170)
Factory Method (112)
Observer (274)
Strategy (292)
Template Method (301

