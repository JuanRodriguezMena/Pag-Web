import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';
import "./Productos.css";
const Productos = () => {

    const navigate = useNavigate();
    return(
        <div>
            <NavBar/>
            <h1 className='TProductos'>Productos</h1>
            <div className='ConProducto'>
                
                <div className='ConAnillo'>
                    <lu className='ObAnillo'>
                        <li>Anillo bañado en oro 18 quilates
                            $ 5 M
                        </li>
                        

        
                    </lu>
                    
                </div>
                <div className='ConCadena'>
                    <ul className='ObCadena'>
                        <li>Cadena de oro 24 quilate 
                             $ 20 M
                        </li>
                    </ul>
                </div>
                <div className='ConReloj'>
                    <ul className='ObReloj'>
                        <li>Reloj de bolsillo bañado en oro 
                            6 M
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>

    );

}
export default Productos;