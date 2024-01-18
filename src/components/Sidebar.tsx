'use client'

import React from 'react'
import { Box } from '@mui/material'
import Profile from './Profile'

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
		<Box className='flex flex-col p-24'>
			<Profile />
			{mockMenu.map((item) => {
				return (
					<a className='mb-4' key={item.path} href={item.path}>
						{item.label}
					</a>
				)
			})}
		</Box>
	)
}
