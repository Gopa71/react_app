import React from 'react'
import Navbar from '../components/Navbar/navbar'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const KfI = () => {
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
              KEY FINANCIAL INDICATORS
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

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Sales
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
              Net Profit  After Tax
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
              Net Working Capital
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
              Current Ratio
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
              TNW
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
              TNW ( Adjusted)
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
              TOL / TNW
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
              TOL / TNW (Adjusted) 
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
              TOL / TNW ( Quasi Equity) 
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
              Funded Debt  / TNW
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
              Gross Fixed Asset/Term Loan
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

          <Row className='mt-4' >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              ABRIDGED FINANCIAL 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row  >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              LIABILITIES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Capital & Reserves
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
               Long Term Liabilities
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
              Current Liabilities
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
              TOTAL LIABILITIES 
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

          <Row  >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              ASSETS      
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Fixed Assets 
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
              Non Current Assets
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
              Current Assets 
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
              Intangible Assets
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
              TOTAL ASSETS 
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


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               II   MOVEMENT OF  T N W 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              TNW  Opening Balance
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
              ADD Profit / Loss After Tax
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
              Increase in Capital 
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
              Less Drawings 
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
              Closing Balance 
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


          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               III   INVENTORY HOLDINGS 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              FINISHED GOODS
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
              RECEIVABLES
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
              (month's gross sales)
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

          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               IV  NAYAK  COMMITTEE
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Net Sales
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
              25% of Net Sales
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
              Less 5% Margin
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
              Eligible Bank Borrowings
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
              Estimated NWC ( WC Margin)
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
              NWC  SHORTFALL
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


          
          <Row className='mt-4'>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y font-bold  text-l px-28 py-2 "
              lg="4"
            >
               V  STRUCTURING  OF  LIMITS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
                2020
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              2021
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              2022
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2023
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2024
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2025
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2026
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              2027
            </Col>
          </Row>

          
          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 "
              lg="4"
            >
              Stock Value
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
              Sundry Creditors
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
              Paid Stock
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
              Margin 25%
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
              Drawing Power
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
              Book Debts
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
              Margin 50%
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
              Drawing Power
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
              Total Eligible Limit
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
              Bank Outstanding
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










          </Container>
          </div>

      
    </div>
  )
}

export default KfI
