import React from 'react'
import Navbar from '../components/Navbar/navbar'

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WctLassmt = () => {
  return (
    <div>
         <Navbar/>
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
             V -  WC / TL ASSESSMENT
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
          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              W C ASSESSMENT
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              CURRENT ASSETS 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Raw Materials
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
              (month's consumption)
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Stock - in - process
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
              (month's  Cost of Production)
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Finished Goods
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
              (month's cost of sales)
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
              Other consumable spares
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
              (month's consumption)
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
              TOTAL  INVENTORY
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
              RECEIVABLES
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
              (month's gross sales)
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
              Other Current Assets
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
              TOTAL CHARGEABLE CA
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

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              CL OTHER THAN BANK BORROWINGS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TRADE  CREDITORS
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
              (month's purchases)
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Other Current Liabilities
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              TOTAL  LIABILITIES
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

          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              Working Capital Gap  (A )
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              25% Margin on  C  A (B)
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              Actual/Projected N W C ( C )
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              A - B  (I)
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l  px-28 py-2 "
              lg="4"
            >
              A - C (II)
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l font-bold px-28 py-2 "
              lg="4"
            >
              M P B F (Lower of I or II)
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

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              Excess borrowings representing
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l font-bold px-28 py-2 "
              lg="4"
            >
              Shortfall in NWC
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

          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              FIXED  ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              Margin of Security
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Gross Fixed Assets
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
               WDV of Fixed Assets
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
              Term Loan O/s
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
              Gross Fixed Assets/ Term Loan O/s
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
               Margin 
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
              Security Margin
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
              Average Security Margin
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales3} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {/* {costsales6} */}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            </Col>
          </Row>


          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fixed Asset Coverage Ratio
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


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              IF Cash accrual &gt;  TL Installment
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
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2"
              lg="4"
            >
              Cash Accrual
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


          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TL Installment
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

          <Row >
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Difference
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
            <Col lg="4" className="flex justify-center items-center border  ">
            Net DSCR
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre1}
                // onChange={(e) => setdePre1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre2}
                // onChange={(e) => setdePre2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre3}
                // onChange={(e) => setdePre3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre4}
                // onChange={(e) => setdePre4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre5}
                // onChange={(e) => setdePre5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre6}
                // onChange={(e) => setdePre6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre7}
                // onChange={(e) => setdePre7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                // value={dePre8}
                // onChange={(e) => setdePre8(e.target.value)}
              />
            </Col>
          </Row>




          

















          </Container>
          </div>

      
    </div>
  )
}

export default WctLassmt
