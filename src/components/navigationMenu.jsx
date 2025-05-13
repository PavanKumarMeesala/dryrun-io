import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

function MenuBar() {
  return (
    <Menubar className="w-52 h-20">
      <MenubarMenu>
        <MenubarTrigger className = "text-xl">Docs</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className = "text-base">
            User guide
          </MenubarItem>
          <MenubarItem className = "text-base">
            What is Dry run?
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger className = "text-base">Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem className = "text-base">
            GitHub <MenubarShortcut>⌘G</MenubarShortcut>
          </MenubarItem>
          </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className = "text-xl">About us</MenubarTrigger>
      </MenubarMenu> 
    </Menubar>
  )
}

export default MenuBar;