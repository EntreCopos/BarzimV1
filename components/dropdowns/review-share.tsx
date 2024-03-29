import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MdIosShare } from 'react-icons/md'

export function ReviewShareDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-3" asChild>
        <span className="ml-auto rounded-lg p-3 text-lg hover:bg-accent">
          <MdIosShare />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-accent/60">
        <DropdownMenuLabel>Compartilhar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
