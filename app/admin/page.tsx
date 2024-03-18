import dynamic from 'next/dynamic'
const App = dynamic(() => import('./app'), { ssr: false })

const AdminPage = async () => {
  return <App />
}

export default AdminPage
