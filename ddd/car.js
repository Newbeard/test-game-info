const App = () => {
  
  const cardRef = React.createRef()

  
  const scrollElement = (offset)=> {
    console.log(offset, );
    cardRef.current.scrollLeft += offset;
  }
  
  
  
  return(
    <PageContainer>
    <ButtonContainer>
        <ActionButton  onClick={()=>{
            scrollElement(-cardRef.current.clientWidth)
          }}> {`<`}
        </ActionButton>
        <ActionButton onClick={()=>{
            scrollElement(cardRef.current.clientWidth -205)
          }}> {`>`} 
        </ActionButton>
    </ButtonContainer>
    <CardsContainer ref={cardRef}>
       {cards.map((item,idx)=> 
                  (<StyledCard key={idx}> <ImageContainer src=          {item.img} />
    <Content >{item.title} </Content>
    </StyledCard>))}
    </CardsContainer>
    </PageContainer>
  );
}


const PageContainer = styled.div`
display:flex;
flex-direction:column;
flex:1;
height:100vh;
align-items:center;
justify-content:center;

`

const ActionButton = styled.button`
display:inline-block;
margin-right:6px;
background: #FFFFFF;

border: 1px solid #D7DFE2;
box-sizing: border-box;
padding:10px;
font-size:18px;

box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);
border-radius: 5px;
`

const ButtonContainer = styled.div`
display:flex;
justify-content:flex-end;
width: 100%;
padding-bottom: 24px;

`

const CardsContainer = styled.div`
display:flex;
max-width:100vw;
overflow:scroll;
scroll-behavior: smooth;

 &::-webkit-scrollbar {
     -webkit-appearance: none;
 
     
  }


`

const StyledCard = styled.div`
box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);
height:405px;
width:328px;
background: #fff;
margin-right:10px;
border-radius:4px;

`

const ImageContainer = styled.img`
border-top-left-radius:4px;
border-top-right-radius:4px;


`

const Content = styled.div`
font-size:23px;
padding-top:12px;
padding-left:10px;
padding-right:10px;

`


https://codepen.io/ehendry91/pen/qzJNgM

