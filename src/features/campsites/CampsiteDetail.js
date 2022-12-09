import { Card, CardImg, CardText, CardBody, Col } from 'reactsrap';
import { CardImgOverlay } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
    const { image, name, description } = campsites;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )

};

export default CampsiteDetail;