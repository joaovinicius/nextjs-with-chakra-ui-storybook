import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  styles: {
    global: {
      'html, body': {}
    }
  },
  components: {
    Button: {
      variants: {
        'primary': {
          color: 'white',
          bg: '#FFCB00',
          borderRadius: 'full'
        }
      },
      defaultProps: {
        variant: 'primary'
      }
    }
  }
}

export default extendTheme(customTheme)