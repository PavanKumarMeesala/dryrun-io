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
        <MenubarTrigger>Docs</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            User guide
          </MenubarItem>
          <MenubarItem>
            What is Dry run?
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            GitHub Repo
          </MenubarItem>
          </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About us</MenubarTrigger>
      </MenubarMenu> 
    </Menubar>
  )
}

export default MenuBar;