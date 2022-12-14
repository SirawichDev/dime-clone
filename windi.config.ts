import { defineConfig } from 'vite-plugin-windicss'
import formsPlugin from 'windicss/plugin/forms'
import typographyPlugin from 'windicss/plugin/typography'
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import lineClampPlugin from 'windicss/plugin/line-clamp'

export default defineConfig({
  attributify: false,
  safelist: [...Array(5).keys()]
    .filter((key) => key > 0)
    .map(
      (key) =>
        `grid-cols-${key} lg:grid-cols-${key} xl:grid-cols-${key} md:grid-cols-${key} sm:grid-cols-${key}`
    ),
  shortcuts: {
    btn: 'unstyled rounded-full font-semibold border-2 border-transparent transition-all hover:(text-gray-50 bg-blue-800)',
    'flex-center-between': 'flex items-center justify-between',
    overlay:
      'absolute w-full h-full left-0 top-0 max-h-full pointer-events-none',
  },
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    screens: {
      sm: '656px',
      md: '784px',
      lg: '1040px',
      xl: '1296px',
      '2xl': '1552px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px', // 16px
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          maxWidth: '624px',
          css: {
            color: theme('colors.gray.700'),
            'h1, h2': {
              letterSpacing: '-0.025em',
              fontWeight: theme('fontWeight.semibold'),
            },
            'h1, h2, h3, h4': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.blue.900'),
            },
            a: {
              color: theme('colors.blue.700'),
              textDecoration: 'initial',
              wordBreak: 'break-word',
            },
            img: {
              borderRadius: '5px',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            figure: {
              marginRight: 'auto',
              marginLeft: 'auto',
              maxWidth: '100%',
            },
            'figure figcaption': {
              color: theme('colors.gray.700'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: '0px',
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
        lg: {
          css: {
            maxWidth: '765px',
            h1: {
              lineHeight: '1.3',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.blue.200'),
            'h1, h2': {
              letterSpacing: '-0.025em',
              fontWeight: theme('fontWeight.semibold'),
            },
            'h1, h2, h3, h4': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.blue.50'),
            },
            a: {
              color: theme('colors.blue.100'),
              textDecoration: 'initial',
            },
            img: {
              borderRadius: '5px',
            },
            strong: {
              color: theme('colors.blue.50'),
              fontWeight: theme('fontWeight.medium'),
            },
            figure: {
              marginRight: 'auto',
              marginLeft: 'auto',
              maxWidth: '100%',
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
          },
        },
      }),
    },
  },
  plugins: [formsPlugin, typographyPlugin, aspectRatioPlugin, lineClampPlugin],
})
