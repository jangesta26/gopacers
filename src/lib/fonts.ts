import { Inter, Poppins } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
})