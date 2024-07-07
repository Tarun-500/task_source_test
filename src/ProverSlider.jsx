import { useState } from 'react';
import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import { CiCircleQuestion } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { GiDiamondRing, GiLinkedRings, GiDiamonds, GiEarrings } from "react-icons/gi";

const tabData = [
    {
        id: 1,
        name: 'Good',
        icon: <GiDiamondRing />,
        content: 'Suitable for various settings, offering a balance of quality and value.'
    },
    {
        id: 2,
        name: 'Very Good',
        icon: <GiLinkedRings />,
        content: 'Higher quality, with better brilliance and value.'
    },
    {
        id: 3,
        name: 'Ideal',
        icon: <GiDiamonds />,
        content: 'Premium quality, showcasing excellent brilliance and fire.'
    },
    {
        id: 4,
        name: 'True Hearts™',
        icon: <GiEarrings />,
        content: 'Exquisite perfection, ideal for the most discerning.'
    }
];

const ProverSlider = ({ isOpen, toggle }) => {
    const [activeTab, setActiveTab] = useState(1);

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <>
            <CiCircleQuestion id="sliderProver" className='fs-4' onClick={toggle} />
            <Popover className='popover popover-slider' placement="right" isOpen={isOpen} target="sliderProver" toggle={toggle}>
                <PopoverBody className='shadow border-0'>
                    <LiaTimesSolid className="position-absolute end-0 me-3 fs-5" onClick={toggle} />
                    <h3> Diamonds Cut </h3>

                    <div className="tab-content display-1 text-center p-3">
                        {tabData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                {tab.icon}
                            </div>
                        ))}
                    </div>


                    <div className="popover-tabs">
                        {tabData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`popover-tabs-item ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => toggleTab(tab.id)}
                            >
                                {tab.name}
                            </div>
                        ))}
                    </div>
                    <div className="tab-content mt-3">
                        {tabData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                <div className='desc'>
                                    <p className='mb-0'>{tab.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </PopoverBody>
            </Popover>
        </>
    );
};

ProverSlider.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};

export default ProverSlider;
