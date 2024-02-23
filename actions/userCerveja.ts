'use server'
import { addToUserCerveja } from '@/data/userCerveja' // Atualize com o caminho para a função addToUserCerveja

export const addCervejaToList = async (idCerveja: number, tipoLista: string, usuarioId: string) => {
  try {
    await addToUserCerveja(idCerveja, tipoLista, usuarioId);

    console.log(`Cerveja ${idCerveja} adicionada à lista ${tipoLista} do usuário ${usuarioId}`);
  } catch (err) {
    console.error('Erro ao adicionar cerveja à lista:', err);
    return null;
  }
}