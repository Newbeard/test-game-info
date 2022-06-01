import React from 'react';
import {Link} from 'react-router-dom'
import { FlexContainer, ImgBox, Img, Wrapper, InfoTitle, Title  } from '../../styled/styledComponents'

function Games({games}) {
  return (
    <Wrapper>
     {games?.map((game) =>
     <FlexContainer key={game.id} direction="column" justify="center" border="1px solid grey">
      <ImgBox>
        <Link to={`/game/${game.id}`}>
        <Img src={game.background_image}/>
        </Link>
      </ImgBox>
      <InfoTitle>{game.name}</InfoTitle>
      <Title >Release date: {game.released}</Title >
      <Title >Rating: {game.rating}</Title >
     </FlexContainer>
     )}
    </Wrapper>
  );
}

export default Games;
