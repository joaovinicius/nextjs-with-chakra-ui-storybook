import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  styles: {
    global: {
      'html, body': {}
    }
  },
  colors: {
      primary: "#FFCB00",
  },
  components: {}
}

export default extendTheme(customTheme)