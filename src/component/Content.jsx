import {
  Col,
  Row,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
// import { useSelector } from "react-redux";
import { profilesThunk, profileUpdateLink } from '../store/action-creators/profilesThunk'
import { useSelector } from 'react-redux'
import {Profile} from "./Profiles";

const Content = () => {
  const [radioValue, setRadioValue] = useState('new');
  const [show, setShow] = useState(0);
  const dispatch = useDispatch();
  const response = useSelector((state) => state);
  const radios = [{ name: 'new' }, { name: 'accepted' }, { name: 'declined' }]

  const changeLink = (e,id) => {
    dispatch(profileUpdateLink(e.target.value,id))
  }

  const setRequests = (name) => {
    dispatch(profilesThunk(name))
    setRadioValue(name)
  }

  useEffect(() => {
    dispatch(profilesThunk(radioValue))
  }, [radioValue])

  return (<>
    <Row>
        <Col
          className={
            'fontSize30 font-weight-bold requestsName marginLeft80'
          }
          >
          Requests
        </Col>
      </Row>
      <Row className={'marginTop37'}>
        <Col className={'marginLeftbutton'}>
          {radios.map((radio, idx) => (
            <button
            key={idx}
            className={
              '' + radioValue === radio.name
              ? 'buttonStyle'
              : 'buttonStyleUnActive'
            }
            value={radio.name}
              onClick={(e) => setRequests(radio.name)}
              >
              {radio.name.toUpperCase()}
            </button>
          ))}
        </Col>
      </Row>
      <Row className={'marginLeft80 marginTop30'}>
        <Row className={'d-flex align-items-start'}>
          {response.user.profiles.map((item, index) => <Profile changeLink={changeLink} item={item} index={index} show={show} setShow={setShow} />)}
        </Row>
      </Row>
    </>
  )
}
export default Content
