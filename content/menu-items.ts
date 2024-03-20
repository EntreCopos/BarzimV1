import { FaUserCircle, FaUsers } from 'react-icons/fa'
import { ImLab } from 'react-icons/im'
import { MdSettings } from 'react-icons/md'
import { PiBeerBottleFill } from 'react-icons/pi'
import { RiAdminFill } from 'react-icons/ri'

export const menuItems = [
  {
    title: 'Meu Perfil',
    href: '/usuarios/' + '{{currUser}}',
    icon: FaUserCircle,
    showOnMobile: true,
    admin: false,
  },
  {
    title: 'Usuários',
    href: '/usuarios',
    icon: FaUsers,
    showOnMobile: true,
    admin: false,
  },
  {
    title: 'Cervejas',
    href: '/cervejas',
    icon: PiBeerBottleFill,
    showOnMobile: true,
    admin: false,
  },
  {
    title: 'Configurações',
    href: '/config',
    icon: MdSettings,
    showOnMobile: false,
    admin: false,
  },
  {
    title: 'Admin',
    href: '/admin',
    icon: RiAdminFill,
    showOnMobile: false,
    admin: true,
  },
  {
    title: 'Lab',
    href: '/lab',
    icon: ImLab,
    showOnMobile: true,
    admin: true,
  },
]
