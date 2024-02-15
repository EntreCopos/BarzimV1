"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import React, { useEffect, useState } from 'react'


interface Cerveja {
    id: number
    nomeCerveja: string
    teorAlcoolico: number
    valorIBU: number
    notaMedia: number | null
}

export const BeerFilter: React.FC<{ cervejas: Cerveja[] }> = ({ cervejas }) => {
    const [cervejasFiltradas, setCervejasFiltradas] = useState<Cerveja[]>(cervejas)
    const [ordem, setOrdem] = useState<'asc' | 'desc'>('asc')

    useEffect(() => {
        setCervejasFiltradas(cervejas)
    }, [cervejas])

    const ordenarCervejas = (parametroOrdenacao: keyof Cerveja) => {
        const cervejasOrdenadas = [...cervejasFiltradas].sort((a, b) => {
            const valorA = a[parametroOrdenacao]
            const valorB = b[parametroOrdenacao]
            return ordem === 'asc' ? valorA - valorB : valorB - valorA
        })
        console.log("Cervejas ordenadas:", cervejasOrdenadas)
        setCervejasFiltradas(cervejasOrdenadas)
        setOrdem(ordem === 'asc' ? 'desc' : 'asc')
    }

    const createOrdenador = (parametroOrdenacao: keyof Cerveja) => () => {
        ordenarCervejas(parametroOrdenacao)
    }

    const ordenarPorNota = createOrdenador('notaMedia')
    const ordenarPorIBU = createOrdenador('valorIBU')
    const ordenarPorTeorAlcoolico = createOrdenador('teorAlcoolico')
    const ordenarPorNome = createOrdenador('nomeCerveja')

    return (
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
    )
}