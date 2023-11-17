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
    },
    Input: {
      variants: {
        'default': {
          'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          'border-radius': '3.714px',
          border: '0.743px solid var(--Input-Box-Stroke-Thin, rgba(0, 0, 0, 0.15))',
          background: 'rgba(252, 253, 255, 0.80)',
        }
      }
    }
  }
}

export default extendTheme(customTheme)