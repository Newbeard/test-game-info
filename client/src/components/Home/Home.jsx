import {useState, useEffect, useRef, useLayoutEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { initGamesApi, removeGames } from '../../redux/actions/games.action'
import Controller from '../Controller/Controller'
import Games from '../Games/Games'
import  Modal  from '../Modal/Modal'
import Loader from '../Loader/Loader'


export default function Home(props) {
  const message = 'No information was found for your query, try changing your search parameters.'
  const {games} = useSelector(state => state)
  const dispatch = useDispatch()
  const firstUpdate = useRef(true);
  const [page, setPage] = useState(1)
  const [sortRating, setSortRating] = useState('');
  const [platform, setPlatform] = useState('');
  const [sortData, setSortData] = useState('');
  const [fetching, setFetching] = useState(true)
  const [isModal, setModal] = useState(false)
  const [search, setSearch] = useState('');

  /* запрос на получение списка игр при первой инициализации, и при прокрутке скрола */
  useEffect(() =>{
   const payload = {platform: platform?.value, sortRating: sortRating?.value, sortData:sortData?.value, page}
    if(fetching && search === ''){
      dispatch(initGamesApi(payload))
      setPage(prev => prev + 1)
      setFetching(false) 
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[search, fetching, page, sortRating, sortData, platform])

   /* установка и удаление слушателя события на скрол */
   useEffect(() =>{
    document.addEventListener('scroll', scrolHandler)
     return function (){
       document.removeEventListener('scroll', scrolHandler)
     }
   },[])

   /* активизация модального окна в случае если нет результатов поиска игры  */
   useEffect(() =>{
     if (games.length < 1 && search !== '') {
      setModal(true)
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[games])

    /* при сбросе поиска чистит стейт игр и инициализирует загрузку нового стейта */
     useLayoutEffect(() => {
      if (firstUpdate.current) {
         firstUpdate.current = false;
         return;
       }
      if(search === ''){
        const payload = {page: 1}
        dispatch(removeGames())
        dispatch(initGamesApi(payload))
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [search]);

    /* следит за изменением параметров селекторов инициализирует загрузку игр согласно выбранных параметров */
    useLayoutEffect(() => {
     if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      const payload = {platform: platform?.value, sortRating: sortRating?.value, sortData:sortData?.value, page}
      dispatch(removeGames())
      dispatch(initGamesApi(payload))
     
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortRating, sortData, platform]);
  
   /* функция закрывающая модальное окно, инициализирует загрузку игр */
   const onClouseModal = () =>{
      setModal(false)
      setSearch('')
      setFetching(true)
    }

    /* следит за положением экрана инициализирует подгрузку игр в стейт изменяя Fetching */
   const scrolHandler = (event) => {
     if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight ) <100){
      setFetching(true)
     }
   }

  return (
 <>
 <Controller
 search={search} setSearch={setSearch} 
 setSortRating={setSortRating} 
 setSortData={setSortData} 
 setPlatform={setPlatform}  
 sortRating={sortRating} 
 sortData={sortData} 
 platform={platform}/>
 {!games[1]?<Loader/>:<Games games={games}/>}
 {isModal && < Modal onClouseModal={onClouseModal} message={message}/>}
 </>
  );
}

