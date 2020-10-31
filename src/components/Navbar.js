import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const data = [
	{
		id: 1,
		text: 'home',
		url: '/'
	},
	{
		id: 2,
		text: 'about',
		url: '/about/'
	}
];

const tempLinks = data.map((link) => {
	return (
		<li key={link.id}>
			<NavLink to={link.url}>{link.text}</NavLink>
		</li>
	);
});

const Navbar = () => {
	return <nav>{tempLinks}</nav>;
};

export default Navbar;
