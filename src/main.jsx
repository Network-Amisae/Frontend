import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// SocketProvider 컴포넌트를 가져옴. (경로 확인 필수)
import { SocketProvider } from './contexts/SocketProvider.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App 컴포넌트를 SocketProvider로 감싸줌 */}
    <SocketProvider>
      <App />
    </SocketProvider>
  </StrictMode>,
)
