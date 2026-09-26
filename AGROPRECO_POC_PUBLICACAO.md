# AgroPreço — Prova de conceito para divulgação

## Missão
Crie uma demonstração visual, publicável e responsiva do **AgroPreço — Observatório de Preços Agrícolas**. O propósito é comunicar uma ideia, não lançar um serviço de consulta: aplicar aos polos agrícolas a mecânica do Preço da Hora Bahia, transformando registros fiscais de comercializações em indicadores regionais dos preços efetivamente praticados.

**Mensagem central:** "E se pudéssemos conhecer o preço realmente praticado em cada polo agrícola a partir das notas fiscais eletrônicas?"

## Entrega
Uma **landing page interativa de página única**, estática, com aparência profissional, preparada para publicar na web e demonstrar em vídeo ou capturas de tela. Todo número exibido será **fictício e identificado como simulação**. Não coletar nem consultar notas fiscais reais.

## Experiência mínima
1. **Abertura:** nome AgroPreço, subtítulo "Do documento fiscal ao preço praticado no campo", breve explicação e selo visível "Demonstração conceitual — dados simulados".
2. **Mapa do Brasil:** destacar três polos ilustrativos — Oeste da Bahia (BA), Sorriso (MT) e Rio Verde (GO). Permitir clicar em um polo para ver os dados correspondentes. Se um mapa geográfico exigir dependências desproporcionais, usar uma ilustração SVG do Brasil com pontos interativos.
3. **Três produtos:** seletor de soja, milho e algodão. Mostrar para o polo selecionado um preço ilustrativo, a unidade correspondente (por exemplo, R$/saca de 60 kg para soja e milho; unidade explicitamente definida para algodão), a data simulada e um pequeno gráfico de evolução fictícia. Mostrar volume apenas se for útil à clareza visual.
4. **Como funcionaria:** um diagrama simples e animado em três etapas: nota fiscal eletrônica → consolidação e tratamento das transações → preço médio por produto e polo. Explicar em uma frase que preços seriam calculados ponderando valores pelas quantidades e tratando duplicidades e diferenças de unidade.
5. **Rodapé:** nota de transparência: "Todos os preços, volumes e séries apresentados são fictícios. Este site demonstra uma possibilidade técnica e não fornece cotações de mercado." Indicar que acesso e divulgação de dados fiscais reais dependeriam de base legal, autorização e agregação que preserve o sigilo.

## Direção visual
Visual moderno e limpo, com linguagem cartográfica/agro e destaque para o mapa e os números. Priorizar uma boa experiência em celulares e uma primeira tela impactante para divulgação em redes sociais. Textos curtos, sem aparência de painel administrativo complexo. A interface deve estar em português brasileiro.

## Implementação
- Preferir **Vite + React + TypeScript**, CSS simples ou Tailwind, com dados simulados em arquivo local JSON/TS. Não adicionar servidor, banco de dados, login, APIs, upload de XML, processamento fiscal, filtros avançados nem painel de administração.
- Se já existir um repositório de destino, respeitar sua estrutura; caso contrário, iniciar um projeto mínimo com README e instruções de execução/publicação estática.
- Componentes sugeridos: Hero, MapaPolos, SeletorProduto, ResumoPreco, GraficoSimulado, ComoFunciona, AvisoSimulacao.
- Garantir que todos os estados de produto e polo apresentem valores e unidades coerentes e que o aviso de simulação permaneça visível.
- Preparar metadados Open Graph, título e descrição para compartilhamento, além de uma imagem social simples se viável.

## Critérios de aceite
- A página abre localmente e pode ser publicada como site estático.
- Clicar nos polos e trocar produtos atualiza preços e gráfico simulados.
- O visitante entende o conceito em até 30 segundos, sem ler documentação.
- Não há qualquer preço apresentado como real, atual ou proveniente da Sefaz.
- Existe README curto explicando a tese, o caráter ilustrativo e como executar/publicar.

## Fora do escopo
Integração com Sefaz ou Preço da Hora, acesso a dados reais, captura de notas fiscais, identificação de produtores, estimativas de representatividade, cálculo de preços oficiais, cadastro, relatórios, infraestrutura de produção e aplicativo móvel.

## Texto de apoio para divulgação
**AgroPreço: e se as notas fiscais mostrassem quanto se paga de verdade nos polos agrícolas?**

A proposta é adaptar ao agronegócio a lógica do Preço da Hora: usar registros de transações para calcular indicadores de preços por produto e região, em vez de depender apenas de preços anunciados. Esta demonstração utiliza exclusivamente dados simulados para ilustrar a experiência. Uma implementação com dados reais exigiria acesso legítimo aos documentos fiscais e divulgação agregada que respeite o sigilo.
