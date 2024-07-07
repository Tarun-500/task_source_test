import  { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { GiDiamondRing, GiLinkedRings, GiDiamonds, GiEarrings, GiGlobeRing, GiDoubleRingedOrb, GiHeartNecklace, GiPearlEarring } from "react-icons/gi";
import { BsFillXDiamondFill, BsSuitDiamondFill } from "react-icons/bs";
import ProverShape from './ProverShape';

const checkboxesData = [
    { id: 1, label: 'Round', icon: <GiDiamondRing /> },
    { id: 2, label: 'Princess', icon: <GiLinkedRings /> },
    { id: 3, label: 'Cushion', icon: <BsFillXDiamondFill /> },
    { id: 4, label: 'Emerald', icon: <GiDiamonds /> },
    { id: 5, label: 'Oval', icon: <BsSuitDiamondFill /> },
    { id: 6, label: 'Radiant', icon: <GiEarrings /> },
    { id: 7, label: 'Asscher', icon: <GiGlobeRing /> },
    { id: 8, label: 'Marquies', icon: <GiDoubleRingedOrb /> },
    { id: 9, label: 'Heart', icon: <GiHeartNecklace /> },
    { id: 10, label: 'Pear', icon: <GiPearlEarring /> },
];

const Checkboxes = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => {
        setPopoverOpen(!popoverOpen);
    };

    return (
        <div className='checkboxes_wrapper'>
            <div className='mb-3 mb-lg-0'>
                <p> Shape <ProverShape isOpen={popoverOpen} toggle={togglePopover} /></p>
            </div>

            <div className='checkboxes d-flex flex-wrap align-items-center justify-content-start position-relative'>
                {checkboxesData.map((checkbox) => (
                    <FormGroup key={checkbox.id} check className='check-box'>
                        <Input type="checkbox" id={checkbox.id} />
                        <Label htmlFor={checkbox.id} check>
                            {checkbox.icon}
                            <p>{checkbox.label}</p>
                        </Label>
                    </FormGroup>
                ))}
            </div>
        </div>
    );
};

export default Checkboxes;
