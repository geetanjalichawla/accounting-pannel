import React from 'react'
import {
  ThemeEditor as ThemeEditorContainer,
  ThemeEditorDrawer,
  ThemeEditorColors,
  ThemeEditorFontSizes,
  ColorModeToggle
} from '@hypertheme-editor/chakra-ui'
import { Button, Icon } from '@chakra-ui/react'
import { CgColorPicker } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'
import { MdPalette } from 'react-icons/md'

export function ThemeEditor(props) {
    return (
        <ThemeEditorContainer>
          <ThemeEditorButton {...props}/>
        </ThemeEditorContainer>
      )
}

function ThemeEditorButton({ ...rest }) {
  return (
    <Button
        variant='no-hover'
        bg='transparent'
        p='0px'
        minW='unset'
        minH='unset'
        h='18px'
        w='max-content'
        _focus={{ boxShadow: 'none' }}
        {...rest}
        mr={2}
    >
               <ColorModeToggle/>

      </Button>
  )
}