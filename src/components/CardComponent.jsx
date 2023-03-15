import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { isEmpty } from 'lodash';
import { Card } from '@mui/material';
import ModalComponent from './ModalComponent';

export default function CardComponent(props) {

    const [pokemon, setPokemon] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
      axios.get(props.pokemon.url).then((resp) => {
        setPokemon(resp.data)
      })  
    }, [props.pokemon.url])

    const handleModal = () => {
        setShowModal(true)
    }

    return(
        <>
        { !isEmpty(pokemon) &&
            <Card className='card' onClick={() => handleModal()} style={{ backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`}}>
                <div className='card__title'>
                <span className='card__title-text'>{`#${pokemon.order}`}</span>
                </div>
            <div className="card__badge" style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`}}>
                <span className='card__badge-text'>{pokemon.types[0].type.name}</span>
            </div>
            <h3 className='card__name'>{pokemon.name.toUpperCase()}</h3>
            <img className='card__image' width={120} height={120} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="img"/>
            </Card>
        }
        <ModalComponent showModal={showModal} setShowModal={setShowModal} pokemon={pokemon}/>
        </>
    )
}
