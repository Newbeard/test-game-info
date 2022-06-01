import React from 'react';
import { useState} from 'react';
import {useSelector} from 'react-redux'
import {FlexContainer, Forma, ButtonSearch, CustomSelect, Search} from '../../styled/styledComponents'


const optionsSort = [
  { value: 'asc', label: 'sort ascending' },
  { value: 'desc', label: 'sort descending' },
];


function Controller(props) {
  const [region, setRegion] = useState('');
  const [platform, setPlatform] = useState('');
  const {platforms} = useSelector(state => state)

  return (
    <FlexContainer direction="column" margin="20px">
       <FlexContainer  align="center" margin="20px" justify="space-between" border="1px solid">
       <Forma type="submit">
        <Search/>
        <ButtonSearch>search</ButtonSearch>
       </Forma>
       </FlexContainer>
      <FlexContainer justify="space-around">
       <CustomSelect options={optionsSort} placeholder="sort" value={region} onChange={setRegion} isClearable isSearchable={false}/>
       <CustomSelect options={optionsSort} placeholder="sort" value={region} onChange={setRegion} isClearable isSearchable={false}/>
       <CustomSelect options={platforms} placeholder="filtr by platforms" value={platform} onChange={setPlatform} isClearable isSearchable={false}/>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Controller;
