import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const cervejaData = [
  {
    "nomeCerveja": "Adriática",
    "descriCerveja": "A Cerveja Adriática 600ml foi criada pelo alemão Henrique Thielen, um visionário cervejeiro do início do século XX. Ela teve seu nome em homenagem à cervejaria que traduz toda uma era de tradição passada de pai para filho. Hoje, conhecida como a irmã mais velha da Original.",
    "valorIBU": 9.50,
    "teorAlcoolico": 4.90,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/fyjpjpuv2k1f53cwl2iw.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": []
  },
  {
    "nomeCerveja": "Andes",
    "descriCerveja": "Puro malte argentino inspirado no frescor das Cordilheiras dos Andes. Cerveja mais fresca, inspirada nas cordilheiras. Ingredientes argentinos: malte e lúpulo argentinos.",
    "valorIBU": 12.00,
    "teorAlcoolico": 4.80,
    "corpo": "(1)",
    "tempIdeal": "",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/andes350ml_0.png.webp?itok=EWbV51KC",
    "tamanhosEmbalagem": ["350ml", "355ml", "600ml"],
    "informacoesNutricionais": [
      {
        "nutrientName": "Calorias",
        "nutrientValue": "39 kcal / Porção 100ml"
      },
      {
        "nutrientName": "Carboidratos",
        "nutrientValue": "2,7 g / Porção 100ml"
      }
    ],
    "harmonizacoes": ["Queijos leves"]
  },
  {
    "nomeCerveja": "Beck's",
    "descriCerveja": "Beck’s é uma legítima German Lager Puro Malte, que segue à risca a lei da pureza da cerveja alemã desde 1873. Seu IBU (unidade internacional de amargor) é 20. O resultado é uma cerveja de amargor intenso, sabor marcante e excepcional pureza.Ela é provocante, cheia de personalidade e com um sabor característico e único. A cerveja alemã mais vendida no mundo.",
    "valorIBU": 20.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "GERMAN PILSNER",
    "mainImage": "https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/becksln.png.webp?itok=n2JXtr2i",
    "tamanhosEmbalagem": ["330ml", "350ml", "600ml"],
    "informacoesNutricionais": [
      {
        "nutrientName": "Calorias",
        "nutrientValue": "80 kcal / Porção de 200ml"
      },
      {
        "nutrientName": "Carboidratos",
        "nutrientValue": "5,2 g / Porção de 200ml"
      }
    ],
    "harmonizacoes": ["Pratos Tradicionais Alemães", "Peixes", "Frutos do Mar", "Saladas"]
  },
  {
    "nomeCerveja": "Berrió do Piauí",
    "descriCerveja": "Produzida e vendida somente no Piauí, ideal para aliviar o B-R-O-BRÓ sem fim do estado. Leva na receita caju plantado e colhido por pequenos produtores do estado, adquirido sem intermédios gerando renda para as regiões menos favorecidas e diminuindo o desperdício do insumo.",
    "valorIBU": 7.00,
    "teorAlcoolico": 4.40,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Lúpulo", "Água", "Malte", "Milho", "Suco de caju"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/z9kqfbfykazjnuso6w5r.png",
    "tamanhosEmbalagem": ["350ml", "600ml"],
    "informacoesNutricionais": [
      {
        "nutrientName": "Calorias",
        "nutrientValue": "39 kcal / Porção de 100ml"
      },
      {
        "nutrientName": "Carboidratos",
        "nutrientValue": "3,4 g / Porção de 100ml"
      }
    ],
    "harmonizacoes": ["Paçoca", "Arroz", "Capote frito"]
  },
  {
    "nomeCerveja": "Bohemia Puro Malte",
    "descriCerveja": "Criada em 1853 pelo alemão Henrique Kremer, Bohemia é a primeira cerveja do Brasil. Produzida com matéria-prima importada desde sua primeira garrafa, ela é indispensável no copo de quem entende de cerveja.",
    "valorIBU": 9.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/PRODUTOS_2.png.webp?itok=awJin9z7",
    "tamanhosEmbalagem": ["990ml", "600ml", "473ml", "355ml", "350ml", "300ml", "269ml"],
    "informacoesNutricionais": [
      {
        "nutrientName": "Calorias",
        "nutrientValue": "40 kcal / Porção 100ml"
      },
      {
        "nutrientName": "Carboidratos",
        "nutrientValue": "2,7 g / Porção 100ml"
      }
    ],
    "harmonizacoes": ["Aromas florais", "Pratos embutidos", "Saladas"]
  },
  {
    "nomeCerveja": "Brahma Chopp",
    "descriCerveja": "A referência do sabor de cerveja no Brasil desde 1888, a Brahma Lager é uma cerveja saborosa e balanceada, com o sabor autêntico de cerveja brasileira, com espuma cremosa e persistente, amargor presente e ligeiramente encorpada.",
    "valorIBU": 10.00,
    "teorAlcoolico": 4.80,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Milho", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/mwpf7bbjfx7oox8jeimq.png",
    "tamanhosEmbalagem": ["269ml", "300ml", "350ml", "355ml", "473ml", "550ml", "600ml", "1L"],
    "informacoesNutricionais": [
      {
        "nutrientName": "Calorias",
        "nutrientValue": "41 kcal / Porção 100ml"
      },
      {
        "nutrientName": "Carboidratos",
        "nutrientValue": "3,4 g / Porção 100ml"
      }
    ],
    "harmonizacoes": ["Queijos Pouco Condimentados", "Saladas", "Frutos do Mar", "Petiscos Fritos"]
  },
  {
    "nomeCerveja": "Budweiser",
    "descriCerveja": "O processo de produção da Budweiser é diferenciado, por utilizar lascas de Beechwood (madeira especial) durante os processos de fermentação e maturação. O resultado é um cerveja de sabor único e com equilíbrio perfeito: marcante no início e suave no final.",
    "valorIBU": 10.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/gpa9uqzyora0c350zczy.png",
    "tamanhosEmbalagem": ["269ml", "330ml", "350ml", "410ml", "473ml", "550ml", "600ml", "990ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Arroz", "Hambúrguer", "Presunto", "Mix de castanhas"]
  },
  {
    "nomeCerveja": "Caracu",
    "descriCerveja": "Caracu, a cerveja preta FORTE E GOSTOSA, foi lançada em 1899. Hoje uma das marcas mais tradicionais do Brasil, Caracu é conhecida por seu sabor encorpado e sua energia, possui aroma de malte torrado, que faz lembrar café. E sua fama de ser uma cerveja forte não é à toa. Por não ser filtrada, Caracu é mais nutritiva, contém levedura e proteínas.",
    "valorIBU": 22.00,
    "teorAlcoolico": 5.40,
    "corpo": "(1)",
    "tempIdeal": "8-12 °C",
    "ingredientes": ["Água", "Malte", "Milho", "Lúpulo", "Corante de caramelo III INS 150c"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Bock",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/gmdztykixwemgtywyysd.png",
    "tamanhosEmbalagem": ["350ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Carne de porco", "Feijoada", "Queijos semiduros", "Massa ao molho bolonhesa"]
  },
  {
    "nomeCerveja": "Cerveja Beira Rio",
    "descriCerveja": "Fabricada desde 1929, a Beira Rio é uma cerveja puro malte de qualidade superior. Sua qualidade é reconhecida e premiada, sendo a preferida dos brasileiros nas grandes celebrações.",
    "valorIBU": 10.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/uug8qyljrfwuhkgswfth.png",
    "tamanhosEmbalagem": ["350ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Amendoim", "Queijo mineiro", "Petiscos fritos"]
  },
  {
    "nomeCerveja": "Cerveja Feminista",
    "descriCerveja": "Criada pela cervejaria Ambev, é uma homenagem a todas as mulheres que batalham diariamente por seus direitos e reconhecimento. Possui um teor alcoólico leve e um sabor refrescante.",
    "valorIBU": 12.00,
    "teorAlcoolico": 4.20,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/cyxkfsujg4yhyabm5enq.png",
    "tamanhosEmbalagem": ["350ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Pratos leves", "Petiscos", "Saladas"]
  },
  {
    "nomeCerveja": "Cerveja Micheladas",
    "descriCerveja": "Micheladas, a cerveja com gosto de limão e sal na boca, agora em garrafa. Uma cerveja única e deliciosa.",
    "valorIBU": 7.00,
    "teorAlcoolico": 3.10,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/oatp4rjyvtmb0ftbswcy.png",
    "tamanhosEmbalagem": ["355ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Frutos do Mar", "Petiscos fritos"]
  },
  {
    "nomeCerveja": "Cerveja Tcheca",
    "descriCerveja": "A Pilsen Premium é uma cerveja de baixa fermentação, leve e saborosa. Feita com os melhores ingredientes e seguindo rigorosos padrões de qualidade, é uma das cervejas mais apreciadas do Brasil.",
    "valorIBU": 10.00,
    "teorAlcoolico": 4.50,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/u6zvovdsrsieo7vtxmcf.png",
    "tamanhosEmbalagem": ["350ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Frango assado", "Churrasco", "Hambúrguer"]
  },
  {
    "nomeCerveja": "Colorado Indica",
    "descriCerveja": "A Colorado Indica é uma cerveja premium com teor alcoólico de 7,5% e IBU de 60. Criada com a intenção de ser uma bebida democrática, é agradável para diferentes paladares.",
    "valorIBU": 60.00,
    "teorAlcoolico": 7.50,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "India Pale Ale",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/jrtgkncgx6ydxsmkeb7v.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Hambúrguer", "Comida mexicana"]
  },
  {
    "nomeCerveja": "Devassa Litrão",
    "descriCerveja": "A Devassa Litrão é a cerveja certa para qualquer ocasião. Uma cerveja puro malte com 5,2% de teor alcoólico e IBU de 10, ela é perfeita para quem busca sabor e qualidade em um único produto.",
    "valorIBU": 10.00,
    "teorAlcoolico": 5.20,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/zrpfapv7nhst4b0ieujr.png",
    "tamanhosEmbalagem": ["1L"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Pratos condimentados", "Comida japonesa"]
  },
  {
    "nomeCerveja": "Eisenbahn 5",
    "descriCerveja": "A Eisenbahn 5 é uma cerveja leve, dourada e refrescante, fabricada com malte, lúpulo, água e levedura. Seu teor alcoólico é de 5%, tornando-a perfeita para qualquer ocasião.",
    "valorIBU": 5.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/u3e3bjbn0wbkrwwlmfdh.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Queijo", "Salmão grelhado", "Comida japonesa"]
  },
  {
    "nomeCerveja": "Eisenbahn Pilsen",
    "descriCerveja": "A Pilsen é uma cerveja refrescante, dourada e de baixa fermentação, com aroma discreto e paladar marcante. Seu teor alcoólico é de 4,8%, tornando-a perfeita para o dia a dia.",
    "valorIBU": 5.00,
    "teorAlcoolico": 4.80,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Pilsen",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/ht9mjzz6yymbrjxlcpgc.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Peixes grelhados", "Comida japonesa"]
  },
  {
    "nomeCerveja": "Falcon",
    "descriCerveja": "Cerveja leve e refrescante, perfeita para momentos de descontração. Com teor alcoólico de 4,8% e amargor suave, é uma ótima opção para quem busca uma cerveja fácil de beber.",
    "valorIBU": 9.00,
    "teorAlcoolico": 4.80,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Milho", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/yhbzff1bgozqnvppm3qu.png",
    "tamanhosEmbalagem": ["350ml", "355ml", "600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Comida japonesa"]
  },
  {
    "nomeCerveja": "FAXE",
    "descriCerveja": "Faxe Extra Strong é uma cerveja dinamarquesa puro malte e de baixa fermentação. Com 10% de teor alcoólico, ela é encorpada e intensa, ideal para quem busca uma experiência única de sabor.",
    "teorAlcoolico": 10.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/faxe500ml.png.webp?itok=1ThXw-bP",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos condimentados", "Comida mexicana", "Comida indiana"]
  },
  {
    "nomeCerveja": "GROSELHA AZUL",
    "descriCerveja": "Feita com frutas colhidas a mão nas montanhas do Himalaia, a Grozelha Azul é uma cerveja frutada e refrescante, perfeita para os dias quentes do verão. Com teor alcoólico de 4,5% e baixo amargor, agrada a todos os paladares.",
    "teorAlcoolico": 4.50,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo", "Frutas"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Fruit Beer",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/vtkbhjwzktizlqadunoh.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos leves", "Sobremesas frutadas"]
  },
  {
    "nomeCerveja": "Heineken",
    "descriCerveja": "Heineken é uma cerveja lager com sabor refrescante e notas de lúpulo. Com teor alcoólico de 5%, é uma bebida leve e versátil, perfeita para qualquer ocasião.",
    "valorIBU": 23.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/tuiv7nkoio6vn4w6e1lm.png",
    "tamanhosEmbalagem": ["330ml", "350ml", "600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Pratos condimentados", "Sushis", "Petiscos"]
  },
  {
    "nomeCerveja": "Leffe",
    "descriCerveja": "A Leffe é uma autêntica cerveja belga, produzida com maltes claros, fermento único e lúpulo perfumado. Seu sabor é intenso e equilibrado, com notas frutadas e toques de especiarias.",
    "valorIBU": 20.00,
    "teorAlcoolico": 6.60,
    "corpo": "(2)",
    "tempIdeal": "6-10 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo", "Levedura"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Belgian Strong Ale",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/wqehfclswgcyenqbtl5b.png",
    "tamanhosEmbalagem": ["330ml", "750ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Queijos maduros", "Frutos do mar", "Sobremesas"]
  },
  {
    "nomeCerveja": "Original",
    "descriCerveja": "A Cerveja Original 600ml foi a primeira cerveja lançada pela Cervejaria Bohemia, em 1853. Ela é a pioneira, a que desbravou o caminho das artesanais no Brasil e abriu o apetite dos brasileiros para uma cerveja mais saborosa e autêntica.",
    "valorIBU": 10.00,
    "teorAlcoolico": 5.00,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/crnb3i2vvngkrcny0jv5.png",
    "tamanhosEmbalagem": ["600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Pratos condimentados", "Churrasco", "Queijo Gouda"]
  },
  {
    "nomeCerveja": "Skol",
    "descriCerveja": "A Skol é uma cerveja puro malte, com teor alcoólico de 4,7% e baixo amargor. Sua receita exclusiva garante leveza e refrescância incomparáveis.",
    "valorIBU": 7.00,
    "teorAlcoolico": 4.70,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/hgwrnbdpokdu0wrsn49f.png",
    "tamanhosEmbalagem": ["269ml", "310ml", "350ml", "355ml", "473ml", "550ml", "600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Comida de boteco", "Sushi"]
  },
  {
    "nomeCerveja": "Skol Hops",
    "descriCerveja": "A Skol Hops é uma cerveja puro malte com adição de lúpulo, o que confere um sabor mais marcante e aromático à bebida. Com teor alcoólico de 4,5%, é uma opção refrescante e saborosa para qualquer ocasião.",
    "valorIBU": 25.00,
    "teorAlcoolico": 4.50,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Pilsen",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/ogpl4jtcbi2auu7rlmsa.png",
    "tamanhosEmbalagem": ["350ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Comida de boteco"]
  },
  {
    "nomeCerveja": "Skol Ultra",
    "descriCerveja": "Skol Ultra é uma cerveja puro malte com 80% menos carboidratos e 35% menos calorias. Uma opção refrescante e saborosa para quem busca um estilo de vida equilibrado.",
    "teorAlcoolico": 4.20,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Light Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/xus4soqt7h5m2itbmyhp.png",
    "tamanhosEmbalagem": ["310ml", "355ml", "473ml", "600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos leves", "Saladas"]
  },
  {
    "nomeCerveja": "Sol",
    "descriCerveja": "Sol é uma cerveja refrescante e suave, perfeita para os dias quentes de verão. Com teor alcoólico de 4,5%, é uma bebida leve e fácil de beber.",
    "valorIBU": 9.00,
    "teorAlcoolico": 4.50,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Milho", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Pilsen",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/qtwjg3bqqfczqi0wjzfa.png",
    "tamanhosEmbalagem": ["269ml", "330ml", "355ml", "600ml", "1L"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos leves", "Frutos do mar", "Comida mexicana"]
  },
  {
    "nomeCerveja": "Stella Artois",
    "descriCerveja": "Stella Artois é uma cerveja puro malte de origem belga, conhecida por seu sabor único e marcante. Com teor alcoólico de 5,2% e amargor suave, é uma opção versátil para diversas ocasiões.",
    "valorIBU": 24.00,
    "teorAlcoolico": 5.20,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Premium American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/jugpyyfmqo8deor8ix1b.png",
    "tamanhosEmbalagem": ["269ml", "310ml", "330ml", "355ml", "550ml", "600ml", "990ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Pratos leves", "Frutos do mar", "Sushis"]
  },
  {
    "nomeCerveja": "Tijuca",
    "descriCerveja": "Tijuca é uma cerveja puro malte, leve e refrescante. Com teor alcoólico de 4,8% e amargor suave, é uma ótima opção para quem busca uma cerveja fácil de beber.",
    "valorIBU": 7.00,
    "teorAlcoolico": 4.80,
    "corpo": "(1)",
    "tempIdeal": "0-4 °C",
    "ingredientes": ["Água", "Malte", "Milho", "Lúpulo"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "American Lager",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/djlm4dnss3duzhvsokec.png",
    "tamanhosEmbalagem": ["355ml", "600ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Petiscos", "Comida de boteco"]
  },
  {
    "nomeCerveja": "WÄLS NILO CAFFEINE",
    "descriCerveja": "A Wäls é uma cervejaria artesanal brasileira que produz cervejas de alta qualidade e sabor único. A Wäls Nilo Caffeine é uma cerveja escura, encorpada e com um toque de café, perfeita para os amantes da bebida.",
    "valorIBU": 35.00,
    "teorAlcoolico": 6.80,
    "corpo": "(2)",
    "tempIdeal": "8-12 °C",
    "ingredientes": ["Água", "Malte", "Lúpulo", "Café"],
    "informacaoAlergen": "Contém cevada e glúten.",
    "tipoCerveja": "Foreign Extra Stout",
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497537/lxdggzdbdjzpnsuuhbwj.png",
    "tamanhosEmbalagem": ["355ml"],
    "informacoesNutricionais": [],
    "harmonizacoes": ["Carne de porco", "Chocolate amargo", "Sobremesas"]
  }
]

async function seed() {
  try {
    // Inserir cervejarias
    const cervejarias = await prisma.cervejaria.createMany({
      data: [
        { nome: 'Ambev' },
        { nome: 'Heineken' },
        { nome: 'Grupo Petrópolis' },
      ],
    })

    const usersCerveja = await prisma.userCerveja.createMany({
      data: [
        {
          usuarioId: "clsjby2s00000hlpx7skiv8q6",
          cervejaId: 1,
          favorita: true,
          queroBeber: false,
          jaBebida: true,
          imagens: ["a"],
          createdAt: new Date()
        },
        // Adicione mais objetos aqui para inserir mais linhas
      ],
    });
    console.log('UserCerveja inserido:', usersCerveja);

    // console.log('Cervejarias inseridas:', cervejarias)

    // Inserir tipos de cerveja
    const tiposCerveja = await prisma.tipoCerveja.createMany({
      "data": [
        // {
        //   "nome": "Premium American Lager",
        //   "descricao": "Estilo de cerveja de baixa fermentação e sabor refrescante."
        // },
        // {
        //   "nome": "Sweet Stout",
        //   "descricao": "Cerveja escura, frequentemente com sabores de café, chocolate e malte tostado."
        // },
        {
          "nome": "German Pilsner",
          "descricao": "Cerveja clara, leve e bem lupulada, com amargor pronunciado."
        },
        {
          "nome": "American Lager",
          "descricao": "Cerveja clara, leve e refrescante, com baixo amargor."
        },
        {
          "nome": "Bock",
          "descricao": "Cerveja lager forte e maltada, frequentemente escura e encorpada."
        },
        {
          "nome": "India Pale Ale",
          "descricao": "Cerveja ale de cor ambarada a acobreada, com amargor e aroma de lúpulo."
        },
        {
          "nome": "Fruit Beer",
          "descricao": "Cerveja com adição de frutas, resultando em sabores frutados e refrescantes."
        },
        {
          "nome": "Belgian Strong Ale",
          "descricao": "Cerveja belga de alta fermentação, com teor alcoólico elevado e sabor complexo."
        },
        {
          "nome": "Pilsen",
          "descricao": "Estilo de cerveja lager de cor clara e sabor equilibrado entre o malte e o lúpulo."
        }
      ]

    })

    console.log('Tipos de cerveja inseridos:', tiposCerveja)

    // ****************** //
    /////// ISSO AQUI PRECISA RODAR SEPARADO DOS ACIMA PARA TER ACESSO AS IDS DA CERVEJARIA
    // Inserir marcas
    // const marcas = await prisma.marca.createMany({
    //   data: [
    //     { nome: 'Modelo', cervejariaId: 1 },
    //   ],
    // })

    // console.log('Marcas inseridas:', marcas)

    // ****************** //
    //// ISSO AQUI PRECISA RODAR SEPARADO DOS ACIMA PARA TER ACESSO AS IDS NECESSARIAR
    //// ID CERVEJARIA, ID MARCA, ID TIPO
  } catch (err) {
    console.log(err)
  }
}
// Inserir cervejas
async function seedCervejas() {
  for (const cerveja of cervejaData) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await prisma.cervejaShadow.createMany({
      data: {
        nomeCerveja: cerveja.nomeCerveja,
        descriCerveja: cerveja.descriCerveja,
        valorIBU: cerveja.valorIBU,
        teorAlcoolico: cerveja.teorAlcoolico,
        cervejariaId: 1,
        tipoCervejaId: 1,
        corpo: cerveja.corpo,
        tempIdeal: cerveja.tempIdeal,
        ingredientes: cerveja.ingredientes,
        // informacaoAlergen: cerveja.informacaoAlergen,
        // tipoCerveja: cerveja.tipoCerveja,
        mainImage: cerveja.mainImage,
        tamanhosEmbalagem: cerveja.tamanhosEmbalagem,
        informacoesNutricionais: cerveja.informacoesNutricionais,
        harmonizacoes: cerveja.harmonizacoes
      }
    })
  }
}

// seedCervejas()
//   .catch(error => {
//     console.error('Erro ao adicionar cervejas ao banco de dados:', error);
//   })
//   // eslint-disable-next-line @typescript-eslint/no-misused-promises
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

seed()
