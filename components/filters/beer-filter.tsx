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
import { FaSort, FaFilter } from 'react-icons/fa'
import { GoSortDesc, GoSortAsc } from 'react-icons/go'
import { Input } from '../ui/input'

export const BeerFilter: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  const [cervejasFiltradas, setCervejasFiltradas] =
    useState<TypeObjectCerveja[]>(cervejas)
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc')
  const [ordenador, setOrdenador] = useState<
    'Amargura' | 'Teor Alcoólico' | 'Ordem Alfabética' | 'Avaliação'
  >('Ordem Alfabética')
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
    setOrdenador('Avaliação')
    const notaA = a.notaMedia ?? 0
    const notaB = b.notaMedia ?? 0
    return ordem === 'asc' ? notaA - notaB : notaB - notaA
  })

  const ordenarPorIBU = createOrdenador((a, b) => {
    setOrdenador('Amargura')
    return ordem === 'asc' ? a.valorIBU - b.valorIBU : b.valorIBU - a.valorIBU
  })

  const ordenarPorTeorAlcoolico = createOrdenador((a, b) => {
    setOrdenador('Teor Alcoólico')
    return ordem === 'asc'
      ? a.teorAlcoolico - b.teorAlcoolico
      : b.teorAlcoolico - a.teorAlcoolico
  })

  const ordenarPorNome = createOrdenador((a, b) => {
    setOrdenador('Ordem Alfabética')
    return ordem === 'asc'
      ? a.nomeCerveja.charCodeAt(0) - b.nomeCerveja.charCodeAt(0)
      : b.nomeCerveja.charCodeAt(0) - a.nomeCerveja.charCodeAt(0)
  })

  return (
    <WrapperDefaultPadding>
      <div
        style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}
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
            <IoSearchSharp />
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
      <div className="flex justify-between gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="basis-1/3" asChild>
            <Button
              className="hover:bg-gray-cards/90 h-12 bg-gray-cards placeholder:text-accent/60"
              variant="secondary"
            >
              <FaSort size={16} />
              <span className="ml-1 font-normal">Ordenado por</span>
              <span className="ml-1 font-semibold">{ordenador}</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
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
        <DropdownMenu>
          <DropdownMenuTrigger className="basis-1/3" asChild>
            <Button
              className="hover:bg-gray-cards/90 h-12 bg-gray-cards placeholder:text-accent/60"
              variant="secondary"
            >
              <FaFilter size={16} />
              <span className="ml-1">Filtrar</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem disabled className="flex w-full justify-between">
              Em breve :D
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ListaDeCervejas cervejas={cervejasFiltradas} />
    </WrapperDefaultPadding>
  )
}
