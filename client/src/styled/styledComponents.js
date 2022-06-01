import styled from 'styled-components'
import Select from 'react-select';


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
export const Navbar = styled.nav`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({margin}) => margin || '0'} ;
padding: ${({padding}) => padding || '0'} ;
list-style-type: none
`
export const Li = styled.li`
margin:${({margin}) => margin || '20px'};
list-style: none;
line-height: 150%;
`
export const Forma = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
border-radius: 10px;
`

export const Search = styled.input.attrs({
  type: 'search',
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

`
export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid',
      borderRadius: '10px',
      padding: '1px',
    }),
    option: (provided, state) => ({
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
export const ImgBox = styled.div`
display: flex;
width: ${({width}) => width || '100%'};
height: ${({height}) => height || '100%'};
margin: 0;
border-radius: 10px;
`
export const Img = styled.img.attrs({
  alt: "нет файлов"
})`
max-width:${({width}) => width || '100%'};
min-height: ${({height}) => height || '100%'};
border-radius: 10px;
object-fit: cover;
margin: ${({margin}) => margin || '0'} ;
`
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
export const ActionButton = styled.button`
display: inline-block;
margin-right: 6px;
border: 1px solid #D7DFE2;
box-sizing: border-box;
padding:10px;
font-size:18px;
border-radius: 5px;
`

export const ButtonContainer = styled.div`
display:flex;
justify-content: center;
width: 100%;
padding-bottom: 24px;
`
export const InfoTitle = styled.h1`
  margin: 20px;
`;
export const Title = styled.h3`
  margin: 0 20px 20px 20px;
`;
