import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function ChangeColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton onClick={toggleColorMode} colorScheme={useColorModeValue("purple", "orange")} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} />
    )
}