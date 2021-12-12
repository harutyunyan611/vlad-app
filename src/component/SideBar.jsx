import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Rectangle from '../assets/icon/Rectangle39.png'
import Vector from '../assets/icon/Vector13.png'
import { useState } from 'react'
import { useHistory , useLocation } from 'react-router-dom'

const SideBar = () => {

  let navigate = useHistory();
  const location = useLocation();
    const [show, setShow] = useState(false)
  return (
    <>
      <div className={'menu mt-1'}>
        <AiOutlineMenu
          onClick={() => {
            setShow(true)
          }}
          className={'text-white fontSize30 mt-3'}
        />
      </div>

      <div
        className={'background-1 sidebar'}
        style={{ display: show && 'block' }}
      >
        <div className={'menu text-white'}>
          <AiOutlineClose
            className={'fontSize30'}
            onClick={() => {
              setShow(false)
            }}
          />
        </div>
        <Col className={'sidebarLink'}>
          <Row className={'marginTop40'}>
            <div className={'square m-auto'}/>
          </Row>
          <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              navigate.push(itemId)
            }}
            items={[
              {
                title: 'Home',
                itemId: '/home',
              },
              {
                title: 'My Profile',
                itemId: '/profile',
              },
              {
                title: 'Requests',
                itemId: '/requests',
                elemBefore: () => <div className={'imgIcon'}>
                  <img src={Rectangle} className={'rectangle'}/>
                  <img src={Vector} className={'vector'}/>
                  </div>
              },
              {
                title: 'Payment settings',
                itemId: '/paymentsettings',
              },
              {
                title: 'Contact Us',
                itemId: '/contactus',
              },
              {
                title: 'Terms & Conditions',
                itemId: '/termsconditions',
              },
              {
                title: 'Privacy Policy',
                itemId: '/privacypolicy',
              },
              {
                title: 'Sign Out',
                itemId: '/signout',
              },
            ]}
          />
        </Col>
      </div>
    </>
  )
}

export default SideBar
