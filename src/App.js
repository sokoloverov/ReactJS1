import { useEffect, useState } from 'react';
import '../src/style/App.css';
import { FormInputChart } from './components/Forms/FormInputChart';
import bender from '../src/img/bender1.png';
import zoidberg from '../src/img/zoidberg.png';
import fry from '../src/img/fry.png';
import lola from '../src/img/lola.png';

function App(props) {

  const messageListStart = [{ id: 0, text: 'Привет', author: 'Петров', gender: '2' }, { id: 1, text: 'Как дела?', author: 'Сидоров', gender: '3' }];
  const [messageList, setMessageList] = useState(messageListStart);
  const [show, setShow] = useState('');

  function addMessage(data) {
    let bigestIndex = 0;
    messageList.map((e) => {
      if (e.id > bigestIndex) bigestIndex = e.id
      return bigestIndex = bigestIndex + 1;
    })
    data = Object.assign(data, { id: bigestIndex });
    setMessageList([...messageList, data]);
  }

  useEffect(() => {
    if (messageList.length > 2) {
      function changeShow() {
        if (messageList[messageList.length - 1].author) {
          setShow('Привет, ' + (messageList[messageList.length - 1].author).toUpperCase() + ', я робот 👀');
        } else {
          setShow('Привет, безымянный автор, я робот 👀');
        }
      }
      setTimeout(changeShow, 500);
    }
  }, [messageList, show]);

  let result = messageList.map((e) => {
    return <div className='bubble text_area' key={e.id}>
      <div>{e.gender === '1' ? <img className='gender_avatar' src={lola} alt='avatar' /> : <div />}</div>
      <div>{e.gender === '2' ? <img className='gender_avatar' src={fry} alt='avatar' /> : <div />}</div>
      <div>{e.gender === '3' ? <img className='gender_avatar' src={zoidberg} alt='avatar' /> : <div />}</div>
      <div className='name_author'>{e.author}</div>
      {e.text}
    </div>
  })

  return (
    <div className="App App-header">
      <h3 className='welcom text-focus-in'>Hi! This`s {props.name} chat 😀</h3>
      <div className='chatContainer' >{result}</div>
      <div className='benderAnswer'><div><img className='benderFace' src={bender} alt='bender'></img></div><div className='benderTalk'>{show}</div></div>
      <FormInputChart onSubmitButton={addMessage} />
    </div>
  );
}

export default App;
