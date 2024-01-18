'use client'

import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

const Profile = () => {
	return (
		<Box className='flex flex-col mb-12'>
			<div className='w-12 h-12 bg-red-500 rounded-full mb-2'></div>
			<span className='text-xs'>Oliver Sykes</span>
		</Box>
	)
}

export default Profile
