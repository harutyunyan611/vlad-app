import './App.css'
import SideBar from './component/SideBar'
import { Col, Row } from 'react-bootstrap'
import { Provider } from 'react-redux'
import { store } from './store'
import Routes from './routes/Routes'

function App() {
  return (
    <Provider store={store}>
      <Row className={'m-0'}>
        <SideBar />
        <Col className={'content'}>
          <Routes />
        </Col>
      </Row>
    </Provider>
  )
}

export default App
