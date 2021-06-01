import React, {useState} from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'

export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Outro Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'aquela pessoa', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'outra pessoa', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className='app-window'>
      <div className='sidebar'>
        
        <header>
          <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt=''/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>

        <div className='search'>
          <div className={'search--input'}>
            <SearchIcon style={{color: '#919191'}}/>
            <input type='search' placeholder={'Procurar ou começar uma nova conversa'}/>
          </div>
        </div>

        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem 
              key={key}
              // atualiza o activeChat com a key do ChatList selecionado
              onClick={() => setActiveChat(chatlist[key])}
              // se o chat ativo for igual ao clicado, o chat fica com um tom mais escuro
              active={activeChat.chatId === chatlist[key].chatId}
              // passa as informações do chatlist
              data={item}
            />
          ))}
        </div>

      </div>
      <div className='content-area'>
        {/* Se o id do activeChat for diferente de undefined, exibe ChatWindow */}
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {/* Se o id do chat dor igual a undefined, exibe o chatIntro */}
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>
  )
}
