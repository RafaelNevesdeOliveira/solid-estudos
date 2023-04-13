# Projeto API de Usuários com SOLID
Este projeto implementa uma API simples para criar e listar usuários, aplicando os princípios SOLID. A seguir, apresentamos uma breve descrição de cada camada e como os princípios SOLID são aplicados.

S - Single Responsibility Principle (Princípio da Responsabilidade Única)
O - Open/Closed Principle (Princípio Aberto/Fechado)
L - Liskov Substitution Principle (Princípio da Substituição de Liskov)
I - Interface Segregation Principle (Princípio da Segregação de Interfaces)
D - Dependency Inversion Principle (Princípio da Inversão de Dependências)

## 1 .Rotas

Rotas (Routes)
As rotas são responsáveis por receber as requisições HTTP e encaminhá-las para os controladores apropriados. Nesta camada, são aplicados os seguintes princípios SOLID:

**Single Responsibility Principle (SRP): Cada arquivo de rota é responsável por definir as rotas para um único recurso (neste caso, usuários)**

[Rota] (src/routes/userRoutes.ts)


## 2 .Controller

Os controladores lidam com a lógica de negócios básica, como processar os dados da requisição e chamar os serviços apropriados. Eles aplicam os princípios SOLID da seguinte forma:

**Single Responsibility Principle (SRP): Cada controlador é responsável por lidar com um único recurso (neste caso, usuários)**
**Dependency Inversion Principle (DIP): Os controladores dependem de abstrações (como serviços) em vez de implementações concretas**

[Controller] (src/controllers/UserController.ts)


## 3. Services

Os serviços contêm a lógica de negócios principal e são responsáveis por interagir com modelos de dados e outros serviços, se necessário. Os princípios SOLID aplicados nesta camada incluem:

**Single Responsibility Principle (SRP): Cada serviço é responsável por lidar com um único recurso (neste caso, usuários).**
**Open/Closed Principle (OCP): Os serviços podem ser facilmente estendidos para adicionar novas funcionalidades sem modificar o código existente.**
**Dependency Inversion Principle (DIP): Os serviços dependem de abstrações (como interfaces ou classes abstratas) em vez de implementações concretas.**

[Service] (src/services/UserService.ts)


## 3. Models

Os modelos representam as entidades do domínio e são responsáveis por armazenar a estrutura de dados. Eles aplicam os princípios SOLID da seguinte forma

**Single Responsibility Principle (SRP): Cada modelo é responsável por representar uma única entidade do domínio (neste caso, um usuário)**

[Model] (src/models/User.ts)
