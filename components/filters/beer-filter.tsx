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

export const BeerFilter: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  const [cervejasFiltradas, setCervejasFiltradas] =
    useState<TypeObjectCerveja[]>(cervejas)
  const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    setCervejasFiltradas(cervejas)
  }, [cervejas])

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default">Ordenar</Button>
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
