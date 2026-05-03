import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inputvalue from './Inputvalue.jsx'
import Show from './Show.jsx'
import Character from './Character.jsx'
import Form from './MultipleForm.jsx'
import Skills from './Checkbox.jsx'
import ColorChanger from './ColorChange.jsx'
import LikeButton from './Like.jsx'
import UseEffectDemo from './UseEffectDemo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Inputvalue /> */}
    {/* <Show /> */}
    {/* <Character /> */}
    {/* <Form /> */}
    {/* <Skills /> */}
    {/* <ColorChanger /> */}
    {/* <LikeButton /> */}
    <UseEffectDemo/>
  </StrictMode>
)
