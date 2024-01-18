'use client'

import React from 'react'
import Profile from './Profile'
import Logo from './Logo'

export default function Sidebar() {
	const mockMenu = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/explore',
			label: 'Explore',
		},
		{
			path: 'playlist',
			label: 'Playlist',
		},
	]

	return (
		<div className='flex flex-col justify-between p-24'>
			<div>
				<Logo />
				<Profile />
			</div>
			<div className='flex flex-col'>
				{mockMenu.map((item) => {
					return (
						<a
							className='mb-4 hover:text-secondary'
							key={item.path}
							href={item.path}
						>
							{item.label}
						</a>
					)
				})}
			</div>
			<div>Logout</div>
		</div>
	)
}
