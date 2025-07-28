import { LanguageProvider } from './contexts/LanguageContext'
import WeddingInvitation from './components/WeddingInvitation'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <WeddingInvitation />
      </div>
    </LanguageProvider>
  )
}

export default App 