'use client'
import { useMediaQuery } from 'usehooks-ts'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useState } from 'react'
import { type User } from '@/data/data'
import { ListaDeUsuarios } from '../lists/lista-usuarios'
import { Button } from '../ui/button'

export const UserListDrawer: React.FC<{
  title: string
  children: React.ReactNode
  list: User[]
}> = ({ list, children, title = 'Lista' }) => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  console.log(list)

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex max-h-[calc(100vh-5rem)] min-h-96 flex-col overflow-y-scroll border-gray-cards sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-3xl">{title}</DialogTitle>
          </DialogHeader>
          <div className="h-full w-full justify-start overflow-y-scroll ">
            <ListaDeUsuarios usuarios={list} />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[calc(100vh-5rem)] min-h-[50vh] border-gray-cards focus-visible:outline-none">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-3xl">{title}</DrawerTitle>
        </DrawerHeader>
        <div className="flex h-full w-full flex-col justify-start overflow-y-scroll">
          <ListaDeUsuarios usuarios={list} />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Voltar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
