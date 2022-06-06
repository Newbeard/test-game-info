import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {FlexContainer, Forma, ButtonSearch, CustomSelect, Search} from '../../styled/styledComponents'
import {searchInit} from '../../redux/actions/games.action'

/* опции для кастомного селекта */
const optionsSortRating = [
  { value: 'rating', label: 'sort rating ascending' },
  { value: '-rating', label: 'sort rating descending' },
];

const optionsSortData = [
  { value: 'released', label: 'release date ascending' },
  { value: '-released', label: 'release date descending' },
];


function Controller({ setSortRating, setSortData, setPlatform, sortRating, sortData, platform, search, setSearch}) {
  
  const {platforms} = useSelector(state => state)
 
  const dispatch = useDispatch()

  /* функция поиска игы по имени, принимает данные введенные пользователем */
  const handlerSubmit = (event) => {
    event.preventDefault()
    dispatch(searchInit(event.target.search.value))
  }

  return (
    <FlexContainer direction="column" margin="20px">
       <FlexContainer  align="center" margin="20px" justify="space-between" border="1px solid">
       <Forma type="submit" onSubmit={handlerSubmit}>
        <Search onChange={(e) => setSearch(e.target.value)} value={search}/>
        <ButtonSearch>search</ButtonSearch>
       </Forma>
       </FlexContainer>
      <FlexContainer justify="space-around">
       <CustomSelect options={optionsSortRating} placeholder="sort rating" value={sortRating} onChange={setSortRating} isClearable isSearchable={false}/>
       <CustomSelect options={optionsSortData} placeholder="sort data release" value={sortData} onChange={setSortData} isClearable isSearchable={false}/>
       <CustomSelect options={platforms} placeholder="filtr by platforms" value={platform} onChange={setPlatform} isClearable isSearchable={false}/>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Controller;
