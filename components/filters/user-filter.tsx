'use client'

import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { ListaDeUsuarios } from '../lists/lista-usuarios'
import { type User } from '@/data/data'
import { Input } from '../ui/input'
import { WrapperDefaultPadding } from '../wrappers/wrapper-default-padding'

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
    <div className="mb-4 flex w-full flex-col justify-center space-y-2">
      <div className="relative flex w-full items-center justify-center">
        <div style={{ position: 'absolute', left: '1rem' }}>
          <IoSearchSharp />
        </div>
        <Input
          type="text"
          placeholder="Pesquisar usuários..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="h-12 border-2 border-stroke-cervejas pl-10"
        />
      </div>
      {searchText && searchText.length > 2 && (
        <ListaDeUsuarios usuarios={usuariosFiltrados} />
      )}
    </div>
  )
}
