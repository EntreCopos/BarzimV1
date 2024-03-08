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
import { IoSearchSharp } from "react-icons/io5";

export const BeerFilter: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  const [cervejasFiltradas, setCervejasFiltradas] =
    useState<TypeObjectCerveja[]>(cervejas);
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc');
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setCervejasFiltradas(cervejas);
  }, [cervejas]);

  useEffect(() => {
    // Filtrar cervejas com base no texto de pesquisa
    const cervejasFiltradasPorPesquisa = cervejas.filter((cerveja) =>
      cerveja.nomeCerveja.toLowerCase().includes(searchText.toLowerCase())
    );
    setCervejasFiltradas(cervejasFiltradasPorPesquisa);
  }, [cervejas, searchText]);

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
    return ordem === 'asc'
      ? a.valorIBU - b.valorIBU
      : b.valorIBU - a.valorIBU
  })

  const ordenarPorTeorAlcoolico = createOrdenador((a, b) => {
    return ordem === 'asc'
      ? a.teorAlcoolico - b.teorAlcoolico
      : b.teorAlcoolico - a.teorAlcoolico
  })

  const ordenarPorNome = createOrdenador((a, b) => {
    return a.nomeCerveja.localeCompare(b.nomeCerveja)
  })

  return (
    <WrapperDefaultPadding>
   <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ position: 'absolute', left: '8px' }}>
        <IoSearchSharp style={{ color: 'var(--marfim-barzim)' }} />
        </div>
        <input
          type="text"
          placeholder="Pesquisar cervejas..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='border-stroke-cervejas border-[1px] pl-10 w-full' 
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="btnCervejariaTela" style={{ marginBottom: '12px' }}>Ordenar</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuItem onClick={ordenarPorNota}>
            <span>Por Nota</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={ordenarPorIBU}>
            <span>Por Amargura</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={ordenarPorTeorAlcoolico}>
            <span>Por Teor Alcoólico</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={ordenarPorNome}>
            <span>Por Nome</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ListaDeCervejas cervejas={cervejasFiltradas} />
    </WrapperDefaultPadding>
  )
}
