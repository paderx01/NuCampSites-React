import { Container, Row, Col, Button } from 'reactstrap'
import CampsiteDetail from '../features/campsites/CampsiteDetail'
import CampsiteList from '../features/campsites/CampsitesList'
import { selectRandomCampsite } from '../features/campsites/campsitesSlice'

const CampsiteDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsiteList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsites={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
};

export default CampsiteDirectoryPage;