import React,{useEffect} from 'react'
import { Modal,Box,Typography } from '@mui/material'
import { isEmpty } from 'lodash';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 550,
  '@media (max-width: 600px)': {
    width: 300,
  },
  bgcolor: "rgba(247, 242, 242, 0.961)",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, 
};

const colors = ['#FC6B6E','#2196F3','#094BE8','#2196F3','#3ED1E0','#CF9B48'];


export default function ModalComponent(props) {

    const {showModal,setShowModal,pokemon} = props;

    useEffect(() => {
      console.log(pokemon)
    }, [pokemon])
    
    const handleClose = () => {
      setShowModal(false)
    }

  return (
    <Modal
    open={showModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <div className='modal__content'>
          <div className="modal__content-features" style={{backgroundColor: `var(--bg-poke-color-dark-${!isEmpty(pokemon) && pokemon.types[0].type.name})`}}>
            <div className="modal__content-featuresRight">
              <span className='modal__content-featuresHabitat'>
              </span>
            </div>
            <div className="modal__content-featuresLeft">
              <span className='modal__content-featuresHeight'>Height: {pokemon.height}</span>
              <span className='modal__content-featuresWeight'>weight : {pokemon.weight}</span>
              {
                !isEmpty(pokemon) && pokemon['past_types'].length > 0 && <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>
              }
            </div>
          </div>
          <div className="modal__content-description">
            <img className='modal__content-descriptionImage' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" />
            <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
            <p className='modal__content-descriptionParagraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat eligendi </p>
          </div>
          <div className="modal__content-other">
            <div className="modal__content-otherBreadcrumb">
              <h4 className='modal__content-otherBreadcrumbAbilities'>Abilities</h4>
              { 
               !isEmpty(pokemon) && pokemon.abilities.map(({ability})=> (
                  <span key={ability.name} className='modal__content-otherBreadcrumbAbility'>{ability.name}</span>
                ))
              }
            </div>
            <div className="modal__content-otherStats">
              <h4 className='modal__content-otherStatsTitle'>Stats</h4>
              { 
                !isEmpty(pokemon) && pokemon.stats.map((stat, index)=> (
                  <div className='modal__content-otherStat' key={stat.stat.name}>
                    <div className='modal__content-otherStatContent'>
                      <span className='modal__content-otherStatContentPower'>{stat.stat.name}</span>
                      <span className='modal__content-otherStatContentValue'>{stat.base_stat}</span>
                    </div>
                    <div className='modal__content-otherStatTimeLine'>
                      {
                        stat.base_stat >= 100 ?  
                          <div className='modal__content-otherStatTimeLineStat' style={{width: '100%', backgroundColor: `${colors[index]}`}}></div> :
                          <div className='modal__content-otherStatTimeLineStat' style={{width: `${stat.base_stat}%`, backgroundColor: `${colors[index]}`}}></div>
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          </div>
    </Box>
  </Modal>
  )
}
