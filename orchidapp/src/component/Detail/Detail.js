import React from 'react'
import { orchids } from '../Share/ListOfOrchids'
import { useParams } from 'react-router-dom'
import './Detail.css'

export default function Detail() {
    const detail = useParams();
    const orchid = orchids.find(obj => {
        return obj.id == detail.id;
    });

    return (
        <div className='container'>
            <div className='card'>
                <div className='badge'>{orchid.name}</div>
                <div className='orchids-tumb'>
                    <img src={`${orchid.img}`} />

                </div>
                <div className='orchid-detail'>

                    <p>- Rate:{orchid.rating}</p>
                    <p>- Origin:{orchid.origin}</p>
                    <p>- Category:{orchid.category}</p>
                    <p>- Description:{orchid.descirption}</p>

                </div>
            </div>
        </div>

    )
}
