import { Col, Row } from "reactstrap";
import Checkboxes from "./Checkboxes";
import Slider from "./SliderBar"
export default function DiamondTab() {
    return (
        <Row>
            <Col xs={12}>
                <h2> Diamond </h2>
            </Col>

            <Col xs={12} xl={6} className="my-auto pb-5">
            <Checkboxes />
            </Col>

            <Col xs={12} xl={6} className="my-auto pb-5">
            <Slider />
            </Col>
        </Row>
    )
}
