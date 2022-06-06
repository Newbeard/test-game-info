import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {initGameApi} from '../../redux/actions/game.action'
import { FlexContainer, Img, ImgBox, ButtonContainer, ActionButton, InfoTitle, Title } from '../../styled/styledComponents'


function Game({userWidth}) {

  const dispatch = useDispatch()

  const {game} = useSelector((state) => state);

  const { id } = useParams();

  /* формирование массива картинок игры */

  const  screenshotsUrl = game.screenshotsUrl?.map((el) => el.image)
  const [idScreen, setIdscreen]  = useState(0)
  
  /* запрос на получение информации об игре по id  */

  useEffect(() =>{
      dispatch(initGameApi(id))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[dispatch])

   /* функция для переключения между изображениями к игре */
   
   const nextElement = ()=> {
     if(idScreen < screenshotsUrl.length -1){
       setIdscreen((prev) => prev +1)
     }
    else{
      setIdscreen(0)
    }

  }
  return (
    <>
     <FlexContainer margin="50px" justify="center">
      <ImgBox width="1200px" height="600px">
       {screenshotsUrl && <Img src={screenshotsUrl[idScreen]} width="100%" height="100%"/>}
      </ImgBox>
     </FlexContainer>
     <FlexContainer direction="column" margin="50px">
      <ButtonContainer>
       <ActionButton onClick={nextElement}> next</ActionButton>
      </ButtonContainer>
       <InfoTitle>{game.name}</InfoTitle>
       <Title>{game.description?.replace(/<.{0,5}>|<\/.{0,5}>/gm, '')}</Title>
       <Title><a href={game.website}>Link to game site</a></Title >
     </FlexContainer>
   </>
  );
}

export default Game;



