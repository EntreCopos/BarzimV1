import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  try {
    // Inserir cervejarias
    // const cervejarias = await prisma.cervejaria.createMany({
    //   data: [
    //     {
    //       nome: 'Ambev'
    //     },
    //     {
    //       nome: 'Heineken'
    //     },
    //     {
    //       nome: 'Grupo Petrópolis'
    //     },
    //   ],
    // })

    // console.log('Cervejarias inseridas:', cervejarias)

    // Inserir tipos de cerveja
    // const tiposCerveja = await prisma.tipoCerveja.createMany({
    //   data: [
    //     { nome: 'Premium American Lager', descricao: 'Estilo de cerveja de baixa fermentação e sabor refrescante.' },
    //     { nome: 'sweet stout', descricao: 'Cerveja escura, frequentemente com sabores de café, chocolate e malte tostado.' },
    //   ],
    // })

    // console.log('Tipos de cerveja inseridos:', tiposCerveja)

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

    // Inserir cervejas
    const cervejas = await prisma.cerveja.createMany({
      data: [
        {
          nomeCerveja: "Caracu",
          descriCerveja: "Caracu, a cerveja preta FORTE E GOSTOSA, foi lançada em 1899. Hoje uma das marcas mais tradicionais do Brasil, Caracu é conhecida por seu sabor encorpado e sua energia, possui aroma de malte torrado, que faz lembrar café. E sua fama de ser uma cerveja forte não é à toa. Por não ser filtrada, Caracu é mais nutritiva, contém levedura e proteínas.",
          valorIBU: 22.00,
          teorAlcoolico: 5.40,
          corpo: "(1)",
          codBarras: 'HDUDASHUAHSUDAS',
          tempIdeal: "8-12 °C",
          mainImage: 'https://res.cloudinary.com/dvprux49g/image/upload/v1707497542/y3urkbnmpiur3ynxtnxb.png',
          cervejariaId: 1,
          marcaId: 2,
          tipoCervejaId: 2,

        },
        {
          nomeCerveja: "Bohemia Puro Malte",
          descriCerveja: "Criada em 1853 pelo alemao Henrique Kremer, Bohemia é a primeira cerveja do Brasil. Produzida com matéria prima importada desde sua primeira garrafa, ela é indispensavel no copo de quem entende de cerveja.",
          valorIBU: 9.00,
          codBarras: 'HAHAHAHAHAH',
          mainImage: 'https://res.cloudinary.com/dvprux49g/image/upload/v1707497541/v3n0dysn8nurjnso1zmt.png',
          teorAlcoolico: 5.00,
          corpo: "(1)",
          tempIdeal: "0-4 °C",
          tipoCervejaId: 1,
          cervejariaId: 1,
          marcaId: 1
        },
        {
          nomeCerveja: "Modelo",
          descriCerveja: "Maltes tostados lentamente para um sabor por mais tempo. Uma cerveja especialmente preparada com todo o capricho e excelência. Modelo, aperfeiçoando há 90 anos a arte de tostar maltes.",
          valorIBU: 13.00,
          codBarras: 'LALALALALALA',
          mainImage: "https://res.cloudinary.com/dvprux49g/image/upload/v1707497540/idgkz9hx0wgxekmcvqxp.png",
          teorAlcoolico: 4.80,
          corpo: "(1)",
          tempIdeal: "0-4 °C",
          tipoCervejaId: 1,
          cervejariaId: 1,
          marcaId: 3
        },
      ],
    })

    console.log('Cervejas inseridas:', cervejas)

  } catch (error) {
    console.error('Erro ao inserir dados:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
