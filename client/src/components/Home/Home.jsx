import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { initGamesApi } from '../../redux/actions/games.action'
import Controller from '../Controller/Controller'
import Games from '../Games/Games'

export default function Home(props) {
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  const {games} = useSelector(state => state)
  const dispatch = useDispatch()
   
  useEffect(() =>{
    if(fetching){
      dispatch(initGamesApi(page))
      setPage(prev => prev + 1)
      setFetching(false) 
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[fetching])

   useEffect(() =>{
    document.addEventListener('scroll', scrolHandler)
     return function (){
       document.removeEventListener('scroll', scrolHandler)
     }
   },[])

   const scrolHandler = (event) => {
     if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight ) <100){
      setFetching(true)
     }
   }

  return (
 <>
 <Controller/>
 <Games games={games}/>
 </>
  );
}

