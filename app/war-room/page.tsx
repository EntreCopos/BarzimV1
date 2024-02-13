import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

export default function War() {

  const cervejaInfo = {
    "id": 4,
    "mainImage": "https://res.cloudinary.com/dvprux49g/image/upload/v1707497536/fyjpjpuv2k1f53cwl2iw.png",
    "nomeCerveja": "Adriática",
    "descriCerveja": "A Cerveja Adriática 600ml foi criada pelo alemão Henrique Thielen, um visionário cervejeiro do início do século XX. Ela teve seu nome em homenagem à cervejaria que traduz toda uma era de tradição passada de pai para filho. Hoje, conhecida como a irmã mais velha da Original.",
    "teorAlcoolico": 4.9,
    "tempIdeal": "0-4 °C",
    "valorIBU": 9.5,
    "corpo": "(1)",
    "codBarras": null,
    "informacoesNutricionais": null,
    "harmonizacoes": null,
    "tamanhosEmbalagem": null,
    "ingredientes": null,
    "marcaId": 4,
    "cervejariaId": 1,
    "tipoCervejaId": 1,
    "marca": { "id": 4, "nome": "Adriática", "cervejariaId": 1 },
    "tipoCerveja": { "id": 1, "nome": "Premium American Lager", "descricao": "Estilo de cerveja de baixa fermentação e sabor refrescante." },
    "cervejaria": { "id": 1, "nome": "Ambev" }
  };

  return (<div className='bg-black bg-cover h-svh flex items-center justify-center'>
    <Breadcrumbs cervejaInfo={cervejaInfo} />


  </div>
  )
}