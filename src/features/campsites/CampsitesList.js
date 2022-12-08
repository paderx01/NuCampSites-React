import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteCard from "./CampsiteCard";
import { Col,Row } from 'reactstrap';
import { selectAllCampsites } from ` .campsitesSlice`;
import { selectAll } from '@testing-library/user-event/dist/types/event';


const CampsitesList = (props) => {
    const campsites = selectAllCampsties();
    return (
       <Row className='ms-auto'>
            {CAMPSITES.map((campsite) => {
                        return (
                            <Col md='5' className='m-4' key={campsite.id}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    })}
       </Row>
    );
  }

  export default CampsitesList;