# nodeApi-noFrameworks

## Proposal:
To build a complete Web JavaScript API with no frameworks, using:
### *only native features of NodeJS & CommonJS.
### *HTTP's module methods of NodeJS

object-oriented design
architectural pattern layers --> n-tier***

Four of the most common layers:

    1) Presentation tier/UI tier
    
____________________________________________________________________________   
    
    2) Service tier/Application tier/GRASP Controller tier
        
        * Peripheral content not related to the core business data, such as the HTML that defines the colors, appearance, background image, and navigational structure of the site
        
        * Generic error-handling code (e.g., which displays the HTTP Error Code 500 page)
        
        * Initialization code that runs when the web server starts up the site, which sets up the system
        
        * Monitoring infrastructure to make sure all the parts of the site are working properly (e.g., the billing system is available)
        
        * Generic code for making network connections, transmitting objects to the database, parsing user input via HTTP POST events, etc.


        Middleware services provide a more functional set of application programming interfaces to allow an application to:

        * Locate transparently across the network, thus providing interaction with another service or application
        * Filter data to make them friendly usable or public via anonymization process for privacy protection (for example)
        * Be independent from network services
        * Be reliable and always available
        * Add complementary attributes like semantics
  
        Types of middleware:
        
        MESSAGE-ORIENTED MIDDLEWARE
        transactions or event notifications are delivered between disparate systems or components by way of messages, often via an enterprise messaging system

        ENTERPRISE MESSAGING
        facilitates message passing between disparate systems or components in standard formats, often using XML, SOAP or web services



____________________________________________________________________________
    
    3) Business logic/Domain tier
        3.1) Provides interaction rules between business objects
        3.2) Enforces routes and http methods
        3.3) Model real-life business objects(accounts, loans, itineraries, inventories)
        3.4) Handle of the data workflow between parts
        
        Obs: business logic != business rules
        
        * Business logic is procedural - (how)
        * Business rules are declarative (what)
        
        ** Business logic is the portion of an enterprise system which determines how data is transformed or calculated, and how it is routed to people or software (workflow).

        ** Business rules are formal expressions of business policy. Anything that is a process or procedure is business logic, and anything that is neither a process nor a procedure is a business rule.
            * Specific formats that the visitor's address, email address, and credit card information must follow.

            * A specific communication protocol for talking to the credit card network
 
____________________________________________________________________________    
    
    4) Data acess/persistence tier

____________________________________________________________________________

Usual convention --> application/service layer is considered a sublayer
of business layer




Camadas padrão N-tier

Uso do padrão 'repository' para acesso a dados

Uso do padrão factory para geração de instância



Projeto 

webapi
    src
        index.js ------>
        entities ------>    entidades do sistema
        
        
        repositories -->    gerenciar e manipular o banco de dados com 
                            métodos de criação, exclusão, atualização
                            leitura, escrita. Constructor + métodos 
                            utilitários privados

        services ------>    business logic, resposável pelas regras de negócio
                            rota dos dados. Receber informação e se comunicar
                            com a repositories(acima)
        
        factories ----->    generate instances for dependency injection pattern
                            Instancia as classes do 'services' e do 'repositories'

    database
        postgresQL --> persiste os dados
        relational
    
    static
        html
        css
        js
    
    nodeModules
        npm --> ...
    
    test
        Unit
        E2E
        Benchmark
        Behavior
            Jest.js
    
    .env
    .devenv
    .gitignore
        
