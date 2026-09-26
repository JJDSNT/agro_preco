# AgroPreço — observatório de preços agrícolas (prova de conceito)

O **AgroPreço** é uma demonstração visual de uma ideia: usar registros fiscais de comercializações para produzir **indicadores regionais dos preços efetivamente praticados** em polos agrícolas. A [página publicada](https://jjdsnt.github.io/agro_preco/) permite explorar três polos e três produtos com números e séries **inteiramente simulados**. Ela não consulta notas fiscais, não fornece cotações de mercado e não é um serviço oficial.

## De onde veio a ideia

A inspiração é o [Preço da Hora Bahia](https://precodahora.ba.gov.br/), serviço da Secretaria da Fazenda da Bahia. Segundo o [site oficial](https://precodahora.ba.gov.br/sobre) e suas [perguntas frequentes](https://precodahora.ba.gov.br/faq), ele usa informações de NF-e e NFC-e emitidas no estado para permitir a consulta de preços de produtos comercializados por estabelecimentos. As [condições de uso](https://precodahora.ba.gov.br/condicoesdeusoetermos) esclarecem que são preços registrados em vendas, não anúncios ou promoções.

O Preço da Hora **demonstra a viabilidade técnica da mecânica geral**: transformar registros fiscais eletrônicos em informação de preços acessível ao público. O AgroPreço pergunta se uma lógica semelhante poderia servir para acompanhar o mercado agrícola. Isso exigiria uma solução própria; a existência do Preço da Hora não comprova, por si só, disponibilidade, cobertura, autorização ou viabilidade jurídica dos dados necessários ao AgroPreço.

## O que existe e o que propomos

| | Preço da Hora Bahia, hoje | AgroPreço, proposta ilustrada aqui |
| --- | --- | --- |
| Finalidade | Ajudar o consumidor a comparar preços de produtos comercializados na Bahia. | Ajudar a entender preços praticados de produtos agrícolas por polo regional. |
| Apresentação | Consulta de produtos com preços recentes por estabelecimento e localização. | Indicadores agregados por produto, polo e período, com evolução temporal. |
| Base | NF-e e NFC-e de vendas realizadas, conforme a Sefaz-BA. | Registros fiscais de comercializações agrícolas, **somente se houver acesso legítimo e tratamento adequado**. |
| Situação | Serviço público em operação. | Apenas uma POC de interface com dados fictícios; não existe integração com a Sefaz ou com o Preço da Hora. |

Um indicador agrícola precisaria, entre outras etapas, padronizar produtos e unidades, tratar duplicidades, definir polos e períodos e ponderar valores pelas quantidades. Sua publicação dependeria de base legal, autorização e agregação que preserve o sigilo fiscal e comercial. A cobertura das transações e a representatividade dos resultados também precisariam ser avaliadas antes de qualquer uso real.

## Executar localmente

Abra `index.html` no navegador ou, nesta pasta, execute `python3 -m http.server 8000` e acesse `http://localhost:8000`. O projeto é estático: HTML, CSS, JavaScript e dados simulados locais, sem instalação de dependências.

## Publicação

O repositório usa GitHub Pages a partir da branch `main`, pasta `/` (raiz). Em **Settings → Pages → Build and deployment**, a origem deve estar em **Deploy from a branch**, branch **main** e pasta **/(root)**. Alterações enviadas para `main` atualizam <https://jjdsnt.github.io/agro_preco/>.
