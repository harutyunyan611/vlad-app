import {Col, Row} from "react-bootstrap";
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";

export const Profile = ({item, index, setShow, show, changeLink}) => {
    return <div className={'background-2 profile'} key={index}>
                <Row>
                    <Col xs={3}>
                        <img
                            src={item.profilePictureUrl}
                            alt="Avatar"
                            className="avatarImg"
                        />
                    </Col>
                    <Col className={'marginLeft30 p-0'}>
                        <Row>
                            <Col className={'p-0 fontSize16'}>
                              <span className={'font-weight-bold'}>
                                John Doe
                              </span>
                                <span> has requested </span>
                                <span className={'font-weight-bold'}>stich</span>
                            </Col>
                        </Row>
                        <Row className={'profile-price'}>{item.price}</Row>
                        {show === item.id && (
                            <>
                                <Row>
                                    <span className={'profile-linkText p-0'}>Link:</span>
                                    <div className={'p-0'}>
                                        <input
                                            type="text"
                                            value={item.contentLink}
                                            onChange={(e) => {changeLink(e,item.id)}}
                                            placeholder="https://"
                                            className={'profile-link-input'}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <Col xs={12} className={' p-0'}>
                                        <button xs={2} className={'buttonUpload'}>
                                            UPLOAD VIDEO
                                        </button>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row>
                            <Col className={' p-0'}>
                                {show === item.id ? (
                                    <button
                                        key={index}
                                        onClick={(e) => setShow(null)}
                                        className={
                                            'btn shadow-none showButton marginBottom19 text-purple  p-0 d-flex align-items-center'
                                        }
                                    >
                                        SHOW LESS <AiOutlineUp className={'fontSize14 marginLeft10'}/>
                                    </button>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={(e) => setShow(item.id)}
                                        className={
                                            'btn shadow-none showButton text-purple p-0 d-flex align-items-center'
                                        }
                                    >
                                        SHOW MORE <AiOutlineDown className={'fontSize14 marginLeft10'}/>
                                    </button>
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
}