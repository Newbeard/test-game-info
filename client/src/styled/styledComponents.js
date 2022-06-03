import styled from 'styled-components'
import Select from 'react-select';

export const Header = styled.header`
position: sticky;
top: 0;
z-index: 2;
`
/* флекс контейнер */
export const FlexContainer = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({margin}) => margin || '0'} ;
padding: ${({padding}) => padding || '0'} ;
border: ${({border}) => border || 'none'} ;
border-radius: 10px;
`
/* навбар */
export const Navbar = styled.nav`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({margin}) => margin || '0'} ;
padding: ${({padding}) => padding || '0'} ;
list-style-type: none
`
/* список для навбар */
export const Li = styled.li`
margin:${({margin}) => margin || '20px'};
list-style: none;
line-height: 150%;
`
/* форма для поиска */
export const Forma = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
border-radius: 10px;
`
/* инпут поиска */
export const Search = styled.input.attrs({
  name: 'search',
  type: 'search',
  autoComplete: 'off',
  placeholder: 'Search for a name...',
})`
margin-left: 2px;
padding: 10px;
border: none;
outline: none;
width: 100%;
height: 50px;
::-webkit-input-placeholder {color: white;}
::-moz-placeholder {color: white;}
border-radius: 10px;
font-size: 80%;
`
export const ButtonSearch = styled.button`
border: none;
outline: none;
background: black;
height: 50px;
font-size: 80%;
border-radius: 10px;
padding: 10px;
cursor: pointer;
`
/* кастомный селект */
export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid',
      borderRadius: '10px',
      padding: '1px',
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
      cursor: 'pointer',
      color: 'white',
      backgroundColor: 'black'
    }),
  },
})`
  width: 220px;
  border-radius: 10px;
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: white !important;
  }
  & > div[id] {
    background-color: black;
  }
   & * {
    border-radius: 10px;
  }
`
/* бокс для картинок */
export const ImgBox = styled.div`
display: flex;
width: ${({width}) => width || '100%'};
height: ${({height}) => height || '100%'};
margin: 0;
border-radius: 10px;
`
/* картинки */
export const Img = styled.img.attrs({
  alt: "нет файлов"
})`
max-width:${({width}) => width || '100%'};
min-height: ${({height}) => height || '100%'};
border-radius: 10px;
object-fit: cover;
margin: ${({margin}) => margin || '0'} ;
`
/* грид обертка для отображения списка игр */
export const Wrapper = styled.section`
width: 100%;
padding: 2rem 2rem;
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 1rem;
@media (min-width: 767px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2.5rem 2.5rem;
}
@media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 2rem;
}
`
/* контейнер для кнопок */
export const ButtonContainer = styled.div`
display:flex;
justify-content: center;
width: 100%;
padding-bottom: 24px;
`
/* кнопка */
export const ActionButton = styled.button`
display: inline-block;
margin-right: 6px;
border: 1px solid #D7DFE2;
box-sizing: border-box;
padding:10px;
font-size:18px;
border-radius: 5px;
`
/* еуги для информации об игре */
export const InfoTitle = styled.h1`
  margin: 20px;
`
export const Title = styled.div`
  margin: 0 20px 20px 20px;
`
/* лоадер */
export const WrapperLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  ::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background-color: white;
  animation: move 4s linear infinite;
  @keyframes move {
  0%,
  100% {
    left: 0;
  }
  50% {
    left: calc(100% - 100px);
  }
}
}
`
export const Span = styled.span`
    font-size: 80px;
  letter-spacing: 5px;
  text-transform: uppercase;
  line-height: 1;
  mix-blend-mode: difference;
`
/* модальное окно */
export const Modals =styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
`

export const ModalDialog =styled.div`
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
  border: 1px solid grey;
  border-radius: 10px;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
`

export const ModalClose = styled.div`
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: flex-end;
`
export const ModalTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const ModalTitle = styled.div`
  font-size: 20px;
  color: #999;
  margin-bottom: 20px;
`
