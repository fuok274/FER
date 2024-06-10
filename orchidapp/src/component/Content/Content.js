import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'

import { orchids } from '../Share/ListOfOrchids'

export default function Content() {
    const urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu8zvuocmBoOVxA0RrpwxfMOqEaLR83ABMw&s'
    return (
        <div>
            <div className='Header'>
                <div className='header-title'>
                    Our Collection
                </div>
                <div className='header-img'>
                    <img src={urlImg} alt='/////' />
                </div>
            </div>
            <div className='container'>
                {orchids.map((orchids) => (
                    <div className='column' key={orchids.id}>
                        <div className='card'>
                            <img src={orchids.img} alt='' />

                            <h3>{orchids.name}</h3>
                            <h3>Rating:</h3>
                            <p className='title'>{orchids.rating}</p>
                            <Link to={`detail/${orchids.id}`}>
                                <p><button>More detail</button></p>
                            </Link>


                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
