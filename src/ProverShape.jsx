import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import { CiCircleQuestion } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const ProverShape = ({ isOpen, toggle }) => {
  return (
    <>
      <CiCircleQuestion id="question-icon" className='fs-4' onClick={toggle} />
      <Popover className='popover' placement="right" isOpen={isOpen} target="question-icon" toggle={toggle}>
        <PopoverBody className='shadow border-0'>
          <LiaTimesSolid className="position-absolute end-0 me-3 fs-5" onClick={toggle} />
          <h3> Diamonds Shape </h3>
          <img src="https://ion.r2net.com/Images/tooltips/Diamond_Shapes.jpg" className='img-fluid mb-4 mx-auto d-block' />
          <div className='desc'>
            <p className='mb-0'>
              Choose a diamond shape that suits both your ring setting and the recipient’s personality. If you’re looking for perfection, our True Hearts™ collection is available in Round Cut, Princess Cut, and Cushion Cut varieties.
            </p>
          </div>
        </PopoverBody>
      </Popover>
    </>
  );
};

ProverShape.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default ProverShape;
