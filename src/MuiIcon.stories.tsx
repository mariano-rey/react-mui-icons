import { Button, Divider, PaletteMode, Paper, ThemeProvider, createTheme } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import MuiIcon from './MuiIcon'
import { MuiIconType } from './types'

const meta: Meta<typeof MuiIcon> = {
  title: 'MUI Icon',
  component: MuiIcon,
  args: { icon: 'home' },
  decorators: [
    (Story) => {
      const [themeMode, setThemeMode] = useState<PaletteMode>('dark')
      const isDarkMode = themeMode === 'dark'
      const theme = createTheme({ palette: { mode: themeMode } })
      const toggleTheme = () => setThemeMode((acc) => (acc === 'dark' ? 'light' : 'dark'))

      return (
        <ThemeProvider theme={theme}>
          <Paper sx={{ p: 2 }}>
            <Button variant='outlined' onClick={toggleTheme}>
              Theme: {isDarkMode ? '🌙' : '🌞'}
            </Button>
            <Divider sx={{ my: 2 }} />
            <Story />
          </Paper>
        </ThemeProvider>
      )
    },
  ],
}

type Story = StoryObj<typeof MuiIcon>

export default meta

const createStory = (icon: MuiIconType): Story => ({ args: { icon } })

export const SearchIcon: Story = createStory('search')
export const OutlinedIcon: Story = createStory('save_outlined')
