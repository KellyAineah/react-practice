
import React, {useState} from 'react';
//import cx from 'classnames';
import './App.css';
import List from './Components/List'
import ToggleSection from './Components/ToggleSection';


function App() {

const [likes, setLikes] = useState(100)
const [dislikes, setDislikes] = useState(25)

const [liked, setLiked] = useState(false)
const [disliked, setDisliked] = useState(false)

const handleLike = () =>{

  if (liked){
    setLikes(likes - 1);
    setLiked(false)
  }

}
  return (
    <div >
      <List />
      <ToggleSection text='hello mama' />
    </div>
  );
}

export default App;
