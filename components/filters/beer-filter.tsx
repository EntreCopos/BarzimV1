'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React, { useEffect, useState } from 'react'
import ListaDeCervejas from '../lists/lista-cervejas'
import { type TypeObjectCerveja } from '@/data/data'
import { WrapperDefaultPadding } from '../wrappers/wrapper-default-padding'
import { IoSearchSharp } from 'react-icons/io5'
import { FaSort } from 'react-icons/fa'
import { GoSortDesc, GoSortAsc } from 'react-icons/go'
import { Input } from '../ui/input'

export const BeerFilter: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  const [cervejasFiltradas, setCervejasFiltradas] =
    useState<TypeObjectCerveja[]>(cervejas)
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc')
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    setCervejasFiltradas(cervejas)
  }, [cervejas])

  useEffect(() => {
    // Filtrar cervejas com base no texto de pesquisa
    const cervejasFiltradasPorPesquisa = cervejas.filter((cerveja) =>
      cerveja.nomeCerveja.toLowerCase().includes(searchText.toLowerCase())
    )
    setCervejasFiltradas(cervejasFiltradasPorPesquisa)
  }, [cervejas, searchText])

  const ordenarCervejas = (
    fnComparacao: (a: TypeObjectCerveja, b: TypeObjectCerveja) => number
  ) => {
    const cervejasOrdenadas = [...cervejasFiltradas].sort(fnComparacao)
    setCervejasFiltradas(cervejasOrdenadas)
    setOrdem(ordem === 'asc' ? 'desc' : 'asc')
  }

  const createOrdenador =
    (fnComparacao: (a: TypeObjectCerveja, b: TypeObjectCerveja) => number) =>
    () => {
      ordenarCervejas(fnComparacao)
    }

  const ordenarPorNota = createOrdenador((a, b) => {
    const notaA = a.notaMedia ?? 0
    const notaB = b.notaMedia ?? 0
    return ordem === 'asc' ? notaA - notaB : notaB - notaA
  })

  const ordenarPorIBU = createOrdenador((a, b) => {
    return ordem === 'asc' ? a.valorIBU - b.valorIBU : b.valorIBU - a.valorIBU
  })

  const ordenarPorTeorAlcoolico = createOrdenador((a, b) => {
    return ordem === 'asc'
      ? a.teorAlcoolico - b.teorAlcoolico
      : b.teorAlcoolico - a.teorAlcoolico
  })

  const ordenarPorNome = createOrdenador((a, b) => {
    return ordem === 'asc'
      ? a.nomeCerveja.charCodeAt(0) - b.nomeCerveja.charCodeAt(0)
      : b.nomeCerveja.charCodeAt(0) - a.nomeCerveja.charCodeAt(0)
  })

  return (
    <WrapperDefaultPadding>
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
            placeholder="Pesquisar cervejas..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="h-12 border-2 border-stroke-cervejas pl-10"
          />
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="btnCervejariaTela" style={{ marginBottom: '12px' }}>
            <FaSort size={16} />
            <span className="ml-1">Ordenar</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuItem
            className="flex w-full justify-between"
            onClick={ordenarPorNota}
          >
            <span>Por Nota</span>
            {ordem === 'asc' ? <GoSortDesc /> : <GoSortAsc />}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex w-full justify-between"
            onClick={ordenarPorIBU}
          >
            <span>Por Amargura</span>
            {ordem === 'asc' ? <GoSortDesc /> : <GoSortAsc />}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex w-full justify-between"
            onClick={ordenarPorTeorAlcoolico}
          >
            <span>Por Teor Alcoólico</span>
            {ordem === 'asc' ? <GoSortDesc /> : <GoSortAsc />}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex w-full justify-between"
            onClick={ordenarPorNome}
          >
            <span>Por Nome</span>
            {ordem === 'asc' ? <GoSortDesc /> : <GoSortAsc />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ListaDeCervejas cervejas={cervejasFiltradas} />
    </WrapperDefaultPadding>
  )
}
