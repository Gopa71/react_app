import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";





const RaTio = () => {

  const NetSal1 = localStorage.getItem('display')
  const NetSal2 = localStorage.getItem('display1')
  const NetSal3= localStorage.getItem('display2')
  const NetSal4 = localStorage.getItem('display3')
  const NetSal5 = localStorage.getItem('display4')
  const NetSal6 = localStorage.getItem('display5')
  const NetSal7 = localStorage.getItem('display6')
  const NetSal8 = localStorage.getItem('display7')


  const raMat1 = localStorage.getItem('raMat1')
  const PuRm1 = localStorage.getItem('PuRm1')
  const raMat12 = localStorage.getItem('raMat12')


  


  

  


  const [CoRaMa1,setCoRaMa1] = useState('');
  const [CoRaMa2,setCoRaMa2] = useState('');
  const [CoRaMa3,setCoRaMa3] = useState('');
  const [CoRaMa4,setCoRaMa4] = useState('');
  const [CoRaMa5,setCoRaMa5] = useState('');
  const [CoRaMa6,setCoRaMa6] = useState('');
  const [CoRaMa7,setCoRaMa7] = useState('');
  const [CoRaMa8,setCoRaMa8] = useState('');





  
  const sumCoRaMa1 = () => {
    try {
     
      const result = eval(
        `${raMat1 || 0} + ${PuRm1 || 0} - ${raMat12 || 0}`
      );
      setCoRaMa1(result);
    } catch (error) {
      setCoRaMa1("Input all ");
    }
  };

  useEffect(() => {
    sumCoRaMa1();
  }, [raMat1, PuRm1, raMat12]);

















  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center ">
        <div className="text-center">
          <h3 className="mt-4 font-bold text-xl items-center  ">
            Astral India Ltd
          </h3>
          <h4 className="items-center">A/c : M/s. Premier Fridge (P) Ltd.</h4>
        </div>
      </div>

      <div className=" ">
        <Container>
          <Row>
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl"
            >
              IV COMPARATIVE RATIOS
            </Col>

            <Col className="border border-solid" lg="8">
              <Row className="flex justify-center font-bold text-xl mb-3">
                For the year ended/ending (Rs. in Lacs)
              </Row>

              <Row>
                <Col className="text-center border border-solid">2020</Col>

                <Col className="text-center border border-solid">2021</Col>

                <Col className="text-center border border-solid">2022</Col>

                <Col className="text-center border border-solid">2023</Col>

                <Col className="text-center border border-solid">2024</Col>

                <Col className="text-center border border-solid">2025</Col>

                <Col className="text-center border border-solid">2026</Col>

                <Col className="text-center border border-solid">2027</Col>
              </Row>

              <Row className="text-center">
                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">Audited</Col>

                <Col className="text-center border-r border-solid">
                  Projected
                </Col>

                <Col className="text-center border-r border-solid">
                  Projected
                </Col>

                <Col>Projected</Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              III PROFITABILITY RATIOS:
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              NET SALES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              { NetSal2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetSal4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {NetSal8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Consumption of Raw Materials
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CoRaMa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CoRaMa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Production
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Production at Sale Value
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Production -Depn/Sales+inc in FG
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cost of Sales -Depn/Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              R M / Production Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / Sales%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operaing Cost / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Mfg Exp / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Selling/Admn Exp/Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fin. Charges / Cost of Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              II  FINANCIAL  INDICATORS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Tangible Net Worth ( TNW )
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase / Decrease 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW ( Quasi Equity) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW ( Quasi Equity) 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Working Capital (NWC)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Increase / Decrease 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Current Ratio
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL  /  T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL  /  T N W (Quasi Equity)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TOL /TNW (Adjusted)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>



          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Funded Debt / T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              III  PROFITABILITY RATIOS:
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NET SALES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              % rise (+) / fall (-) in sales 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operating Profit 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              P B D I T
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              NET  PROFIT 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
               Depreciation
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Cash accruals
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat1')}  */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* { localStorage.getItem('raMat2')}  */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat3')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat4')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat5')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat6')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat7')}  */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* { localStorage.getItem('raMat8')}  */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              PBDIT/ Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Operating Cost / Sales %
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / Sales (%)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Profit / TNW (%)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Sales / T N W
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              IV  BANK FINANCE :
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Total Bank Borrowings
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inc/ dec in Bank Borrowings%
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Bank Finance / Current Assets
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Inv + Receivables/ Sales (days)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              PBDIT/ Interest
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales1} */}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {/* {costsales2} */}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales4} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales5} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales7} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales8} */}
            </Col>
          </Row>







        </Container>
      </div>
    </div>
  );
};

export default RaTio;
