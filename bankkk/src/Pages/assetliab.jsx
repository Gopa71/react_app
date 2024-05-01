import React, { useState } from 'react'
import Navbar from '../components/Navbar/navbar'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
// import Opstmt from './Opstm';










function Assetliab  () {


  

  const[WhYsNo1,setWhYsNo1] = useState('');
  const[WhYsNo2,setWhYsNo2] = useState('');
  const[WhYsNo3,setWhYsNo3] = useState('');
  const[WhYsNo4,setWhYsNo4] = useState('');
  const[WhYsNo5,setWhYsNo5] = useState('');
  const[WhYsNo6,setWhYsNo6] = useState('');
  const[WhYsNo7,setWhYsNo7] = useState('');
  const[WhYsNo8,setWhYsNo8] = useState('');





  
  const[DifIa1,setDifIa1] = useState('');
  const[DifIa2,setDifIa2] = useState('');
  const[DifIa3,setDifIa3] = useState('');
  const[DifIa4,setDifIa4] = useState('');
  const[DifIa5,setDifIa5] = useState('');
  const[DifIa6,setDifIa6] = useState('');
  const[DifIa7,setDifIa7] = useState('');
  const[DifIa8,setDifIa8] = useState('');


  
 

  

  const[ToLib1,setToLib1] = useState('');
  const[ToLib2,setToLib2] = useState('');
  const[ToLib3,setToLib3] = useState('');
  const[ToLib4,setToLib4] = useState('');
  const[ToLib5,setToLib5] = useState('');
  const[ToLib6,setToLib6] = useState('');
  const[ToLib7,setToLib7] = useState('');
  const[ToLib8,setToLib8] = useState('');

 




  
  const[PrLoAc11,setPrLoAc11] = useState('');
  const[PrLoAc12,setPrLoAc12] = useState('');
  const[PrLoAc13,setPrLoAc13] = useState('');
  const[PrLoAc14,setPrLoAc14] = useState('');
  const[PrLoAc15,setPrLoAc15] = useState('');
  const[PrLoAc16,setPrLoAc16] = useState('');
  const[PrLoAc17,setPrLoAc17] = useState('');
  const[PrLoAc18,setPrLoAc18] = useState('');




  
  const[NetWo1,setNetWo1] = useState('');
  const[NetWo2,setNetWo2] = useState('');
  const[NetWo3,setNetWo3] = useState('');
  const[NetWo4,setNetWo4] = useState('');
  const[NetWo5,setNetWo5] = useState('');
  const[NetWo6,setNetWo6] = useState('');
  const[NetWo7,setNetWo7] = useState('');
  const[NetWo8,setNetWo8] = useState('');


   










  const[ReSur1,setReSur1] = useState('');
  const[ReSur2,setReSur2] = useState('');
  const[ReSur3,setReSur3] = useState('');
  const[ReSur4,setReSur4] = useState('');
  const[ReSur5,setReSur5] = useState('');
  const[ReSur6,setReSur6] = useState('');
  const[ReSur7,setReSur7] = useState('');
  const[ReSur8,setReSur8] = useState('');




  

  const[PaUpCa1,setPaUpCa1] = useState('');
  const[PaUpCa2,setPaUpCa2] = useState('');
  const[PaUpCa3,setPaUpCa3] = useState('');
  const[PaUpCa4,setPaUpCa4] = useState('');
  const[PaUpCa5,setPaUpCa5] = useState('');
  const[PaUpCa6,setPaUpCa6] = useState('');
  const[PaUpCa7,setPaUpCa7] = useState('');
  const[PaUpCa8,setPaUpCa8] = useState('');

  
  const[ToOuLi1,setToOuLi1] = useState('');
  const[ToOuLi2,setToOuLi2] = useState('');
  const[ToOuLi3,setToOuLi3] = useState('');
  const[ToOuLi4,setToOuLi4] = useState('');
  const[ToOuLi5,setToOuLi5] = useState('');
  const[ToOuLi6,setToOuLi6] = useState('');
  const[ToOuLi7,setToOuLi7] = useState('');
  const[ToOuLi8,setToOuLi8] = useState('');





  const OtLoTeLi1 =  localStorage.getItem('_____')
  const OtLoTeLi2 =  localStorage.getItem('_____')
  const OtLoTeLi3 =  localStorage.getItem('_____')
  const OtLoTeLi4 =  localStorage.getItem('_____')
  const OtLoTeLi5 =  localStorage.getItem('_____')
  const OtLoTeLi6 =  localStorage.getItem('_____')
  const OtLoTeLi7 =  localStorage.getItem('_____')
  const OtLoTeLi8 =  localStorage.getItem('_____')



  
  
  const[LoTeLi1,setLoTeLi1] = useState('');
  const[LoTeLi2,setLoTeLi2] = useState('');
  const[LoTeLi3,setLoTeLi3] = useState('');
  const[LoTeLi4,setLoTeLi4] = useState('');
  const[LoTeLi5,setLoTeLi5] = useState('');
  const[LoTeLi6,setLoTeLi6] = useState('');
  const[LoTeLi7,setLoTeLi7] = useState('');
  const[LoTeLi8,setLoTeLi8] = useState('');







  const[TeLoIn1,setTeLoIn1] = useState('');
  const[TeLoIn2,setTeLoIn2] = useState('');
  const[TeLoIn3,setTeLoIn3] = useState('');
  const[TeLoIn4,setTeLoIn4] = useState('');
  const[TeLoIn5,setTeLoIn5] = useState('');
  const[TeLoIn6,setTeLoIn6] = useState('');
  const[TeLoIn7,setTeLoIn7] = useState('');
  const[TeLoIn8,setTeLoIn8] = useState('');



  
  const[TeLoOtB1,setTeLoOtB1] = useState('');
  const[TeLoOtB2,setTeLoOtB2] = useState('');
  const[TeLoOtB3,setTeLoOtB3] = useState('');
  const[TeLoOtB4,setTeLoOtB4] = useState('');
  const[TeLoOtB5,setTeLoOtB5] = useState('');
  const[TeLoOtB6,setTeLoOtB6] = useState('');
  const[TeLoOtB7,setTeLoOtB7] = useState('');
  const[TeLoOtB8,setTeLoOtB8] = useState('');




  

  const[TeLoIo1,setTeLoIo1] = useState('');
  const[TeLoIo2,setTeLoIo2] = useState('');
  const[TeLoIo3,setTeLoIo3] = useState('');
  const[TeLoIo4,setTeLoIo4] = useState('');
  const[TeLoIo5,setTeLoIo5] = useState('');
  const[TeLoIo6,setTeLoIo6] = useState('');
  const[TeLoIo7,setTeLoIo7] = useState('');
  const[TeLoIo8,setTeLoIo8] = useState('');


  

  const[ToCuLi1,setToCuLi1] = useState('');
  const[ToCuLi2,setToCuLi2] = useState('');
  const[ToCuLi3,setToCuLi3] = useState('');
  const[ToCuLi4,setToCuLi4] = useState('');
  const[ToCuLi5,setToCuLi5] = useState('');
  const[ToCuLi6,setToCuLi6] = useState('');
  const[ToCuLi7,setToCuLi7] = useState('');
  const[ToCuLi8,setToCuLi8] = useState('');

  
// other current liabilities
  const[OtCuLi1,setOtCuLi1] = useState('');
  const[OtCuLi2,setOtCuLi2] = useState('');
  const[OtCuLi3,setOtCuLi3] = useState('');
  const[OtCuLi4,setOtCuLi4] = useState('');
  const[OtCuLi5,setOtCuLi5] = useState('');
  const[OtCuLi6,setOtCuLi6] = useState('');
  const[OtCuLi7,setOtCuLi7] = useState('');
  const[OtCuLi8,setOtCuLi8] = useState('');


  const[SunCrTr1,setSunCrTr1] = useState('');
  const[SunCrTr2,setSunCrTr2] = useState('');
  const[SunCrTr3,setSunCrTr3] = useState('');
  const[SunCrTr4,setSunCrTr4] = useState('');
  const[SunCrTr5,setSunCrTr5] = useState('');
  const[SunCrTr6,setSunCrTr6] = useState('');
  const[SunCrTr7,setSunCrTr7] = useState('');
  const[SunCrTr8,setSunCrTr8] = useState('');


  const[WcFrBI1,setWcFrBI1] = useState('');
  const[WcFrBI2,setWcFrBI2] = useState('');
  const[WcFrBI3,setWcFrBI3] = useState('');
  const[WcFrBI4,setWcFrBI4] = useState('');
  const[WcFrBI5,setWcFrBI5] = useState('');
  const[WcFrBI6,setWcFrBI6] = useState('');
  const[WcFrBI7,setWcFrBI7] = useState('');
  const[WcFrBI8,setWcFrBI8] = useState('');




  const[wcBrIob1,setwcBrIob1] = useState('');
  const[wcBrIob2,setwcBrIob2] = useState('');
  const[wcBrIob3,setwcBrIob3] = useState('');
  const[wcBrIob4,setwcBrIob4] = useState('');
  const[wcBrIob5,setwcBrIob5] = useState('');
  const[wcBrIob6,setwcBrIob6] = useState('');
  const[wcBrIob7,setwcBrIob7] = useState('');
  const[wcBrIob8,setwcBrIob8] = useState('');

  
  const[ToAs1,setToAs1] = useState('');
  const[ToAs2,setToAs2] = useState('');
  const[ToAs3,setToAs3] = useState('');
  const[ToAs4,setToAs4] = useState('');
  const[ToAs5,setToAs5] = useState('');
  const[ToAs6,setToAs6] = useState('');
  const[ToAs7,setToAs7] = useState('');
  const[ToAs8,setToAs8] = useState('');



  

  const[ToIa1,setToIa1] = useState('');
  const[ToIa2,setToIa2] = useState('');
  const[ToIa3,setToIa3] = useState('');
  const[ToIa4,setToIa4] = useState('');
  const[ToIa5,setToIa5] = useState('');
  const[ToIa6,setToIa6] = useState('');
  const[ToIa7,setToIa7] = useState('');
  const[ToIa8,setToIa8] = useState('');

  const[DeReEx1,setDeReEx1] = useState('');
  const[DeReEx2,setDeReEx2] = useState('');
  const[DeReEx3,setDeReEx3] = useState('');
  const[DeReEx4,setDeReEx4] = useState('');
  const[DeReEx5,setDeReEx5] = useState('');
  const[DeReEx6,setDeReEx6] = useState('');
  const[DeReEx7,setDeReEx7] = useState('');
  const[DeReEx8,setDeReEx8] = useState('');



  

  const[PrLoAc1,setPrLoAc1] = useState('');
  const[PrLoAc2,setPrLoAc2] = useState('');
  const[PrLoAc3,setPrLoAc3] = useState('');
  const[PrLoAc4,setPrLoAc4] = useState('');
  const[PrLoAc5,setPrLoAc5] = useState('');
  const[PrLoAc6,setPrLoAc6] = useState('');
  const[PrLoAc7,setPrLoAc7] = useState('');
  const[PrLoAc8,setPrLoAc8] = useState('');


  const[ExNoWrOf1,setExNoWrOf1] = useState('');
  const[ExNoWrOf2,setExNoWrOf2] = useState('');
  const[ExNoWrOf3,setExNoWrOf3] = useState('');
  const[ExNoWrOf4,setExNoWrOf4] = useState('');
  const[ExNoWrOf5,setExNoWrOf5] = useState('');
  const[ExNoWrOf6,setExNoWrOf6] = useState('');
  const[ExNoWrOf7,setExNoWrOf7] = useState('');
  const[ExNoWrOf8,setExNoWrOf8] = useState('');


  const ToNoCuAs1 =  localStorage.getItem('ToNoCuAs1')
  const ToNoCuAs2 =  localStorage.getItem('ToNoCuAs2')
  const ToNoCuAs3 =  localStorage.getItem('ToNoCuAs3')
  const ToNoCuAs4 =  localStorage.getItem('ToNoCuAs4')
  const ToNoCuAs5 =  localStorage.getItem('ToNoCuAs5')
  const ToNoCuAs6 =  localStorage.getItem('ToNoCuAs6')
  const ToNoCuAs7 =  localStorage.getItem('ToNoCuAs7')
  const ToNoCuAs8 =  localStorage.getItem('ToNoCuAs8')
  

  const[ToNca1,setToNca1] = useState('');
  const[ToNca2,setToNca2] = useState('');
  const[ToNca3,setToNca3] = useState('');
  const[ToNca4,setToNca4] = useState('');
  const[ToNca5,setToNca5] = useState('');
  const[ToNca6,setToNca6] = useState('');
  const[ToNca7,setToNca7] = useState('');
  const[ToNca8,setToNca8] = useState('');





  
  const[InLoTo1,setInLoTo1] = useState('');
  const[InLoTo2,setInLoTo2] = useState('');
  const[InLoTo3,setInLoTo3] = useState('');
  const[InLoTo4,setInLoTo4] = useState('');
  const[InLoTo5,setInLoTo5] = useState('');
  const[InLoTo6,setInLoTo6] = useState('');
  const[InLoTo7,setInLoTo7] = useState('');
  const[InLoTo8,setInLoTo8] = useState('');

  


  const dePre1= localStorage.getItem('dePre1');
  const dePre2= localStorage.getItem('dePre2');
  const dePre3= localStorage.getItem('dePre3');
  const dePre4= localStorage.getItem('dePre4');
  const dePre5= localStorage.getItem('dePre5');
  const dePre6= localStorage.getItem('dePre6');
  const dePre7= localStorage.getItem('dePre7');
  const dePre8= localStorage.getItem('dePre8');


  
  
  const[NetFiAs1,setNetFiAs1] = useState('');
  const[NetFiAs2,setNetFiAs2] = useState('');
  const[NetFiAs3,setNetFiAs3] = useState('');
  const[NetFiAs4,setNetFiAs4] = useState('');
  const[NetFiAs5,setNetFiAs5] = useState('');
  const[NetFiAs6,setNetFiAs6] = useState('');
  const[NetFiAs7,setNetFiAs7] = useState('');
  const[NetFiAs8,setNetFiAs8] = useState('');

   
  





  
  const[GroBlo1,setGroBlo1] = useState('');
  const[GroBlo2,setGroBlo2] = useState('');
  const[GroBlo3,setGroBlo3] = useState('');
  const[GroBlo4,setGroBlo4] = useState('');
  const[GroBlo5,setGroBlo5] = useState('');
  const[GroBlo6,setGroBlo6] = useState('');
  const[GroBlo7,setGroBlo7] = useState('');
  const[GroBlo8,setGroBlo8] = useState('');





const[CaWoPr1,setCaWoPr1] = useState('');
const[CaWoPr2,setCaWoPr2] = useState('');
const[CaWoPr3,setCaWoPr3] = useState('');
const[CaWoPr4,setCaWoPr4] = useState('');
const[CaWoPr5,setCaWoPr5] = useState('');
const[CaWoPr6,setCaWoPr6] = useState('');
const[CaWoPr7,setCaWoPr7] = useState('');
const[CaWoPr8,setCaWoPr8] = useState('');


  const [FuFiSun1,setFuFiSun1] = useState('');
  const [FuFiSun2,setFuFiSun2] = useState('');
  const [FuFiSun3,setFuFiSun3] = useState('');
  const [FuFiSun4,setFuFiSun4] = useState('');
  const [FuFiSun5,setFuFiSun5] = useState('');
  const [FuFiSun6,setFuFiSun6] = useState('');
  const [FuFiSun7,setFuFiSun7] = useState('');
  const [FuFiSun8,setFuFiSun8] = useState('');



  

  const [LanBu1,setLanBu1] = useState('');
  const [LanBu2,setLanBu2] = useState('');
  const [LanBu3,setLanBu3] = useState('');
  const [LanBu4,setLanBu4] = useState('');
  const [LanBu5,setLanBu5] = useState('');
  const [LanBu6,setLanBu6] = useState('');
  const [LanBu7,setLanBu7] = useState('');
  const [LanBu8,setLanBu8] = useState('');

  const [PlaMac1,setPlaMac1] = useState('');
  const [PlaMac2,setPlaMac2] = useState('');
  const [PlaMac3,setPlaMac3] = useState('');
  const [PlaMac4,setPlaMac4] = useState('');
  const [PlaMac5,setPlaMac5] = useState('');
  const [PlaMac6,setPlaMac6] = useState('');
  const [PlaMac7,setPlaMac7] = useState('');
  const [PlaMac8,setPlaMac8] = useState('');


  
  const [FixAs1,setFixAs1] = useState('');
  const [FixAs2,setFixAs2] = useState('');
  const [FixAs3,setFixAs3] = useState('');
  const [FixAs4,setFixAs4] = useState('');
  const [FixAs5,setFixAs5] = useState('');
  const [FixAs6,setFixAs6] = useState('');
  const [FixAs7,setFixAs7] = useState('');
  const [FixAs8,setFixAs8] = useState('');
  
  
  
  const [conSuSp8,setconSuSp8] = useState('');
  const [conSuSp7,setconSuSp7] = useState('');
  const [conSuSp6,setconSuSp6] = useState('');
  const [conSuSp5,setconSuSp5] = useState('');
  const [conSuSp4,setconSuSp4] = useState('');
  const [conSuSp3,setconSuSp3] = useState('');
  const [conSuSp2,setconSuSp2] = useState('');
  const [conSuSp1,setconSuSp1] = useState('');


  
const [TrDeb8,setTrDeb8] = useState('');
const [TrDeb7,setTrDeb7] = useState('');
const [TrDeb6,setTrDeb6] = useState('');
const [TrDeb5,setTrDeb5] = useState('');
const [TrDeb4,setTrDeb4] = useState('');
const [TrDeb3,setTrDeb3] = useState('');
const [TrDeb2,setTrDeb2] = useState('');
const [TrDeb1,setTrDeb1] = useState('');
  
  const [display,setDisplay] =useState('');
  const [ToCuAs2,setToCuAs2] =useState('');
  const [ToCuAs3,setToCuAs3] =useState('');
  const [ToCuAs4,setToCuAs4] =useState('');
  const [ToCuAs5,setToCuAs5] =useState('');
  const [ToCuAs6,setToCuAs6] =useState('');
  const [ToCuAs7,setToCuAs7] =useState('');
  const [ToCuAs8,setToCuAs8] =useState('');


  const val1 = localStorage.getItem('raMat12');
  
  const val2 = localStorage.getItem('wrkPo12');
  const val3 =localStorage.getItem('FiGood12');
  const val6= localStorage.getItem('raMat1');

  const raMat13 = localStorage.getItem('raMat13');
  const raMat14 = localStorage.getItem('raMat14');
  const raMat15 = localStorage.getItem('raMat15');
  const raMat16 = localStorage.getItem('raMat16');
  const raMat17 = localStorage.getItem('raMat17');
  const raMat18 = localStorage.getItem('raMat18');
  const raMat19 = localStorage.getItem('raMat19');


  
  const wrkPo13 = localStorage.getItem('wrkPo13');
  const wrkPo14 = localStorage.getItem('wrkPo14');
  const wrkPo15 = localStorage.getItem('wrkPo15');
  const wrkPo16 = localStorage.getItem('wrkPo16');
  const wrkPo17 = localStorage.getItem('wrkPo17');
  const wrkPo18 = localStorage.getItem('wrkPo18');
  const wrkPo19 = localStorage.getItem('wrkPo19');



  const FiGood13 =localStorage.getItem('FiGood13');
  const FiGood14 =localStorage.getItem('FiGood14');
  const FiGood15 =localStorage.getItem('FiGood15');
  const FiGood16 =localStorage.getItem('FiGood16');
  const FiGood17 =localStorage.getItem('FiGood17');
  const FiGood18 =localStorage.getItem('FiGood18');
  const FiGood19 =localStorage.getItem('FiGood19');





  
  const sumToCuAs4 = () => {
    try {

      
      const result = eval(`${raMat14 || 0} + ${wrkPo14 || 0} + ${FiGood14 || 0} + ${conSuSp3 || 0} + ${TrDeb3 || 0}  + ${raMat13 || 0}`);
      setToCuAs4(result);
    } catch (error) {
      setToCuAs4("Input all "); 
    }
  };

  useEffect(() => {
    sumToCuAs4();
  }, [raMat14, wrkPo14, FiGood14, conSuSp3, TrDeb3, raMat13]);



  const sumToCuAs5 = () => {
    try {
  
      
      const result = eval(`${raMat15 || 0} + ${wrkPo15 || 0} + ${FiGood15 || 0} + ${conSuSp4 || 0} + ${TrDeb4 || 0}  + ${raMat14 || 0}`);
      setToCuAs5(result);
    } catch (error) {
      setToCuAs5("Input all "); 
    }
  };
  
  useEffect(() => {
    sumToCuAs5();
  }, [raMat15, wrkPo15, FiGood15, conSuSp4, TrDeb4, raMat14]);

  
  const sumToCuAs6 = () => {
    try {
  
      
      const result = eval(`${raMat16 || 0} + ${wrkPo16 || 0} + ${FiGood16 || 0} + ${conSuSp5 || 0} + ${TrDeb5 || 0}  + ${raMat15 || 0}`);
      setToCuAs6(result);
    } catch (error) {
      setToCuAs6("Input all "); 
    }
  };
  
  useEffect(() => {
    sumToCuAs6();
  }, [raMat16, wrkPo16, FiGood16, conSuSp5, TrDeb5, raMat15]);

  
  const sumToCuAs7 = () => {
    try {
  
      
      const result = eval(`${raMat17 || 0} + ${wrkPo17 || 0} + ${FiGood17 || 0} + ${conSuSp6 || 0} + ${TrDeb6 || 0}  + ${raMat16 || 0}`);
      setToCuAs7(result);
    } catch (error) {
      setToCuAs7("Input all "); 
    }
  };
  
  useEffect(() => {
    sumToCuAs7();
  }, [raMat17, wrkPo17, FiGood17, conSuSp6, TrDeb6, raMat16]);

  
  const sumToCuAs8 = () => {
    try {
  
      
      const result = eval(`${raMat18 || 0} + ${wrkPo18 || 0} + ${FiGood18 || 0} + ${conSuSp7 || 0} + ${TrDeb7 || 0}  + ${raMat17 || 0}`);
      setToCuAs8(result);
    } catch (error) {
      setToCuAs8("Input all "); 
    }
  };
  
  useEffect(() => {
    sumToCuAs8();
  }, [raMat18, wrkPo18, FiGood18, conSuSp7, TrDeb7, raMat17]);
  




  



  const sumToCuAs2 = () => {
    try {

      
      const result = eval(`${raMat13 || 0} + ${wrkPo13 || 0} + ${FiGood13 || 0} + ${conSuSp2 || 0} + ${TrDeb2 || 0}  + ${val1 || 0}`);
      setToCuAs2(result);
    } catch (error) {
      setToCuAs2("Input all "); 
    }
  };

  useEffect(() => {
    sumToCuAs2();
  }, [raMat13, wrkPo13, FiGood13, conSuSp2, TrDeb2, val1]);


  
  const sumToCuAs3 = () => {
    try {

      
      const result = eval(`${raMat14 || 0} + ${wrkPo14 || 0} + ${FiGood14 || 0} + ${conSuSp3 || 0} + ${TrDeb3 || 0}  + ${raMat13 || 0}`);
      setToCuAs3(result);
    } catch (error) {
      setToCuAs3("Input all "); 
    }
  };

  useEffect(() => {
    sumToCuAs3();
  }, [raMat14, wrkPo14, FiGood14, conSuSp3, TrDeb3, raMat13]);

  
  

  // const 


  const sumToCuAs1 = () => {
    try {

      
      const result = eval(`${val1 || 0} + ${val2 || 0} + ${val3 || 0} + ${conSuSp1 || 0} + ${TrDeb1 || 0}  + ${val6 || 0}`);
      setDisplay(result);
    } catch (error) {
      setDisplay("Input all "); 
    }
  };

  useEffect(() => {
    sumToCuAs1();
  }, [val1,val2,val3,conSuSp1,TrDeb1,val6]);


  // -----------------------------

  
  const sumsetGroBlo1 = () => {
    try {

      
      const result = eval(`${LanBu1 || 0} + ${PlaMac1 || 0} + ${FuFiSun1 || 0} + ${CaWoPr1 || 0} `);
      setGroBlo1(result);
    } catch (error) {
      setGroBlo1("Input all "); 
    }
  };

  useEffect(() => {
    sumsetGroBlo1();
  }, [LanBu1, PlaMac1, FuFiSun1, CaWoPr1]);

  const sumsetGroBlo2 = () => {
    try {
  
      
      const result = eval(`${LanBu2 || 0} + ${PlaMac2 || 0} + ${FuFiSun2 || 0} + ${CaWoPr2 || 0} `);
      setGroBlo2(result);
    } catch (error) {
      setGroBlo2("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo2();
  }, [LanBu2, PlaMac2, FuFiSun2, CaWoPr2]);

  const sumsetGroBlo3 = () => {
    try {
  
      
      const result = eval(`${LanBu3 || 0} + ${PlaMac3 || 0} + ${FuFiSun3 || 0} + ${CaWoPr3 || 0} `);
      setGroBlo3(result);
    } catch (error) {
      setGroBlo3("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo3();
  }, [LanBu3, PlaMac3, FuFiSun3, CaWoPr3]);

  const sumsetGroBlo4 = () => {
    try {
  
      
      const result = eval(`${LanBu4 || 0} + ${PlaMac4 || 0} + ${FuFiSun4 || 0} + ${CaWoPr4 || 0} `);
      setGroBlo4(result);
    } catch (error) {
      setGroBlo4("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo4();
  }, [LanBu4, PlaMac4, FuFiSun4, CaWoPr4]);

  const sumsetGroBlo5 = () => {
    try {
  
      
      const result = eval(`${LanBu5 || 0} + ${PlaMac5 || 0} + ${FuFiSun5 || 0} + ${CaWoPr5 || 0} `);
      setGroBlo5(result);
    } catch (error) {
      setGroBlo5("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo5();
  }, [LanBu5, PlaMac5, FuFiSun5, CaWoPr5]);

  const sumsetGroBlo6 = () => {
    try {
  
      
      const result = eval(`${LanBu6 || 0} + ${PlaMac6 || 0} + ${FuFiSun6 || 0} + ${CaWoPr6 || 0} `);
      setGroBlo6(result);
    } catch (error) {
      setGroBlo6("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo6();
  }, [LanBu6, PlaMac6, FuFiSun6, CaWoPr6]);

  const sumsetGroBlo7 = () => {
    try {
  
      
      const result = eval(`${LanBu7 || 0} + ${PlaMac7 || 0} + ${FuFiSun7 || 0} + ${CaWoPr7 || 0} `);
      setGroBlo7(result);
    } catch (error) {
      setGroBlo7("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo7();
  }, [LanBu7, PlaMac7, FuFiSun7, CaWoPr7]);

  const sumsetGroBlo8 = () => {
    try {
  
      
      const result = eval(`${LanBu8 || 0} + ${PlaMac8 || 0} + ${FuFiSun8 || 0} + ${CaWoPr8 || 0} `);
      setGroBlo8(result);
    } catch (error) {
      setGroBlo8("Input all "); 
    }
  };
  
  useEffect(() => {
    sumsetGroBlo8();
  }, [LanBu8, PlaMac8, FuFiSun8, CaWoPr8]);



  const sumNetFiAs1 = () => {
    try {

      
      const result = eval(`${GroBlo1 || 0} - ${ dePre1 || 0} `);
      setNetFiAs1(result);
    } catch (error) {
      setNetFiAs1("Input all "); 
    }
  };

  useEffect(() => {
    sumNetFiAs1();
  }, [GroBlo1,dePre1]);

  
const sumNetFiAs2 = () => {
  try {

    
    const result = eval(`${GroBlo2 || 0} - ${ dePre2 || 0} `);
    setNetFiAs2(result);
  } catch (error) {
    setNetFiAs2("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs2();
}, [GroBlo2,dePre2]);


const sumNetFiAs3 = () => {
  try {

    
    const result = eval(`${GroBlo3 || 0} - ${ dePre3 || 0} `);
    setNetFiAs3(result);
  } catch (error) {
    setNetFiAs3("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs3();
}, [GroBlo3,dePre3]);


const sumNetFiAs4 = () => {
  try {

    
    const result = eval(`${GroBlo4 || 0} - ${ dePre4 || 0} `);
    setNetFiAs4(result);
  } catch (error) {
    setNetFiAs4("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs4();
}, [GroBlo4,dePre4]);


const sumNetFiAs5 = () => {
  try {

    
    const result = eval(`${GroBlo5 || 0} - ${ dePre5 || 0} `);
    setNetFiAs5(result);
  } catch (error) {
    setNetFiAs5("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs5();
}, [GroBlo5,dePre5]);



const sumNetFiAs6 = () => {
  try {

    
    const result = eval(`${GroBlo6 || 0} - ${ dePre6 || 0} `);
    setNetFiAs6(result);
  } catch (error) {
    setNetFiAs6("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs6();
}, [GroBlo6,dePre6]);



const sumNetFiAs7 = () => {
  try {

    
    const result = eval(`${GroBlo7 || 0} - ${ dePre7 || 0} `);
    setNetFiAs7(result);
  } catch (error) {
    setNetFiAs7("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs7();
}, [GroBlo7,dePre7]);


const sumNetFiAs8 = () => {
  try {

    
    const result = eval(`${GroBlo8 || 0} - ${ dePre8 || 0} `);
    setNetFiAs8(result);
  } catch (error) {
    setNetFiAs8("Input all "); 
  }
};

useEffect(() => {
  sumNetFiAs8();
}, [GroBlo8,dePre8]);






const sumToNca1 = () => {
  try {

    
    const result = eval(`${ InLoTo1 || 0} + ${ ToNoCuAs1 || 0} `);
    setToNca1(result);
  } catch (error) {
    setToNca1("Input all "); 
  }
};

useEffect(() => {
  sumToNca1();
}, [InLoTo1,ToNoCuAs1]);


const sumToNca2 = () => {
  try {

    
    const result = eval(`${ InLoTo2 || 0} + ${ ToNoCuAs2 || 0} `);
    setToNca2(result);
  } catch (error) {
    setToNca2("Input all "); 
  }
};

useEffect(() => {
  sumToNca2();
}, [InLoTo2,ToNoCuAs2]);


const sumToNca3 = () => {
  try {

    
    const result = eval(`${ InLoTo3 || 0} + ${ ToNoCuAs3 || 0} `);
    setToNca3(result);
  } catch (error) {
    setToNca3("Input all "); 
  }
};

useEffect(() => {
  sumToNca3();
}, [InLoTo3,ToNoCuAs3]);

const sumToNca4 = () => {
  try {

    
    const result = eval(`${ InLoTo4 || 0} + ${ ToNoCuAs4 || 0} `);
    setToNca4(result);
  } catch (error) {
    setToNca4("Input all "); 
  }
};

useEffect(() => {
  sumToNca4();
}, [InLoTo4,ToNoCuAs4]);

const sumToNca5 = () => {
  try {

    
    const result = eval(`${ InLoTo5 || 0} + ${ ToNoCuAs5 || 0} `);
    setToNca5(result);
  } catch (error) {
    setToNca5("Input all "); 
  }
};

useEffect(() => {
  sumToNca5();
}, [InLoTo5,ToNoCuAs5]);

const sumToNca6 = () => {
  try {

    
    const result = eval(`${ InLoTo6 || 0} + ${ ToNoCuAs6 || 0} `);
    setToNca6(result);
  } catch (error) {
    setToNca6("Input all "); 
  }
};

useEffect(() => {
  sumToNca6();
}, [InLoTo6,ToNoCuAs6]);

const sumToNca7 = () => {
  try {

    
    const result = eval(`${ InLoTo7 || 0} + ${ ToNoCuAs7 || 0} `);
    setToNca7(result);
  } catch (error) {
    setToNca7("Input all "); 
  }
};

useEffect(() => {
  sumToNca7();
}, [InLoTo7,ToNoCuAs7]);


const sumToNca8 = () => {
  try {

    
    const result = eval(`${ InLoTo8 || 0} + ${ ToNoCuAs8 || 0} `);
    setToNca8(result);
  } catch (error) {
    setToNca8("Input all "); 
  }
};

useEffect(() => {
  sumToNca8();
}, [InLoTo8,ToNoCuAs8]);  



const sumToIa1 = () => {
  try {

    
    const result = eval(`${ExNoWrOf1 || 0} + ${PrLoAc1 || 0} + ${ DeReEx1 || 0} `);
    setToIa1(result);
  } catch (error) {
    setToIa1("Input all "); 
  }
};


useEffect(() => {
  sumToIa1();
}, [ExNoWrOf1,PrLoAc1,DeReEx1]);  



const sumToIa2 = () => {
  try {

    
    const result = eval(`${ExNoWrOf2 || 0} + ${PrLoAc2 || 0} + ${ DeReEx2 || 0} `);
    setToIa2(result);
  } catch (error) {
    setToIa2("Input all "); 
  }
};


useEffect(() => {
  sumToIa2();
}, [ExNoWrOf2,PrLoAc2,DeReEx2]);  


const sumToIa3 = () => {
  try {

    
    const result = eval(`${ExNoWrOf3 || 0} + ${PrLoAc3 || 0} + ${ DeReEx3 || 0} `);
    setToIa3(result);
  } catch (error) {
    setToIa3("Input all "); 
  }
};


useEffect(() => {
  sumToIa3();
}, [ExNoWrOf3,PrLoAc3,DeReEx3]);  

const sumToIa4 = () => {
  try {

    
    const result = eval(`${ExNoWrOf4 || 0} + ${PrLoAc4 || 0} + ${ DeReEx4 || 0} `);
    setToIa4(result);
  } catch (error) {
    setToIa4("Input all "); 
  }
};


useEffect(() => {
  sumToIa4();
}, [ExNoWrOf4,PrLoAc4,DeReEx4]);  

const sumToIa5 = () => {
  try {

    
    const result = eval(`${ExNoWrOf5 || 0} + ${PrLoAc5 || 0} + ${ DeReEx5 || 0} `);
    setToIa5(result);
  } catch (error) {
    setToIa5("Input all "); 
  }
};


useEffect(() => {
  sumToIa5();
}, [ExNoWrOf5,PrLoAc5,DeReEx5]);  

const sumToIa6 = () => {
  try {

    
    const result = eval(`${ExNoWrOf6 || 0} + ${PrLoAc6 || 0} + ${ DeReEx6 || 0} `);
    setToIa6(result);
  } catch (error) {
    setToIa6("Input all "); 
  }
};


useEffect(() => {
  sumToIa6();
}, [ExNoWrOf6,PrLoAc6,DeReEx6]);  

const sumToIa7 = () => {
  try {

    
    const result = eval(`${ExNoWrOf7 || 0} + ${PrLoAc7 || 0} + ${ DeReEx7 || 0} `);
    setToIa7(result);
  } catch (error) {
    setToIa7("Input all "); 
  }
};


useEffect(() => {
  sumToIa7();
}, [ExNoWrOf7,PrLoAc7,DeReEx7]);  

const sumToIa8 = () => {
  try {

    
    const result = eval(`${ExNoWrOf8 || 0} + ${PrLoAc8 || 0} + ${ DeReEx8 || 0} `);
    setToIa8(result);
  } catch (error) {
    setToIa8("Input all "); 
  }
};


useEffect(() => {
  sumToIa8();
}, [ExNoWrOf8,PrLoAc8,DeReEx8]);  




const sumToAs1 = () => {
  try {

    
    const result = eval(`${display || 0} + ${ NetFiAs1 || 0} + ${ToNca1 || 0} + ${ToIa1 || 0} `);
    setToAs1(result);
  } catch (error) {
    setToAs1("Input all "); 
  }
};

useEffect(() => {
  sumToAs1();
}, [display,NetFiAs1,ToNca1,ToIa1]);


const sumToAs2 = () => {
  try {

    
    const result = eval(`${ToCuAs2 || 0} + ${ NetFiAs2 || 0} + ${ToNca2 || 0} + ${ToIa2 || 0} `);
    setToAs2(result);
  } catch (error) {
    setToAs2("Input all "); 
  }
};

useEffect(() => {
  sumToAs2();
}, [ToCuAs2,NetFiAs2,ToNca2,ToIa2]);

const sumToAs3 = () => {
  try {

    
    const result = eval(`${ToCuAs3 || 0} + ${ NetFiAs3 || 0} + ${ToNca3 || 0} + ${ToIa3 || 0} `);
    setToAs3(result);
  } catch (error) {
    setToAs3("Input all "); 
  }
};

useEffect(() => {
  sumToAs3();
}, [ToCuAs3,NetFiAs3,ToNca3,ToIa3]);


const sumToAs4 = () => {
  try {

    
    const result = eval(`${ToCuAs4 || 0} + ${ NetFiAs4 || 0} + ${ToNca4 || 0} + ${ToIa4 || 0} `);
    setToAs4(result);
  } catch (error) {
    setToAs4("Input all "); 
  }
};

useEffect(() => {
  sumToAs4();
}, [ToCuAs4,NetFiAs4,ToNca4,ToIa4]);

const sumToAs5 = () => {
  try {

    
    const result = eval(`${ToCuAs5 || 0} + ${ NetFiAs5 || 0} + ${ToNca5 || 0} + ${ToIa5 || 0} `);
    setToAs5(result);
  } catch (error) {
    setToAs5("Input all "); 
  }
};

useEffect(() => {
  sumToAs5();
}, [ToCuAs5,NetFiAs5,ToNca5,ToIa5]);

const sumToAs6 = () => {
  try {

    
    const result = eval(`${ToCuAs6 || 0} + ${ NetFiAs6 || 0} + ${ToNca6 || 0} + ${ToIa6 || 0} `);
    setToAs6(result);
  } catch (error) {
    setToAs6("Input all "); 
  }
};

useEffect(() => {
  sumToAs6();
}, [ToCuAs6,NetFiAs6,ToNca6,ToIa6]);

const sumToAs7 = () => {
  try {

    
    const result = eval(`${ToCuAs7 || 0} + ${ NetFiAs7 || 0} + ${ToNca7 || 0} + ${ToIa7 || 0} `);
    setToAs7(result);
  } catch (error) {
    setToAs7("Input all "); 
  }
};

useEffect(() => {
  sumToAs7();
}, [ToCuAs7,NetFiAs7,ToNca7,ToIa7]);

const sumToAs8 = () => {
  try {

    
    const result = eval(`${ToCuAs8 || 0} + ${ NetFiAs8 || 0} + ${ToNca8 || 0} + ${ToIa8 || 0} `);
    setToAs8(result);
  } catch (error) {
    setToAs8("Input all "); 
  }
};

useEffect(() => {
  sumToAs8();
}, [ToCuAs8,NetFiAs8,ToNca8,ToIa8]);




const sumToCuLi1 = () => {
  try {

    
    const result = eval(`${wcBrIob1 || 0} + ${WcFrBI1 || 0} + ${SunCrTr1 || 0} + ${OtCuLi1 || 0} `);
    setToCuLi1(result);
  } catch (error) {
    setToCuLi1("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi1();
}, [wcBrIob1,WcFrBI1,SunCrTr1,OtCuLi1]);


const sumToCuLi2 = () => {
  try {

    
    const result = eval(`${wcBrIob2 || 0} + ${WcFrBI2 || 0} + ${SunCrTr2 || 0} + ${OtCuLi2 || 0} `);
    setToCuLi2(result);
  } catch (error) {
    setToCuLi2("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi2();
}, [wcBrIob2,WcFrBI2,SunCrTr2,OtCuLi2]);


const sumToCuLi3 = () => {
  try {

    
    const result = eval(`${wcBrIob3 || 0} + ${WcFrBI3 || 0} + ${SunCrTr3 || 0} + ${OtCuLi3 || 0} `);
    setToCuLi3(result);
  } catch (error) {
    setToCuLi3("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi3();
}, [wcBrIob3,WcFrBI3,SunCrTr3,OtCuLi3]);



const sumToCuLi4 = () => {
  try {

    
    const result = eval(`${wcBrIob4 || 0} + ${WcFrBI4 || 0} + ${SunCrTr4 || 0} + ${OtCuLi4 || 0} `);
    setToCuLi4(result);
  } catch (error) {
    setToCuLi4("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi4();
}, [wcBrIob4,WcFrBI4,SunCrTr4,OtCuLi4]);


const sumToCuLi5 = () => {
  try {

    
    const result = eval(`${wcBrIob5 || 0} + ${WcFrBI5 || 0} + ${SunCrTr5 || 0} + ${OtCuLi5 || 0} `);
    setToCuLi5(result);
  } catch (error) {
    setToCuLi5("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi5();
}, [wcBrIob5,WcFrBI5,SunCrTr5,OtCuLi5]);





const sumToCuLi6 = () => {
  try {

    
    const result = eval(`${wcBrIob6 || 0} + ${WcFrBI6 || 0} + ${SunCrTr6 || 0} + ${OtCuLi6 || 0} `);
    setToCuLi6(result);
  } catch (error) {
    setToCuLi6("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi6();
}, [wcBrIob6,WcFrBI6,SunCrTr6,OtCuLi6]);


const sumToCuLi7 = () => {
  try {

    
    const result = eval(`${wcBrIob7 || 0} + ${WcFrBI7 || 0} + ${SunCrTr7 || 0} + ${OtCuLi7 || 0} `);
    setToCuLi7(result);
  } catch (error) {
    setToCuLi7("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi7();
}, [wcBrIob7,WcFrBI7,SunCrTr7,OtCuLi7]);



const sumToCuLi8 = () => {
  try {

    
    const result = eval(`${wcBrIob8 || 0} + ${WcFrBI8 || 0} + ${SunCrTr8 || 0} + ${OtCuLi8 || 0} `);
    setToCuLi8(result);
  } catch (error) {
    setToCuLi8("Input all "); 
  }
};

useEffect(() => {
  sumToCuLi8();
}, [wcBrIob8,WcFrBI8,SunCrTr8,OtCuLi8]);




const sumLoTeLi1 = () => {
  try {

    
    const result = eval(`${TeLoIo1 || 0} + ${TeLoOtB1 || 0} + ${TeLoIn1 || 0} + ${OtLoTeLi1 || 0} `);
    setLoTeLi1(result);
  } catch (error) {
    setLoTeLi1("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi1();
}, [TeLoIo1,TeLoOtB1,TeLoIn1,OtLoTeLi1]);

const sumLoTeLi2 = () => {
  try {

    
    const result = eval(`${TeLoIo2 || 0} + ${TeLoOtB2 || 0} + ${TeLoIn2 || 0} + ${OtLoTeLi2 || 0} `);
    setLoTeLi2(result);
  } catch (error) {
    setLoTeLi2("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi2();
}, [TeLoIo2,TeLoOtB2,TeLoIn2,OtLoTeLi2]);

const sumLoTeLi3 = () => {
  try {

    
    const result = eval(`${TeLoIo3 || 0} + ${TeLoOtB3 || 0} + ${TeLoIn3 || 0} + ${OtLoTeLi3 || 0} `);
    setLoTeLi3(result);
  } catch (error) {
    setLoTeLi3("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi3();
}, [TeLoIo3,TeLoOtB3,TeLoIn3,OtLoTeLi3]);

const sumLoTeLi4 = () => {
  try {

    
    const result = eval(`${TeLoIo4 || 0} + ${TeLoOtB4 || 0} + ${TeLoIn4 || 0} + ${OtLoTeLi4 || 0} `);
    setLoTeLi4(result);
  } catch (error) {
    setLoTeLi4("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi4();
}, [TeLoIo4,TeLoOtB4,TeLoIn4,OtLoTeLi4]);

const sumLoTeLi5 = () => {
  try {

    
    const result = eval(`${TeLoIo5 || 0} + ${TeLoOtB5 || 0} + ${TeLoIn5 || 0} + ${OtLoTeLi5 || 0} `);
    setLoTeLi5(result);
  } catch (error) {
    setLoTeLi5("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi5();
}, [TeLoIo5,TeLoOtB5,TeLoIn5,OtLoTeLi5]);

const sumLoTeLi6 = () => {
  try {

    
    const result = eval(`${TeLoIo6 || 0} + ${TeLoOtB6 || 0} + ${TeLoIn6 || 0} + ${OtLoTeLi6 || 0} `);
    setLoTeLi6(result);
  } catch (error) {
    setLoTeLi6("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi6();
}, [TeLoIo6,TeLoOtB6,TeLoIn6,OtLoTeLi6]);

const sumLoTeLi7 = () => {
  try {

    
    const result = eval(`${TeLoIo7 || 0} + ${TeLoOtB7 || 0} + ${TeLoIn7 || 0} + ${OtLoTeLi7 || 0} `);
    setLoTeLi7(result);
  } catch (error) {
    setLoTeLi7("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi7();
}, [TeLoIo7,TeLoOtB7,TeLoIn7,OtLoTeLi7]);

const sumLoTeLi8 = () => {
  try {

    
    const result = eval(`${TeLoIo8 || 0} + ${TeLoOtB8 || 0} + ${TeLoIn8 || 0} + ${OtLoTeLi8 || 0} `);
    setLoTeLi8(result);
  } catch (error) {
    setLoTeLi8("Input all "); 
  }
};

useEffect(() => {
  sumLoTeLi8();
}, [TeLoIo8,TeLoOtB8,TeLoIn8,OtLoTeLi8]);




  
const sumToOuLi1 = () => {
  try {

    
    const result = eval(`${ToCuLi1 || 0} + ${LoTeLi1 || 0} `);
    setToOuLi1(result);
  } catch (error) {
    setToOuLi1("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi1();
}, [ToCuLi1, LoTeLi1]);



const sumToOuLi2 = () => {
  try {

    
    const result = eval(`${ToCuLi2 || 0} + ${LoTeLi2 || 0} `);
    setToOuLi2(result);
  } catch (error) {
    setToOuLi2("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi2();
}, [ToCuLi2, LoTeLi2]);

const sumToOuLi3 = () => {
  try {

    
    const result = eval(`${ToCuLi3 || 0} + ${LoTeLi3 || 0} `);
    setToOuLi3(result);
  } catch (error) {
    setToOuLi3("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi3();
}, [ToCuLi3, LoTeLi3]);

const sumToOuLi4 = () => {
  try {

    
    const result = eval(`${ToCuLi4 || 0} + ${LoTeLi4 || 0} `);
    setToOuLi4(result);
  } catch (error) {
    setToOuLi4("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi4();
}, [ToCuLi4, LoTeLi4]);

const sumToOuLi5 = () => {
  try {

    
    const result = eval(`${ToCuLi5 || 0} + ${LoTeLi5 || 0} `);
    setToOuLi5(result);
  } catch (error) {
    setToOuLi5("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi5();
}, [ToCuLi5, LoTeLi5]);

const sumToOuLi6 = () => {
  try {

    
    const result = eval(`${ToCuLi6 || 0} + ${LoTeLi6 || 0} `);
    setToOuLi6(result);
  } catch (error) {
    setToOuLi6("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi6();
}, [ToCuLi6, LoTeLi6]);


const sumToOuLi7 = () => {
  try {

    
    const result = eval(`${ToCuLi7 || 0} + ${LoTeLi7 || 0} `);
    setToOuLi7(result);
  } catch (error) {
    setToOuLi7("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi7();
}, [ToCuLi7, LoTeLi7]);

const sumToOuLi8 = () => {
  try {

    
    const result = eval(`${ToCuLi8 || 0} + ${LoTeLi8 || 0} `);
    setToOuLi8(result);
  } catch (error) {
    setToOuLi8("Input all "); 
  }
};

useEffect(() => {
  sumToOuLi8();
}, [ToCuLi8, LoTeLi8]);




const sumNetWo1 = () => {
  try {

    
    const result = eval(`${PaUpCa1 || 0} + ${ReSur1 || 0} + ${PrLoAc11 || 0} `);
    setNetWo1(result);
  } catch (error) {
    setNetWo1("Input all "); 
  }
};

useEffect(() => {
  sumNetWo1();
}, [PaUpCa1,ReSur1,PrLoAc11]);

const sumNetWo2 = () => {
  try {

    
    const result = eval(`${PaUpCa2 || 0} + ${ReSur2 || 0} + ${PrLoAc2 || 0} `);
    setNetWo2(result);
  } catch (error) {
    setNetWo2("Input all "); 
  }
};

useEffect(() => {
  sumNetWo2();
}, [PaUpCa2,ReSur2,PrLoAc2]);


const sumNetWo3 = () => {
  try {

    
    const result = eval(`${PaUpCa3 || 0} + ${ReSur3 || 0} + ${PrLoAc3 || 0} `);
    setNetWo3(result);
  } catch (error) {
    setNetWo3("Input all "); 
  }
};

useEffect(() => {
  sumNetWo3();
}, [PaUpCa3,ReSur3,PrLoAc3]);


const sumNetWo4 = () => {
  try {

    
    const result = eval(`${PaUpCa4 || 0} + ${ReSur4 || 0} + ${PrLoAc4 || 0} `);
    setNetWo4(result);
  } catch (error) {
    setNetWo4("Input all "); 
  }
};

useEffect(() => {
  sumNetWo4();
}, [PaUpCa4,ReSur4,PrLoAc4]);


const sumNetWo5 = () => {
  try {

    
    const result = eval(`${PaUpCa5 || 0} + ${ReSur5 || 0} + ${PrLoAc5 || 0} `);
    setNetWo5(result);
  } catch (error) {
    setNetWo5("Input all "); 
  }
};

useEffect(() => {
  sumNetWo5();
}, [PaUpCa5,ReSur5,PrLoAc5]);


const sumNetWo6 = () => {
  try {

    
    const result = eval(`${PaUpCa6 || 0} + ${ReSur6 || 0} + ${PrLoAc6 || 0} `);
    setNetWo6(result);
  } catch (error) {
    setNetWo6("Input all "); 
  }
};

useEffect(() => {
  sumNetWo6();
}, [PaUpCa6,ReSur6,PrLoAc6]);


const sumNetWo7 = () => {
  try {

    
    const result = eval(`${PaUpCa7 || 0} + ${ReSur7 || 0} + ${PrLoAc7 || 0} `);
    setNetWo7(result);
  } catch (error) {
    setNetWo7("Input all "); 
  }
};

useEffect(() => {
  sumNetWo7();
}, [PaUpCa7,ReSur7,PrLoAc7]);


const sumNetWo8 = () => {
  try {

    
    const result = eval(`${PaUpCa8 || 0} + ${ReSur8 || 0} + ${PrLoAc8 || 0} `);
    setNetWo8(result);
  } catch (error) {
    setNetWo8("Input all "); 
  }
};

useEffect(() => {
  sumNetWo8();
}, [PaUpCa8,ReSur8,PrLoAc8]);


   
const sumToLib1 = () => {
  try {

    
    const result = eval(`${ToCuLi1 || 0} + ${LoTeLi1 || 0} + ${NetWo1 || 0} `);
    setToLib1(result);
  } catch (error) {
    setToLib1("Input all "); 
  }
};

useEffect(() => {
  sumToLib1();
}, [ToCuLi1,LoTeLi1,NetWo1]);

const sumToLib2 = () => {
  try {

    
    const result = eval(`${ToCuLi2 || 0} + ${LoTeLi2 || 0} + ${NetWo2 || 0} `);
    setToLib2(result);
  } catch (error) {
    setToLib2("Input all "); 
  }
};

useEffect(() => {
  sumToLib2();
}, [ToCuLi2,LoTeLi2,NetWo2]);

const sumToLib3 = () => {
  try {

    
    const result = eval(`${ToCuLi3 || 0} + ${LoTeLi3 || 0} + ${NetWo3 || 0} `);
    setToLib3(result);
  } catch (error) {
    setToLib3("Input all "); 
  }
};

useEffect(() => {
  sumToLib3();
}, [ToCuLi3,LoTeLi3,NetWo3]);


const sumToLib4 = () => {
  try {

    
    const result = eval(`${ToCuLi4 || 0} + ${LoTeLi4 || 0} + ${NetWo4 || 0} `);
    setToLib4(result);
  } catch (error) {
    setToLib4("Input all "); 
  }
};

useEffect(() => {
  sumToLib4();
}, [ToCuLi4,LoTeLi4,NetWo4]);

const sumToLib5 = () => {
  try {

    
    const result = eval(`${ToCuLi5 || 0} + ${LoTeLi5 || 0} + ${NetWo5 || 0} `);
    setToLib5(result);
  } catch (error) {
    setToLib5("Input all "); 
  }
};

useEffect(() => {
  sumToLib5();
}, [ToCuLi5,LoTeLi5,NetWo5]);


const sumToLib6 = () => {
  try {

    
    const result = eval(`${ToCuLi6 || 0} + ${LoTeLi6 || 0} + ${NetWo6 || 0} `);
    setToLib6(result);
  } catch (error) {
    setToLib6("Input all "); 
  }
};

useEffect(() => {
  sumToLib6();
}, [ToCuLi6,LoTeLi6,NetWo6]);

const sumToLib7 = () => {
  try {

    
    const result = eval(`${ToCuLi7 || 0} + ${LoTeLi7 || 0} + ${NetWo7 || 0} `);
    setToLib7(result);
  } catch (error) {
    setToLib7("Input all "); 
  }
};

useEffect(() => {
  sumToLib7();
}, [ToCuLi7,LoTeLi7,NetWo7]);

const sumToLib8 = () => {
  try {

    
    const result = eval(`${ToCuLi8 || 0} + ${LoTeLi8 || 0} + ${NetWo8 || 0} `);
    setToLib8(result);
  } catch (error) {
    setToLib8("Input all "); 
  }
};

useEffect(() => {
  sumToLib8();
}, [ToCuLi8,LoTeLi8,NetWo8]);



const sumDifIa1 = () => {
  try {

    
    const result = eval(`${ToAs1 || 0} - ${ToLib1 || 0}  `);
    setDifIa1(result);
  } catch (error) {
    setDifIa1("Input all "); 
  }
};

useEffect(() => {
  sumDifIa1();
}, [ToAs1,ToLib1]);


const sumDifIa2 = () => {
  try {

    
    const result = eval(`${ToAs2 || 0} - ${ToLib2 || 0}  `);
    setDifIa2(result);
  } catch (error) {
    setDifIa2("Input all "); 
  }
};

useEffect(() => {
  sumDifIa2();
}, [ToAs2,ToLib2]);



const sumDifIa3 = () => {
  try {

    
    const result = eval(`${ToAs3 || 0} - ${ToLib3 || 0}  `);
    setDifIa3(result);
  } catch (error) {
    setDifIa3("Input all "); 
  }
};

useEffect(() => {
  sumDifIa3();
}, [ToAs3,ToLib3]);



const sumDifIa4 = () => {
  try {

    
    const result = eval(`${ToAs4 || 0} - ${ToLib4 || 0}  `);
    setDifIa4(result);
  } catch (error) {
    setDifIa4("Input all "); 
  }
};

useEffect(() => {
  sumDifIa4();
}, [ToAs4,ToLib4]);


const sumDifIa5 = () => {
  try {

    
    const result = eval(`${ToAs5 || 0} - ${ToLib5 || 0}  `);
    setDifIa5(result);
  } catch (error) {
    setDifIa5("Input all "); 
  }
};

useEffect(() => {
  sumDifIa5();
}, [ToAs5,ToLib5]);


const sumDifIa6 = () => {
  try {

    
    const result = eval(`${ToAs6 || 0} - ${ToLib6 || 0}  `);
    setDifIa6(result);
  } catch (error) {
    setDifIa6("Input all "); 
  }
};

useEffect(() => {
  sumDifIa6();
}, [ToAs6,ToLib6]);





const sumDifIa7 = () => {
  try {

    
    const result = eval(`${ToAs7 || 0} - ${ToLib7 || 0}  `);
    setDifIa7(result);
  } catch (error) {
    setDifIa7("Input all "); 
  }
};

useEffect(() => {
  sumDifIa7();
}, [ToAs7,ToLib7]);





const sumDifIa8 = () => {
  try {

    
    const result = eval(`${ToAs8 || 0} - ${ToLib8 || 0}  `);
    setDifIa8(result);
  } catch (error) {
    setDifIa8("Input all "); 
  }
};

useEffect(() => {
  sumDifIa8();
}, [ToAs8,ToLib8]);




const valWhYsNo1 = () => {
  try {

    
    const result = DifIa1 === 0 ? "Yes" : "No";
    setWhYsNo1(result);
  } catch (error) {
    setWhYsNo1(" "); 
  }
};

useEffect(() => {
  valWhYsNo1();
}, [DifIa1]);


const valWhYsNo2 = () => {
  try {

    
    const result = DifIa2 === 0 ? "Yes" : "No";
    setWhYsNo2(result);
  } catch (error) {
    setWhYsNo2(" "); 
  }
};

useEffect(() => {
  valWhYsNo2();
}, [DifIa2]);



const valWhYsNo3 = () => {
  try {

    
    const result = DifIa3 === 0 ? "Yes" : "No";
    setWhYsNo3(result);
  } catch (error) {
    setWhYsNo3(" "); 
  }
};

useEffect(() => {
  valWhYsNo3();
}, [DifIa3]);



const valWhYsNo4 = () => {
  try {

    
    const result = DifIa4 === 0 ? "Yes" : "No";
    setWhYsNo4(result);
  } catch (error) {
    setWhYsNo4(" "); 
  }
};

useEffect(() => {
  valWhYsNo4();
}, [DifIa4]);



const valWhYsNo5 = () => {
  try {

    
    const result = DifIa5 === 0 ? "Yes" : "No";
    setWhYsNo5(result);
  } catch (error) {
    setWhYsNo5(" "); 
  }
};

useEffect(() => {
  valWhYsNo5();
}, [DifIa5]);


const valWhYsNo6 = () => {
  try {

    
    const result = DifIa6 === 0 ? "Yes" : "No";
    setWhYsNo6(result);
  } catch (error) {
    setWhYsNo6(" "); 
  }
};

useEffect(() => {
  valWhYsNo6();
}, [DifIa6]);



const valWhYsNo7 = () => {
  try {

    
    const result = DifIa7 === 0 ? "Yes" : "No";
    setWhYsNo7(result);
  } catch (error) {
    setWhYsNo7(" "); 
  }
};

useEffect(() => {
  valWhYsNo7();
}, [DifIa7]);



const valWhYsNo8 = () => {
  try {

    
    const result = DifIa8 === 0 ? "Yes" : "No";
    setWhYsNo8(result);
  } catch (error) {
    setWhYsNo8(" "); 
  }
};

useEffect(() => {
  valWhYsNo8();
}, [DifIa8]);
























































// 
























  







    


    
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
              ANALYSIS OF BALANCE SHEET
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
          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
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
              { localStorage.getItem('raMat12')} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { localStorage.getItem('raMat13')} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat14')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat15')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat16')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat17')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat18')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat19')} 
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Stock in Process
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { localStorage.getItem('wrkPo12')} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { localStorage.getItem('wrkPo13')} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo14')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo15')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo16')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo17')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo18')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('wrkPo19')} 
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
              { localStorage.getItem('FiGood12')} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { localStorage.getItem('FiGood13')} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood14')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood15')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood16')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood17')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood18')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('FiGood19')} 
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Consumable Spares
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp1}
                onChange={(e) => setconSuSp1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp2}
                onChange={(e) => setconSuSp2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp3}
                onChange={(e) => setconSuSp3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp4}
                onChange={(e) => setconSuSp4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp5}
                onChange={(e) => setconSuSp5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp6}
                onChange={(e) => setconSuSp6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp7}
                onChange={(e) => setconSuSp7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={conSuSp8}
                onChange={(e) => setconSuSp8(e.target.value)}
              />
            </Col>
          </Row>

         
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Trade Debtors &lt;  6 months
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb1}
                onChange={(e) => setTrDeb1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb2}
                onChange={(e) => setTrDeb2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb3}
                onChange={(e) => setTrDeb3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb4}
                onChange={(e) => setTrDeb4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb5}
                onChange={(e) => setTrDeb5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb6}
                onChange={(e) => setTrDeb6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb7}
                onChange={(e) => setTrDeb7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TrDeb8}
                onChange={(e) => setTrDeb8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Other Current Assets 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { localStorage.getItem('raMat1')} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { localStorage.getItem('raMat12')} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat13')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat14')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat15')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat16')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat17')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('raMat18')} 
            </Col>
          </Row>


          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL  CURRENT ASSETS 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {display}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            {ToCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            {ToCuAs8}
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            FIXED ASSETS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs1}
                onChange={(e) => setFixAs1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs2}
                onChange={(e) => setFixAs2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs3}
                onChange={(e) => setFixAs3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs4}
                onChange={(e) => setFixAs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs5}
                onChange={(e) => setFixAs5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs6}
                onChange={(e) => setFixAs6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs7}
                onChange={(e) => setFixAs7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FixAs8}
                onChange={(e) => setFixAs8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Land & Building
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu1}
                onChange={(e) => setLanBu1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu2}
                onChange={(e) => setLanBu2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu3}
                onChange={(e) => setLanBu3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu4}
                onChange={(e) => setLanBu4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu5}
                onChange={(e) => setLanBu5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu6}
                onChange={(e) => setLanBu6(e.target.value)}
              />

              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu7}
                onChange={(e) => setLanBu7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LanBu8}
                onChange={(e) => setLanBu8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Plant & Machinery
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac1}
                onChange={(e) => setPlaMac1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac2}
                onChange={(e) => setPlaMac2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac3}
                onChange={(e) => setPlaMac3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac4}
                onChange={(e) => setPlaMac4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac5}
                onChange={(e) => setPlaMac5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac6}
                onChange={(e) => setPlaMac6(e.target.value)}
              />

              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac7}
                onChange={(e) => setPlaMac7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PlaMac8}
                onChange={(e) => setPlaMac8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Furniture / Fixtures / Sundries
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun1}
                onChange={(e) => setFuFiSun1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun2}
                onChange={(e) => setFuFiSun2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun3}
                onChange={(e) => setFuFiSun3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun4}
                onChange={(e) => setFuFiSun4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun5}
                onChange={(e) => setFuFiSun5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun6}
                onChange={(e) => setFuFiSun6(e.target.value)}
              />

              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun7}
                onChange={(e) => setFuFiSun7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FuFiSun8}
                onChange={(e) => setFuFiSun8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Capital Work in Progress
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr1}
                onChange={(e) => setCaWoPr1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr2}
                onChange={(e) => setCaWoPr2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr3}
                onChange={(e) => setCaWoPr3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr4}
                onChange={(e) => setCaWoPr4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr5}
                onChange={(e) => setCaWoPr5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr6}
                onChange={(e) => setCaWoPr6(e.target.value)}
              />

              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr7}
                onChange={(e) => setCaWoPr7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaWoPr8}
                onChange={(e) => setCaWoPr8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              GROSS BLOCK 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {GroBlo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {GroBlo8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Less Depreciation 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              { localStorage.getItem('dePre1')} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { localStorage.getItem('dePre2')} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre3')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre4')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre5')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre6')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre7')} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { localStorage.getItem('dePre8')} 
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              NET FIXED ASSETS  
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetFiAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetFiAs8}
            </Col>
          </Row>

          <Row>
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              NON CURRENT ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Investmt / Loan to Associate
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo1}
                onChange={(e) => setInLoTo1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo2}
                onChange={(e) => setInLoTo2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo3}
                onChange={(e) => setInLoTo3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo4}
                onChange={(e) => setInLoTo4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo5}
                onChange={(e) => setInLoTo5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo6}
                onChange={(e) => setInLoTo6(e.target.value)}
              />

              
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo7}
                onChange={(e) => setInLoTo7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={InLoTo8}
                onChange={(e) => setInLoTo8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Other Non Current Assets 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToNoCuAs1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            {ToNoCuAs2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {ToNoCuAs3} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { ToNoCuAs4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { ToNoCuAs5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { ToNoCuAs6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { ToNoCuAs7} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { ToNoCuAs8} 
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Total  NCA 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToNca2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNca8}
            </Col>
          </Row>

          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
            INTANGIBLE ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Expenses not written off
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf1}
                onChange={(e) => setExNoWrOf1(e.target.value)}
              
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf2}
                onChange={(e) => setExNoWrOf2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf3}
                onChange={(e) => setExNoWrOf3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf4}
                onChange={(e) => setExNoWrOf4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf5}
                onChange={(e) => setExNoWrOf5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf6}
                onChange={(e) => setExNoWrOf6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf7}
                onChange={(e) => setExNoWrOf7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExNoWrOf8}
                onChange={(e) => setExNoWrOf8(e.target.value)}
              />
            </Col>
          </Row>

          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Profit & Loss a/c
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc1}
                onChange={(e) => setPrLoAc1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc2}
                onChange={(e) => setPrLoAc2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc3}
                onChange={(e) => setPrLoAc3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc4}
                onChange={(e) => setPrLoAc4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc5}
                onChange={(e) => setPrLoAc5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc6}
                onChange={(e) => setPrLoAc6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc7}
                onChange={(e) => setPrLoAc7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc8}
                onChange={(e) => setPrLoAc8(e.target.value)}
              />
            </Col>
          </Row>

          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Defered Revenue expenditure
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx1}
                onChange={(e) => setDeReEx1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx2}
                onChange={(e) => setDeReEx2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx3}
                onChange={(e) => setDeReEx3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx4}
                onChange={(e) => setDeReEx4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx5}
                onChange={(e) => setDeReEx5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx6}
                onChange={(e) => setDeReEx6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx7}
                onChange={(e) => setDeReEx7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeReEx8}
                onChange={(e) => setDeReEx8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Total  IA
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToIa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToIa8}
            </Col>
          </Row>


          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL  ASSETS 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToAs8}
            </Col>
          </Row>

          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              LIABILITIES
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-xl px-28 py-2"
            >
              CURRENT LIABILITIES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          
          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            WC Borrowings from IOB
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob1}
                onChange={(e) => setwcBrIob1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob2}
                onChange={(e) => setwcBrIob2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob3}
                onChange={(e) => setwcBrIob3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob4}
                onChange={(e) => setwcBrIob4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob5}
                onChange={(e) => setwcBrIob5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob6}
                onChange={(e) => setwcBrIob6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob7}
                onChange={(e) => setwcBrIob7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wcBrIob8}
                onChange={(e) => setwcBrIob8(e.target.value)}
              />
            </Col>
          </Row>

          
          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            WC from Banks/ Institution
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI1}
                onChange={(e) => setWcFrBI1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI2}
                onChange={(e) => setWcFrBI2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI3}
                onChange={(e) => setWcFrBI3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI4}
                onChange={(e) => setWcFrBI4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI5}
                onChange={(e) => setWcFrBI5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI6}
                onChange={(e) => setWcFrBI6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI7}
                onChange={(e) => setWcFrBI7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={WcFrBI8}
                onChange={(e) => setWcFrBI8(e.target.value)}
              />
            </Col>
          </Row>

          
          
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Sundry Creditors -Trade
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr1}
                onChange={(e) => setSunCrTr1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr2}
                onChange={(e) => setSunCrTr2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr3}
                onChange={(e) => setSunCrTr3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr4}
                onChange={(e) => setSunCrTr4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr5}
                onChange={(e) => setSunCrTr5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr6}
                onChange={(e) => setSunCrTr6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr7}
                onChange={(e) => setSunCrTr7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrTr8}
                onChange={(e) => setSunCrTr8(e.target.value)}
              />
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
              {OtCuLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {OtCuLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {OtCuLi8}
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL  CURRENT LIABILITIES 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToCuLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToCuLi8}
            </Col>
          </Row>

          <Row>
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              DEFFERRED LIABILITIES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Term Loan IOB
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo1}
                onChange={(e) => setTeLoIo1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo2}
                onChange={(e) => setTeLoIo2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo3}
                onChange={(e) => setTeLoIo3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo4}
                onChange={(e) => setTeLoIo4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo5}
                onChange={(e) => setTeLoIo5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo6}
                onChange={(e) => setTeLoIo6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo7}
                onChange={(e) => setTeLoIo7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIo8}
                onChange={(e) => setTeLoIo8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Term Loan  Other Banks
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB1}
                onChange={(e) => setTeLoOtB1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB2}
                onChange={(e) => setTeLoOtB2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB3}
                onChange={(e) => setTeLoOtB3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB4}
                onChange={(e) => setTeLoOtB4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB5}
                onChange={(e) => setTeLoOtB5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB6}
                onChange={(e) => setTeLoOtB6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB7}
                onChange={(e) => setTeLoOtB7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoOtB8}
                onChange={(e) => setTeLoOtB8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Term Loan  Institution 
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn1}
                onChange={(e) => setTeLoIn1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn2}
                onChange={(e) => setTeLoIn2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn3}
                onChange={(e) => setTeLoIn3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn4}
                onChange={(e) => setTeLoIn4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn5}
                onChange={(e) => setTeLoIn5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn6}
                onChange={(e) => setTeLoIn6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn7}
                onChange={(e) => setTeLoIn7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TeLoIn8}
                onChange={(e) => setTeLoIn8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Other Long Term -Liabilities 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {OtLoTeLi1} 
            </Col>
            <Col className="border border-solid flex items-center justify-center">
            { OtLoTeLi2} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            { OtLoTeLi3} 
            </Col>
           
            <Col className=" border border-solid  flex items-center justify-center">
            { OtLoTeLi4} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { OtLoTeLi5} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { OtLoTeLi6} 
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
            { OtLoTeLi7} 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
            {OtLoTeLi8} 
            </Col>
          </Row>



          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              LONG TERM LIABILITIES  
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {LoTeLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {LoTeLi8}
            </Col>
          </Row>


          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL OUTSIDE LIABILITIES  
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOuLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOuLi8}
            </Col>
          </Row>

          <Row>
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              CAPITAL & SURPLUS ASSETS
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Paid up Capital   
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa1}
                onChange={(e) => setPaUpCa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa2}
                onChange={(e) => setPaUpCa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa3}
                onChange={(e) => setPaUpCa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa4}
                onChange={(e) => setPaUpCa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa5}
                onChange={(e) => setPaUpCa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa6}
                onChange={(e) => setPaUpCa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa7}
                onChange={(e) => setPaUpCa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PaUpCa8}
                onChange={(e) => setPaUpCa8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Reserves & Surplus
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur1}
                onChange={(e) => setReSur1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur2}
                onChange={(e) => setReSur2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur3}
                onChange={(e) => setReSur3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur4}
                onChange={(e) => setReSur4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur5}
                onChange={(e) => setReSur5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur6}
                onChange={(e) => setReSur6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur7}
                onChange={(e) => setReSur7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReSur8}
                onChange={(e) => setReSur8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Profit & Loss a/c
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc11}
                onChange={(e) => setPrLoAc11(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc12}
                onChange={(e) => setPrLoAc12(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc13}
                onChange={(e) => setPrLoAc13(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc14}
                onChange={(e) => setPrLoAc14(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc15}
                onChange={(e) => setPrLoAc15(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc16}
                onChange={(e) => setPrLoAc16(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc17}
                onChange={(e) => setPrLoAc18(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrLoAc18}
                onChange={(e) => setPrLoAc18(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              NET WORTH  
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NetWo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NetWo8}
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL LIABILITIES 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToLib2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToLib8}
            </Col>
          </Row>

          <Row className='mt-4'>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Difference if any  
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {DifIa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {DifIa8}
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Whether Assets & Liab Tallied 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {WhYsNo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {WhYsNo8}
            </Col>
          </Row>




          





          </Container>

          
      
    </div>
    </div>
  )
}

export default Assetliab
