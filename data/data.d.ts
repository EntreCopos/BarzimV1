// data.d.ts

interface CervejaData {
  nomeCerveja: string
  teorAlcoolico: number
  imagem: string
  codBarras: string
  marcaId: number
  cervejariaId: number
  tipoCervejaId: number
}

interface AgeVerifFormData {
  day: number
  month: number
  year: number
}

interface TypeListaDeCerveja {
  map(arg0: ({ id, nomeCerveja, mainImage, tipoCerveja: { nome: tipoCerveja }, }: { id: number; nomeCerveja: string; mainImage: string; tipoCerveja: { nome: string } }) => import("react").JSX.Element): import("react").ReactNode
  id: number;
  mainImage: string;
  nomeCerveja: string;
  descriCerveja: string;
  teorAlcoolico: number;
  tempIdeal: string;
  valorIBU: number;
  corpo: string;
  informacoesNutricionais: string[]; // Ou outro tipo de dado, se aplicável
  tamanhosEmbalagem: string[];
  cervejariaId: number;
  tipoCervejaId: number;
  notaMedia: number | null;
  ingredientes: string[];
  harmonizacoes: string[];
  tipoCerveja: {
    id: number;
    nome: string;
    descricao: string;
  };
}

export { type CervejaData, type AgeVerifFormData, type TypeListaDeCerveja }
