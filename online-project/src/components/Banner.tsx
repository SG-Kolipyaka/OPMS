import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { Box } from '@mui/material'
import Styles from '../css/Banner.module.css'
import Image from '../assets/Header-bg.svg'
import Logo from '../assets/Logo.svg'
import LogOut from '../assets/Logout.svg'
import { logout } from '../Redux/AuthReducer/authSlice'
import { useDispatch } from 'react-redux'
import { type BannerProps } from '../Models/Typescriptmodel'

const Banner: React.FC<BannerProps> = ({ name }): JSX.Element => {
  const dispatch = useDispatch()

  const logoutCell = (): void => {
    dispatch(logout())
  }

  return (
    <Box className={Styles.BannerHeader}>
      <div className={Styles.oval}></div>
      <Box className={Styles.bannerImage}>
        <img src={Image} alt="" />
      </Box>

      <Box className={Styles.heading}>
        <img id={Styles.logoImage} src={Logo} alt="" />
        <h4 id={Styles.MainHeading}>
          <BiChevronLeft style={{ color: 'white' }} /> {name}
        </h4>

        <img
          onClick={logoutCell}
          className={Styles.LogoutImg}
          src={LogOut}
          alt=""
        />
      </Box>
    </Box>
  )
}

export default Banner
