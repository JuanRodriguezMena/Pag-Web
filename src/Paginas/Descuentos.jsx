import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';
import "./Descuentos.css";
const Descuentos = () => {

    const navigate = useNavigate();
    return(
        <div>
            <NavBar/>
            <h1 className='T_descuentos'>Productos en descuentos</h1>
            <div className='ConProducto1'>
                
                <div className='ConAnillo1'>
                    <ul className='ObAnillo1'>
                        <li>Anillo de oro golfi 
                            ante $ 40 K 
                            ahora $ 25 K</li>
                    </ul>
                </div>
                <div className='ConCadena1'>
                    <ul className='ObCadena1'>
                        <li>Cadena de oro 
                            antes $ 120 k 
                            ahora $ 80 K 
                        </li>
                    </ul>
                </div>
                <div className='ConArete1'>
                    <ul className='ObArete1'>
                        <li>Aretes de diamantes 
                            antes $ 1.5 M
                            ahora $ 1 M
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    );

}
export default Descuentos;