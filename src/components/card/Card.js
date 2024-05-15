import CIcon from '@coreui/icons-react';
import { cilList  } from '@coreui/icons';
import "./card.css"

export function Card(params) {
    return (
        <div className='border'>
            <CIcon icon={cilList} className='icon'/>
            <p className='titleClass'>{params.title}</p>
            <p className='descriptionClass'>{params.description}</p>
        </div>
    )
    
}