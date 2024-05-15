// import CIcon from '@coreui/icons-react';
// import { cilList  } from '@coreui/icons';
import { UisProcess } from '@iconscout/react-unicons-solid'
import "./card.css"

export function Card(params) {
    return (
        <div className='border'>
            <UisProcess size="30" color="#bd73e8" />
            <p className='titleClass'>{params.title}</p>
            <p className='descriptionClass'>{params.description}</p>
        </div>
    )
    
}