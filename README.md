# AgroPreço — demonstração conceitual

Landing page estática para mostrar como indicadores regionais de preços agrícolas **poderiam** ser apresentados a partir de registros fiscais de comercializações. Os três polos, preços e séries exibidos são inteiramente fictícios. O site não consulta notas fiscais nem fornece cotações de mercado.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta com `python3 -m http.server 8000` e acesse `http://localhost:8000`.

## Publicar

O repositório usa GitHub Pages com publicação pela branch `main`, pasta `/` (raiz). Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, branch **main** e pasta **/(root)**. A página fica em <https://jjdsnt.github.io/agro_preco/>. Alterações enviadas para `main` atualizam o site automaticamente.

## Transparência

Uma implementação com dados reais exigiria acesso legítimo aos documentos fiscais, base legal e divulgação agregada que respeite o sigilo. Esta POC não implementa essa etapa.
