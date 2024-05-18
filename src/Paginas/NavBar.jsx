import { useAuth } from "../AuthProvider";
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
	const auth = useAuth();
	return (
		<div>
			<nav>
				<div className="navbar1">
					<div className="logo">
						
							<h1>Mena_joyeria</h1>
					
					</div>

					<ul>
						<li className='Home'>
							<NavLink to="/Dashboard">Home</NavLink>
						</li>
						<li className='Descuentos'>
							<NavLink to="/Descuentos">Descuentos</NavLink>
						</li>
						<li className='Productos'>
							<NavLink to="/Productos">Productos</NavLink>
						</li>
						<ul>
							<li className='Cerrar'>
								<NavLink to="/Login" onClick={() => auth.logOut()}>Cerrar Sesión</NavLink>
							</li>
						</ul>

					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
