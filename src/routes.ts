import adminTest from './pages/adminTest'
import loginTest from './pages/loginTest'
import toolkitTest from './pages/toolkitTest'

export const authRoutes = [
  {
    path: '/admin',
    Component: adminTest
  },
]

export const publicRoutes = [
  {
    path: '/login',
    Component: loginTest
  },
  {
    path: '/test',
    Component: toolkitTest
  },
]