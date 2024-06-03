import { useLocation } from 'react-router-dom';
import React from 'react';
import Encabezado from './Encabezado';

const Ayuda = () => {
    return (
        <div>
            <div>
                <Encabezado />
            </div>
            <div className='Ayuda'>
                <h3 className='text-center mt-5'>En Proceso</h3>
            </div>
        </div>

    )
}
export default Ayuda;