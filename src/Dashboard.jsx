import { useAuth } from "./AuthProvider";
import React from 'react';
import { NavLink } from 'react-router-dom';


import NavBar from "./Paginas/NavBar";
const Dashboard = () => {
    const auth = useAuth();
    return (
        <div>

            <NavBar />

            <div className="container">
                <div>
                    {/* <h1 className="Home">Home {auth.user}</h1> */}
                   {/*  <button onClick={() => auth.logOut()} className="btn-submit">
                        Cerrar sesión
                    </button> */}
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
            </div>
        </div>

    );
};
export default Dashboard;