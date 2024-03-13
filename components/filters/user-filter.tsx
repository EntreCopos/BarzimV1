'use client'

import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { ListaDeUsuarios } from '../lists/lista-usuarios'
import { User } from '@/data/data'
import { Input } from '../ui/input'

export const UserFilter: React.FC<{ usuarios: User[] }> = ({ usuarios }) => {
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<User[]>(usuarios)
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    setUsuariosFiltrados(usuarios)
  }, [usuarios])

  useEffect(() => {
    const usuariosFiltradosPorPesquisa = usuarios
      .filter(
        (usuario) =>
          usuario.name?.toLowerCase().includes(searchText.toLowerCase()) ||
          usuario.username?.toLowerCase().includes(searchText.toLowerCase()) ||
          usuario.role.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a: User, b: User): number => {
        //@ts-expect-error há possibilidade de name vir null. vamos impedir isso no futuro
        return a.name?.charCodeAt(0) - b.name?.charCodeAt(0)
      })
    setUsuariosFiltrados(usuariosFiltradosPorPesquisa)
  }, [usuarios, searchText])

  return (
    <>
      <div
        style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ position: 'absolute', left: '1rem' }}>
            <IoSearchSharp style={{ color: 'var(--marfim-barzim)' }} />
          </div>
          <Input
            type="text"
            placeholder="Pesquisar usuários..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="h-12 border-2 border-stroke-cervejas pl-10"
          />
        </div>
      </div>
      {searchText && searchText.length > 2 && (
        <ListaDeUsuarios usuarios={usuariosFiltrados} />
      )}
    </>
  )
}
