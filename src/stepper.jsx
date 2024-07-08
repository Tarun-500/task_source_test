import { useState } from "react";
import { Col, Row } from "reactstrap";
import { GiDiamondRing, GiDoorRingHandle } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import SettingTab from "./SettingTab";
import DiamondTab from "./diamondTab";
import RingTab from "./RingTab";

const Stepper = () => {
  const [tabs, setTabs] = useState([
    { id: 1, subHead: "Choose a", head: "Setting", content: <SettingTab />, icon: <GiDiamondRing /> },
    { id: 2, subHead: "Choose a", head: "Diamond", content: <DiamondTab />, icon: <IoDiamond /> },
    { id: 3, subHead: "Complete", head: "Ring", content: <RingTab />, icon: <GiDoorRingHandle /> },
  ]);

  const handleTabClick = (index) => {
    const newTabs = [...tabs];
    const [selectedTab] = newTabs.splice(index, 1);
    newTabs.unshift(selectedTab);
    setTabs(newTabs);
  };

  return (
    <>
      <Row>
        <Col className="mb-3">
          <div className="tab_bar">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab ${index === 0 ? "first-tab" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                <div className="head">
                  <h1>{index + 1}</h1>
                  <div>
                    <p>{tab.subHead}</p>
                    <h5>{tab.head}</h5>
                  </div>
                </div>
                <div className="icon">{tab.icon}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <div className="content py-4">
        {tabs[0].content}
      </div>
    </>
  );
};

export default Stepper;
