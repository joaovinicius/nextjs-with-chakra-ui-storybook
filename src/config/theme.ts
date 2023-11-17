import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    brand: {
      100: '#FFCB00',
    }
  },
  components: {
    Button: {
      variants: {
        'primary': {
          bg: '#FFCB00',
          color: 'white'
        }
      }
    },
    Image: {
      variants: {
        'icon': {
          width: '20px',
          height: '20px',
          borderRadius: '50%',
        }
      },
      medium: {
        width: '250px',
        height: '250px',
      },
    }
  }
}

export default extendTheme(customTheme)