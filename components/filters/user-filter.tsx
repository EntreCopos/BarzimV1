'use client'

import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import {ListaDeUsuarios} from '../lists/lista-usuarios';
import { User } from '@/data/data'; // Substitua pelo caminho correto para o tipo User

export const UserFilter: React.FC<{ usuarios: User[] }> = ({ usuarios }) => {
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<User[]>(usuarios);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setUsuariosFiltrados(usuarios);
  }, [usuarios]);

  useEffect(() => {
    const usuariosFiltradosPorPesquisa = usuarios.filter((usuario) =>
      usuario.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsuariosFiltrados(usuariosFiltradosPorPesquisa);
  }, [usuarios, searchText]);

  return (
    <>
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ position: 'absolute', left: '8px' }}>
            <IoSearchSharp style={{ color: 'var(--marfim-barzim)' }} />
          </div>
          <input
            type="text"
            placeholder="Pesquisar usuários..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='border-stroke-usuarios border-[1px] pl-10 w-full'
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-gray-cards)',
              color: 'var(--marfim-barzim)',
              paddingLeft: '30px',
            }}
          />
        </div>
      </div>
      <ListaDeUsuarios usuarios={usuariosFiltrados} />
    </>
  )
}