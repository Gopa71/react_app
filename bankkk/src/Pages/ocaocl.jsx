import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/navbar'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Ocaocl = () => {

  

  const[ToOtTeLi1,setToOtTeLi1]=useState('');
  const[ToOtTeLi2,setToOtTeLi2]=useState('');
  const[ToOtTeLi3,setToOtTeLi3]=useState('');
  const[ToOtTeLi4,setToOtTeLi4]=useState('');
  const[ToOtTeLi5,setToOtTeLi5]=useState('');
  const[ToOtTeLi6,setToOtTeLi6]=useState('');
  const[ToOtTeLi7,setToOtTeLi7]=useState('');
  const[ToOtTeLi8,setToOtTeLi8]=useState('');


  

  const[RevRes1,setRevRes1]=useState('');
  const[RevRes2,setRevRes2]=useState('');
  const[RevRes3,setRevRes3]=useState('');
  const[RevRes4,setRevRes4]=useState('');
  const[RevRes5,setRevRes5]=useState('');
  const[RevRes6,setRevRes6]=useState('');
  const[RevRes7,setRevRes7]=useState('');
  const[RevRes8,setRevRes8]=useState('');


  
  const[SeDep1,setSeDep1]=useState('');
  const[SeDep2,setSeDep2]=useState('');
  const[SeDep3,setSeDep3]=useState('');
  const[SeDep4,setSeDep4]=useState('');
  const[SeDep5,setSeDep5]=useState('');
  const[SeDep6,setSeDep6]=useState('');
  const[SeDep7,setSeDep7]=useState('');
  const[SeDep8,setSeDep8]=useState('');


  
  const[DeTa1,setDeTa1]=useState('');
  const[DeTa2,setDeTa2]=useState('');
  const[DeTa3,setDeTa3]=useState('');
  const[DeTa4,setDeTa4]=useState('');
  const[DeTa5,setDeTa5]=useState('');
  const[DeTa6,setDeTa6]=useState('');
  const[DeTa7,setDeTa7]=useState('');
  const[DeTa8,setDeTa8]=useState('');




  
  const[UnLoPr1,setUnLoPr1]=useState('');
  const[UnLoPr2,setUnLoPr2]=useState('');
  const[UnLoPr3,setUnLoPr3]=useState('');
  const[UnLoPr4,setUnLoPr4]=useState('');
  const[UnLoPr5,setUnLoPr5]=useState('');
  const[UnLoPr6,setUnLoPr6]=useState('');
  const[UnLoPr7,setUnLoPr7]=useState('');
  const[UnLoPr8,setUnLoPr8]=useState('');


  
  const[SunCrEx1,setSunCrEx1]=useState('');
  const[SunCrEx2,setSunCrEx2]=useState('');
  const[SunCrEx3,setSunCrEx3]=useState('');
  const[SunCrEx4,setSunCrEx4]=useState('');
  const[SunCrEx5,setSunCrEx5]=useState('');
  const[SunCrEx6,setSunCrEx6]=useState('');
  const[SunCrEx7,setSunCrEx7]=useState('');
  const[SunCrEx8,setSunCrEx8]=useState('');

  const[ToOtCuLi1,setToOtCuLi1]=useState('');
  const[ToOtCuLi2,setToOtCuLi2]=useState('');
  const[ToOtCuLi3,setToOtCuLi3]=useState('');
  const[ToOtCuLi4,setToOtCuLi4]=useState('');
  const[ToOtCuLi5,setToOtCuLi5]=useState('');
  const[ToOtCuLi6,setToOtCuLi6]=useState('');
  const[ToOtCuLi7,setToOtCuLi7]=useState('');
  const[ToOtCuLi8,setToOtCuLi8]=useState('');



  const[Oth111,setOth111]=useState('');
  const[Oth112,setOth112]=useState('');
  const[Oth113,setOth113]=useState('');
  const[Oth114,setOth114]=useState('');
  const[Oth115,setOth115]=useState('');
  const[Oth116,setOth116]=useState('');
  const[Oth117,setOth117]=useState('');
  const[Oth118,setOth118]=useState('');
  

  const[PrFoTa1,setPrFoTa1]=useState('');
  const[PrFoTa2,setPrFoTa2]=useState('');
  const[PrFoTa3,setPrFoTa3]=useState('');
  const[PrFoTa4,setPrFoTa4]=useState('');
  const[PrFoTa5,setPrFoTa5]=useState('');
  const[PrFoTa6,setPrFoTa6]=useState('');
  const[PrFoTa7,setPrFoTa7]=useState('');
  const[PrFoTa8,setPrFoTa8]=useState('');



  
  const[ExPay1,setExPay1]=useState('');
  const[ExPay2,setExPay2]=useState('');
  const[ExPay3,setExPay3]=useState('');
  const[ExPay4,setExPay4]=useState('');
  const[ExPay5,setExPay5]=useState('');
  const[ExPay6,setExPay6]=useState('');
  const[ExPay7,setExPay7]=useState('');
  const[ExPay8,setExPay8]=useState('');


  
  const[TlduBa1,setTlduBa1]=useState('');
  const[TlduBa2,setTlduBa2]=useState('');
  const[TlduBa3,setTlduBa3]=useState('');
  const[TlduBa4,setTlduBa4]=useState('');
  const[TlduBa5,setTlduBa5]=useState('');
  const[TlduBa6,setTlduBa6]=useState('');
  const[TlduBa7,setTlduBa7]=useState('');
  const[TlduBa8,setTlduBa8]=useState('');



  

  const[TlInDu1,setTlInDu1]=useState('');
  const[TlInDu2,setTlInDu2]=useState('');
  const[TlInDu3,setTlInDu3]=useState('');
  const[TlInDu4,setTlInDu4]=useState('');
  const[TlInDu5,setTlInDu5]=useState('');
  const[TlInDu6,setTlInDu6]=useState('');
  const[TlInDu7,setTlInDu7]=useState('');
  const[TlInDu8,setTlInDu8]=useState('');



  
  const[Oth11,setOth11]=useState('');
  const[Oth12,setOth12]=useState('');
  const[Oth13,setOth13]=useState('');
  const[Oth14,setOth14]=useState('');
  const[Oth15,setOth15]=useState('');
  const[Oth16,setOth16]=useState('');
  const[Oth17,setOth17]=useState('');
  const[Oth18,setOth18]=useState('');


  

  const[IntAccLo1,setIntAccLo1]=useState('');
  const[IntAccLo2,setIntAccLo2]=useState('');
  const[IntAccLo3,setIntAccLo3]=useState('');
  const[IntAccLo4,setIntAccLo4]=useState('');
  const[IntAccLo5,setIntAccLo5]=useState('');
  const[IntAccLo6,setIntAccLo6]=useState('');
  const[IntAccLo7,setIntAccLo7]=useState('');
  const[IntAccLo8,setIntAccLo8]=useState('');



  const[Invst1,setInvst1]=useState('');
  const[Invst2,setInvst2]=useState('');
  const[Invst3,setInvst3]=useState('');
  const[Invst4,setInvst4]=useState('');
  const[Invst5,setInvst5]=useState('');
  const[Invst6,setInvst6]=useState('');
  const[Invst7,setInvst7]=useState('');
  const[Invst8,setInvst8]=useState('');

  

  const[SunDeb1,setSunDeb1]=useState('');
  const[SunDeb2,setSunDeb2]=useState('');
  const[SunDeb3,setSunDeb3]=useState('');
  const[SunDeb4,setSunDeb4]=useState('');
  const[SunDeb5,setSunDeb5]=useState('');
  const[SunDeb6,setSunDeb6]=useState('');
  const[SunDeb7,setSunDeb7]=useState('');
  const[SunDeb8,setSunDeb8]=useState('');



  

  const[LoAnAd11,setLoAnAd11]=useState('');
  const[LoAnAd12,setLoAnAd12]=useState('');
  const[LoAnAd13,setLoAnAd13]=useState('');
  const[LoAnAd14,setLoAnAd14]=useState('');
  const[LoAnAd15,setLoAnAd15]=useState('');
  const[LoAnAd16,setLoAnAd16]=useState('');
  const[LoAnAd17,setLoAnAd17]=useState('');
  const[LoAnAd18,setLoAnAd18]=useState('');

  

  const[SeDeEb1,setSeDeEb1]=useState('');
  const[SeDeEb2,setSeDeEb2]=useState('');
  const[SeDeEb3,setSeDeEb3]=useState('');
  const[SeDeEb4,setSeDeEb4]=useState('');
  const[SeDeEb5,setSeDeEb5]=useState('');
  const[SeDeEb6,setSeDeEb6]=useState('');
  const[SeDeEb7,setSeDeEb7]=useState('');
  const[SeDeEb8,setSeDeEb8]=useState('');


  
  const[ToOtCuAs1,setToOtCuAs1]=useState('');
  const[ToOtCuAs2,setToOtCuAs2]=useState('');
  const[ToOtCuAs3,setToOtCuAs3]=useState('');
  const[ToOtCuAs4,setToOtCuAs4]=useState('');
  const[ToOtCuAs5,setToOtCuAs5]=useState('');
  const[ToOtCuAs6,setToOtCuAs6]=useState('');
  const[ToOtCuAs7,setToOtCuAs7]=useState('');
  const[ToOtCuAs8,setToOtCuAs8]=useState('');


  



  const[Oth1,setOth1]=useState('');
  const[Oth2,setOth2]=useState('');
  const[Oth3,setOth3]=useState('');
  const[Oth4,setOth4]=useState('');
  const[Oth5,setOth5]=useState('');
  const[Oth6,setOth6]=useState('');
  const[Oth7,setOth7]=useState('');
  const[Oth8,setOth8]=useState('');

  

  const[LoAnAd1,setLoAnAd1] = useState('');
  const[LoAnAd2,setLoAnAd2] = useState('');
  const[LoAnAd3,setLoAnAd3] = useState('');
  const[LoAnAd4,setLoAnAd4] = useState('');
  const[LoAnAd5,setLoAnAd5] = useState('');
  const[LoAnAd6,setLoAnAd6] = useState('');
  const[LoAnAd7,setLoAnAd7] = useState('');
  const[LoAnAd8,setLoAnAd8] = useState('');

  const[ExCuTu1,setExCuTu1] = useState('');
  const[ExCuTu2,setExCuTu2] = useState('');
  const[ExCuTu3,setExCuTu3] = useState('');
  const[ExCuTu4,setExCuTu4] = useState('');
  const[ExCuTu5,setExCuTu5] = useState('');
  const[ExCuTu6,setExCuTu6] = useState('');
  const[ExCuTu7,setExCuTu7] = useState('');
  const[ExCuTu8,setExCuTu8] = useState('');


  
  

  const[AdToSu1,setAdToSu1] = useState('');
  const[AdToSu2,setAdToSu2] = useState('');
  const[AdToSu3,setAdToSu3] = useState('');
  const[AdToSu4,setAdToSu4] = useState('');
  const[AdToSu5,setAdToSu5] = useState('');
  const[AdToSu6,setAdToSu6] = useState('');
  const[AdToSu7,setAdToSu7] = useState('');
  const[AdToSu8,setAdToSu8] = useState('');


  const[AdToSt1,setAdToSt1] = useState('');
  const[AdToSt2,setAdToSt2] = useState('');
  const[AdToSt3,setAdToSt3] = useState('');
  const[AdToSt4,setAdToSt4] = useState('');
  const[AdToSt5,setAdToSt5] = useState('');
  const[AdToSt6,setAdToSt6] = useState('');
  const[AdToSt7,setAdToSt7] = useState('');
  const[AdToSt8,setAdToSt8] = useState('');

  
  const[AdInTa1,setAdInTa1] = useState('');
  const[AdInTa2,setAdInTa2] = useState('');
  const[AdInTa3,setAdInTa3] = useState('');
  const[AdInTa4,setAdInTa4] = useState('');
  const[AdInTa5,setAdInTa5] = useState('');
  const[AdInTa6,setAdInTa6] = useState('');
  const[AdInTa7,setAdInTa7] = useState('');
  const[AdInTa8,setAdInTa8] = useState('');



  
  const[FiDeWiBa1,setFiDeWiBa1] = useState('');
  const[FiDeWiBa2,setFiDeWiBa2] = useState('');
  const[FiDeWiBa3,setFiDeWiBa3] = useState('');
  const[FiDeWiBa4,setFiDeWiBa4] = useState('');
  const[FiDeWiBa5,setFiDeWiBa5] = useState('');
  const[FiDeWiBa6,setFiDeWiBa6] = useState('');
  const[FiDeWiBa7,setFiDeWiBa7] = useState('');
  const[FiDeWiBa8,setFiDeWiBa8] = useState('');


  

  const[CaBaBAl1,setCaBaBAl1] = useState('');
  const[CaBaBAl2,setCaBaBAl2] = useState('');
  const[CaBaBAl3,setCaBaBAl3] = useState('');
  const[CaBaBAl4,setCaBaBAl4] = useState('');
  const[CaBaBAl5,setCaBaBAl5] = useState('');
  const[CaBaBAl6,setCaBaBAl6] = useState('');
  const[CaBaBAl7,setCaBaBAl7] = useState('');
  const[CaBaBAl8,setCaBaBAl8] = useState('');
  

  
  const[ToNoCuAs1,setToNoCuAs1] = useState('');
  const[ToNoCuAs2,setToNoCuAs2] = useState('');
  const[ToNoCuAs3,setToNoCuAs3] = useState('');
  const[ToNoCuAs4,setToNoCuAs4] = useState('');
  const[ToNoCuAs5,setToNoCuAs5] = useState('');
  const[ToNoCuAs6,setToNoCuAs6] = useState('');
  const[ToNoCuAs7,setToNoCuAs7] = useState('');
  const[ToNoCuAs8,setToNoCuAs8] = useState('');





  const saveToNoCuAs1 = () => {
    localStorage.setItem("ToNoCuAs1", ToNoCuAs1);
  };

  
useEffect(() =>{
  saveToNoCuAs1();
},
[ToNoCuAs1])






const sumToOtCuAs1 = () => {
  try {
    const result = eval(`${CaBaBAl1 || 0} + ${FiDeWiBa1 || 0} + ${AdInTa1 || 0}+ ${AdToSt1 || 0}+ ${AdToSu1 || 0}
    + ${ExCuTu1 || 0}+ ${LoAnAd1 || 0}+ ${Oth1 || 0}`);

    
    setToOtCuAs1(result);
  } catch (error) {
    setToOtCuAs1("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs1();
}, [CaBaBAl1,FiDeWiBa1,AdInTa1,AdToSt1,AdToSu1,ExCuTu1,LoAnAd1,Oth1]);

const sumToOtCuAs2 = () => {
  try {
    const result = eval(`${CaBaBAl2 || 0} + ${FiDeWiBa2 || 0} + ${AdInTa2 || 0}+ ${AdToSt2 || 0}+ ${AdToSu2 || 0}
    + ${ExCuTu2 || 0}+ ${LoAnAd2 || 0}+ ${Oth2 || 0}`);

    
    setToOtCuAs2(result);
  } catch (error) {
    setToOtCuAs2("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs2();
}, [CaBaBAl2,FiDeWiBa2,AdInTa2,AdToSt2,AdToSu2,ExCuTu2,LoAnAd2,Oth2]);

const sumToOtCuAs3 = () => {
  try {
    const result = eval(`${CaBaBAl3 || 0} + ${FiDeWiBa3 || 0} + ${AdInTa3 || 0}+ ${AdToSt3 || 0}+ ${AdToSu3 || 0}
    + ${ExCuTu3 || 0}+ ${LoAnAd3 || 0}+ ${Oth3 || 0}`);

    
    setToOtCuAs3(result);
  } catch (error) {
    setToOtCuAs3("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs3();
}, [CaBaBAl3,FiDeWiBa3,AdInTa3,AdToSt3,AdToSu3,ExCuTu3,LoAnAd3,Oth3]);


const sumToOtCuAs4 = () => {
  try {
    const result = eval(`${CaBaBAl4 || 0} + ${FiDeWiBa4 || 0} + ${AdInTa4 || 0}+ ${AdToSt4 || 0}+ ${AdToSu4 || 0}
    + ${ExCuTu4 || 0}+ ${LoAnAd4 || 0}+ ${Oth4 || 0}`);

    
    setToOtCuAs4(result);
  } catch (error) {
    setToOtCuAs4("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs4();
}, [CaBaBAl4,FiDeWiBa4,AdInTa4,AdToSt4,AdToSu4,ExCuTu4,LoAnAd4,Oth4]);


const sumToOtCuAs5 = () => {
  try {
    const result = eval(`${CaBaBAl5 || 0} + ${FiDeWiBa5 || 0} + ${AdInTa5 || 0}+ ${AdToSt5 || 0}+ ${AdToSu5 || 0}
    + ${ExCuTu5 || 0}+ ${LoAnAd5 || 0}+ ${Oth5 || 0}`);

    
    setToOtCuAs5(result);
  } catch (error) {
    setToOtCuAs5("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs5();
}, [CaBaBAl5,FiDeWiBa5,AdInTa5,AdToSt5,AdToSu5,ExCuTu5,LoAnAd5,Oth5]);


const sumToOtCuAs6 = () => {
  try {
    const result = eval(`${CaBaBAl6 || 0} + ${FiDeWiBa6 || 0} + ${AdInTa6 || 0}+ ${AdToSt6 || 0}+ ${AdToSu6 || 0}
    + ${ExCuTu6 || 0}+ ${LoAnAd6 || 0}+ ${Oth6 || 0}`);

    
    setToOtCuAs6(result);
  } catch (error) {
    setToOtCuAs6("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs6();
}, [CaBaBAl6,FiDeWiBa6,AdInTa6,AdToSt6,AdToSu6,ExCuTu6,LoAnAd6,Oth6]);


const sumToOtCuAs7 = () => {
  try {
    const result = eval(`${CaBaBAl7 || 0} + ${FiDeWiBa7 || 0} + ${AdInTa7 || 0}+ ${AdToSt7 || 0}+ ${AdToSu7 || 0}
    + ${ExCuTu7 || 0}+ ${LoAnAd7 || 0}+ ${Oth7 || 0}`);

    
    setToOtCuAs7(result);
  } catch (error) {
    setToOtCuAs7("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs7();
}, [CaBaBAl7,FiDeWiBa7,AdInTa7,AdToSt7,AdToSu7,ExCuTu7,LoAnAd7,Oth7]);


const sumToOtCuAs8 = () => {
  try {
    const result = eval(`${CaBaBAl8 || 0} + ${FiDeWiBa8 || 0} + ${AdInTa8 || 0}+ ${AdToSt8 || 0}+ ${AdToSu8 || 0}
    + ${ExCuTu8 || 0}+ ${LoAnAd8 || 0}+ ${Oth8 || 0}`);

    
    setToOtCuAs8(result);
  } catch (error) {
    setToOtCuAs8("Input all "); 
  }
};

useEffect(() => {
  sumToOtCuAs8();
}, [CaBaBAl8,FiDeWiBa8,AdInTa8,AdToSt8,AdToSu8,ExCuTu8,LoAnAd8,Oth8]);





const ToNoCuAs1Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb1} + ${LoAnAd11} + ${SunDeb1} + ${Invst1} + ${IntAccLo1} + ${Oth11}  )`
    );
    setToNoCuAs1(result);
  } catch (error) {
    setToNoCuAs1("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs1Sum();
}, [SeDeEb1,LoAnAd11,SunDeb1,Invst1,IntAccLo1,Oth11]);

const ToNoCuAs2Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb2} + ${LoAnAd12} + ${SunDeb2} + ${Invst2} + ${IntAccLo2} + ${Oth12}  )`
    );
    setToNoCuAs2(result);
  } catch (error) {
    setToNoCuAs2("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs2Sum();
}, [SeDeEb2,LoAnAd12,SunDeb2,Invst2,IntAccLo2,Oth12]);

const ToNoCuAs3Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb3} + ${LoAnAd13} + ${SunDeb3} + ${Invst3} + ${IntAccLo3} + ${Oth13}  )`
    );
    setToNoCuAs3(result);
  } catch (error) {
    setToNoCuAs3("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs3Sum();
}, [SeDeEb3,LoAnAd13,SunDeb3,Invst3,IntAccLo3,Oth13]);


const ToNoCuAs4Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb4} + ${LoAnAd14} + ${SunDeb4} + ${Invst4} + ${IntAccLo4} + ${Oth14}  )`
    );
    setToNoCuAs4(result);
  } catch (error) {
    setToNoCuAs4("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs4Sum();
}, [SeDeEb4,LoAnAd14,SunDeb4,Invst4,IntAccLo4,Oth14]);

const ToNoCuAs5Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb5} + ${LoAnAd15} + ${SunDeb5} + ${Invst5} + ${IntAccLo5} + ${Oth15}  )`
    );
    setToNoCuAs5(result);
  } catch (error) {
    setToNoCuAs5("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs5Sum();
}, [SeDeEb5,LoAnAd15,SunDeb5,Invst5,IntAccLo5,Oth15]);

const ToNoCuAs6Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb6} + ${LoAnAd16} + ${SunDeb6} + ${Invst6} + ${IntAccLo6} + ${Oth16}  )`
    );
    setToNoCuAs6(result);
  } catch (error) {
    setToNoCuAs6("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs6Sum();
}, [SeDeEb6,LoAnAd16,SunDeb6,Invst6,IntAccLo6,Oth16]);

const ToNoCuAs7Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb7} + ${LoAnAd17} + ${SunDeb7} + ${Invst7} + ${IntAccLo7} + ${Oth17}  )`
    );
    setToNoCuAs7(result);
  } catch (error) {
    setToNoCuAs7("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs7Sum();
}, [SeDeEb7,LoAnAd17,SunDeb7,Invst7,IntAccLo7,Oth17]);


const ToNoCuAs8Sum = () => {
  try {
    const result = eval(
      `  
     ( ${SeDeEb8} + ${LoAnAd18} + ${SunDeb8} + ${Invst8} + ${IntAccLo8} + ${Oth18}  )`
    );
    setToNoCuAs8(result);
  } catch (error) {
    setToNoCuAs8("Input all ");
  }
};

useEffect(() => {
  ToNoCuAs8Sum();
}, [SeDeEb8,LoAnAd18,SunDeb8,Invst8,IntAccLo8,Oth18]);


const sumToOtCuLi1 = () => {
  try {
    const result = eval(`${TlInDu1 || 0} + ${TlduBa1 || 0} + ${SunCrEx1 || 0}+ ${ExPay1 || 0}+ ${PrFoTa1 || 0}+ ${Oth111 || 0}`);

    
    setToOtCuLi1(result);
  } catch (error) {
    setToOtCuLi1("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi1();
}, [TlInDu1, TlduBa1, SunCrEx1, ExPay1, PrFoTa1, Oth111]);



const sumToOtCuLi2 = () => {
  try {
    const result = eval(`${TlInDu2 || 0} + ${TlduBa2 || 0} + ${SunCrEx2 || 0}+ ${ExPay2 || 0}+ ${PrFoTa2 || 0}+ ${Oth112 || 0}`);

    
    setToOtCuLi2(result);
  } catch (error) {
    setToOtCuLi2("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi2();
}, [TlInDu2, TlduBa2, SunCrEx2, ExPay2, PrFoTa2, Oth112]);




const sumToOtCuLi3 = () => {
  try {
    const result = eval(`${TlInDu3 || 0} + ${TlduBa3 || 0} + ${SunCrEx3 || 0}+ ${ExPay3 || 0}+ ${PrFoTa3 || 0}+ ${Oth113 || 0}`);

    
    setToOtCuLi3(result);
  } catch (error) {
    setToOtCuLi3("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi3();
}, [TlInDu3, TlduBa3, SunCrEx3, ExPay3, PrFoTa3, Oth113]);


const sumToOtCuLi4 = () => {
  try {
    const result = eval(`${TlInDu4 || 0} + ${TlduBa4 || 0} + ${SunCrEx4 || 0}+ ${ExPay4 || 0}+ ${PrFoTa4 || 0}+ ${Oth114 || 0}`);

    
    setToOtCuLi4(result);
  } catch (error) {
    setToOtCuLi4("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi4();
}, [TlInDu4, TlduBa4, SunCrEx4, ExPay4, PrFoTa4, Oth114]);


const sumToOtCuLi5 = () => {
  try {
    const result = eval(`${TlInDu5 || 0} + ${TlduBa5 || 0} + ${SunCrEx5 || 0}+ ${ExPay5 || 0}+ ${PrFoTa5 || 0}+ ${Oth115 || 0}`);

    
    setToOtCuLi5(result);
  } catch (error) {
    setToOtCuLi5("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi5();
}, [TlInDu5, TlduBa5, SunCrEx5, ExPay5, PrFoTa5, Oth115]);



const sumToOtCuLi6 = () => {
  try {
    const result = eval(`${TlInDu6 || 0} + ${TlduBa6 || 0} + ${SunCrEx6 || 0}+ ${ExPay6 || 0}+ ${PrFoTa6 || 0}+ ${Oth116 || 0}`);

    
    setToOtCuLi6(result);
  } catch (error) {
    setToOtCuLi6("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi6();
}, [TlInDu6, TlduBa6, SunCrEx6, ExPay6, PrFoTa6, Oth116]);



const sumToOtCuLi7 = () => {
  try {
    const result = eval(`${TlInDu7 || 0} + ${TlduBa7 || 0} + ${SunCrEx7 || 0}+ ${ExPay7 || 0}+ ${PrFoTa7 || 0}+ ${Oth117 || 0}`);

    
    setToOtCuLi7(result);
  } catch (error) {
    setToOtCuLi7("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi7();
}, [TlInDu7, TlduBa7, SunCrEx7, ExPay7, PrFoTa7, Oth117]);



const sumToOtCuLi8 = () => {
  try {
    const result = eval(`${TlInDu8 || 0} + ${TlduBa8 || 0} + ${SunCrEx8 || 0}+ ${ExPay8 || 0}+ ${PrFoTa8 || 0}+ ${Oth118 || 0}`);

    
    setToOtCuLi8(result);
  } catch (error) {
    setToOtCuLi8("Input all "); 
  }
};


useEffect(() => {
sumToOtCuLi8();
}, [TlInDu8, TlduBa8, SunCrEx8, ExPay8, PrFoTa8, Oth118]);



  
const sumToOtTeLi1 = () => {
  try {
    const result = eval(`${UnLoPr1 || 0} + ${DeTa1 || 0} + ${SeDep1 || 0}+ ${RevRes1 || 0}`);

    
    setToOtTeLi1(result);
  } catch (error) {
    setToOtTeLi1("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi1();
}, [UnLoPr1,DeTa1,SeDep1,RevRes1]);

 
const sumToOtTeLi2 = () => {
  try {
    const result = eval(`${UnLoPr2 || 0} + ${DeTa2 || 0} + ${SeDep2 || 0}+ ${RevRes2 || 0}`);

    
    setToOtTeLi2(result);
  } catch (error) {
    setToOtTeLi2("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi2();
}, [UnLoPr2,DeTa2,SeDep2,RevRes2]);


 
const sumToOtTeLi3 = () => {
  try {
    const result = eval(`${UnLoPr3 || 0} + ${DeTa3 || 0} + ${SeDep3 || 0}+ ${RevRes3 || 0}`);

    
    setToOtTeLi3(result);
  } catch (error) {
    setToOtTeLi3("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi3();
}, [UnLoPr3,DeTa3,SeDep3,RevRes3]);

 
const sumToOtTeLi4 = () => {
  try {
    const result = eval(`${UnLoPr4 || 0} + ${DeTa4 || 0} + ${SeDep4 || 0}+ ${RevRes4 || 0}`);

    
    setToOtTeLi4(result);
  } catch (error) {
    setToOtTeLi4("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi4();
}, [UnLoPr4,DeTa4,SeDep4,RevRes4]);

 
const sumToOtTeLi5 = () => {
  try {
    const result = eval(`${UnLoPr5 || 0} + ${DeTa5 || 0} + ${SeDep5 || 0}+ ${RevRes5 || 0}`);

    
    setToOtTeLi5(result);
  } catch (error) {
    setToOtTeLi5("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi5();
}, [UnLoPr5,DeTa5,SeDep5,RevRes5]);

 
const sumToOtTeLi6 = () => {
  try {
    const result = eval(`${UnLoPr6 || 0} + ${DeTa6 || 0} + ${SeDep6 || 0}+ ${RevRes6 || 0}`);

    
    setToOtTeLi6(result);
  } catch (error) {
    setToOtTeLi6("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi6();
}, [UnLoPr6,DeTa6,SeDep6,RevRes6]);

 
const sumToOtTeLi7 = () => {
  try {
    const result = eval(`${UnLoPr7 || 0} + ${DeTa7 || 0} + ${SeDep7 || 0}+ ${RevRes7 || 0}`);

    
    setToOtTeLi7(result);
  } catch (error) {
    setToOtTeLi7("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi7();
}, [UnLoPr7,DeTa7,SeDep7,RevRes7]);

 
const sumToOtTeLi8 = () => {
  try {
    const result = eval(`${UnLoPr8 || 0} + ${DeTa8 || 0} + ${SeDep8 || 0}+ ${RevRes8 || 0}`);

    
    setToOtTeLi8(result);
  } catch (error) {
    setToOtTeLi8("Input all "); 
  }
};

useEffect(() => {
  sumToOtTeLi8();
}, [UnLoPr8,DeTa8,SeDep8,RevRes8]);
























































  





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
              III    DETAILS OF OCA, NCA, OCL, OTL
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
              OTHER CURRENT ASSETS 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Cash & Bank balance
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl1}
                onChange={(e) => setCaBaBAl1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl2}
                onChange={(e) => setCaBaBAl2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl3}
                onChange={(e) => setCaBaBAl3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl4}
                onChange={(e) => setCaBaBAl4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl5}
                onChange={(e) => setCaBaBAl5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl6}
                onChange={(e) => setCaBaBAl6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl7}
                onChange={(e) => setCaBaBAl7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={CaBaBAl8}
                onChange={(e) => setCaBaBAl8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Fixed deposits with Bank
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa1}
                onChange={(e) => setFiDeWiBa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa2}
                onChange={(e) => setFiDeWiBa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa3}
                onChange={(e) => setFiDeWiBa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa4}
                onChange={(e) => setFiDeWiBa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa5}
                onChange={(e) => setFiDeWiBa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa6}
                onChange={(e) => setFiDeWiBa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa7}
                onChange={(e) => setFiDeWiBa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiDeWiBa8}
                onChange={(e) => setFiDeWiBa8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Advance Income Tax/ Sales Tax
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa1}
                onChange={(e) => setAdInTa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa2}
                onChange={(e) => setAdInTa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa3}
                onChange={(e) => setAdInTa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa4}
                onChange={(e) => setAdInTa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa5}
                onChange={(e) => setAdInTa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa6}
                onChange={(e) => setAdInTa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa7}
                onChange={(e) => setAdInTa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdInTa8}
                onChange={(e) => setAdInTa8(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Advance to Staff / Directors
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt1}
                onChange={(e) => setAdToSt1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt2}
                onChange={(e) => setAdToSt2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt3}
                onChange={(e) => setAdToSt3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt4}
                onChange={(e) => setAdToSt4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt5}
                onChange={(e) => setAdToSt5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt6}
                onChange={(e) => setAdToSt6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt7}
                onChange={(e) => setAdToSt7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSt8}
                onChange={(e) => setAdToSt8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Advance to Suppliers
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu1}
                onChange={(e) => setAdToSu1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu1}
                onChange={(e) => setAdToSu2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu3}
                onChange={(e) => setAdToSu3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu4}
                onChange={(e) => setAdToSu4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu5}
                onChange={(e) => setAdToSu5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu6}
                onChange={(e) => setAdToSu6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu7}
                onChange={(e) => setAdToSu7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={AdToSu8}
                onChange={(e) => setAdToSu8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Excise / Customs / TUF 
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu1}
                onChange={(e) => setExCuTu1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu2}
                onChange={(e) => setExCuTu2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu3}
                onChange={(e) => setExCuTu3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu4}
                onChange={(e) => setExCuTu4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu5}
                onChange={(e) => setExCuTu5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu6}
                onChange={(e) => setExCuTu6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu7}
                onChange={(e) => setExCuTu7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExCuTu8}
                onChange={(e) => setExCuTu8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Loans and advances
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd1}
                onChange={(e) => setLoAnAd1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd2}
                onChange={(e) => setLoAnAd2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd3}
                onChange={(e) => setLoAnAd3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd4}
                onChange={(e) => setLoAnAd4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd5}
                onChange={(e) => setLoAnAd5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd6}
                onChange={(e) => setLoAnAd6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd7}
                onChange={(e) => setLoAnAd7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd8}
                onChange={(e) => setLoAnAd8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Others
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth1}
                onChange={(e) => setOth1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth2}
                onChange={(e) => setOth2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth3}
                onChange={(e) => setOth3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth4}
                onChange={(e) => setOth4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth5}
                onChange={(e) => setOth6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth6}
                onChange={(e) => setOth6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth7}
                onChange={(e) => setOth7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth8}
                onChange={(e) => setOth8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL OTHER CURRENT ASSETS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOtCuAs2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuAs8}
            </Col>
          </Row>

          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              OTHER NON CURRENT ASSETS 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Security deposits EB etc
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb1}
                onChange={(e) => setSeDeEb1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb2}
                onChange={(e) => setSeDeEb2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb3}
                onChange={(e) => setSeDeEb3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb4}
                onChange={(e) => setSeDeEb4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb5}
                onChange={(e) => setSeDeEb5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb6}
                onChange={(e) => setSeDeEb6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb7}
                onChange={(e) => setSeDeEb7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDeEb8}
                onChange={(e) => setSeDeEb8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Loans and advances
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd11}
                onChange={(e) => setLoAnAd11(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd12}
                onChange={(e) => setLoAnAd12(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd13}
                onChange={(e) => setLoAnAd13(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd14}
                onChange={(e) => setLoAnAd14(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd15}
                onChange={(e) => setLoAnAd15(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd16}
                onChange={(e) => setLoAnAd16(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd17}
                onChange={(e) => setLoAnAd17(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={LoAnAd18}
                onChange={(e) => setLoAnAd18(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Sundry debtors &gt;  6 months
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb1}
                onChange={(e) => setSunDeb1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb2}
                onChange={(e) => setSunDeb2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb3}
                onChange={(e) => setSunDeb3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb4}
                onChange={(e) => setSunDeb4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb5}
                onChange={(e) => setSunDeb5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb6}
                onChange={(e) => setSunDeb6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb7}
                onChange={(e) => setSunDeb7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunDeb8}
                onChange={(e) => setSunDeb8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Investment
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst1}
                onChange={(e) => setInvst1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst2}
                onChange={(e) => setInvst2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst3}
                onChange={(e) => setInvst3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst4}
                onChange={(e) => setInvst4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst5}
                onChange={(e) => setInvst5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst6}
                onChange={(e) => setInvst6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst7}
                onChange={(e) => setInvst7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Invst8}
                onChange={(e) => setInvst8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Interest accrued on loans
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo1}
                onChange={(e) => setIntAccLo1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo2}
                onChange={(e) => setIntAccLo2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo3}
                onChange={(e) => setIntAccLo3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo4}
                onChange={(e) => setIntAccLo4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo5}
                onChange={(e) => setIntAccLo5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo6}
                onChange={(e) => setIntAccLo6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo7}
                onChange={(e) => setIntAccLo7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntAccLo8}
                onChange={(e) => setIntAccLo8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Others
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth11}
                onChange={(e) => setOth11(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth12}
                onChange={(e) => setOth12(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth13}
                onChange={(e) => setOth13(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth14}
                onChange={(e) => setOth14(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth15}
                onChange={(e) => setOth15(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth16}
                onChange={(e) => setOth16(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth17}
                onChange={(e) => setOth17(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth18}
                onChange={(e) => setOth18(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL NON CURRENT ASSETS
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
              {ToNoCuAs4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNoCuAs5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNoCuAs6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNoCuAs7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToNoCuAs8}
            </Col>
          </Row>

          <Row className="">
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              OTHER CURRENT LIABILITIES 
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            TL  INST due in 1 year IOB
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu1}
                onChange={(e) => setTlInDu1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu2}
                onChange={(e) => setTlInDu2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu3}
                onChange={(e) => setTlInDu3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu4}
                onChange={(e) => setTlInDu4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu5}
                onChange={(e) => setTlInDu5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu6}
                onChange={(e) => setTlInDu6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu7}
                onChange={(e) => setTlInDu7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlInDu8}
                onChange={(e) => setTlInDu8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            TL  INST due in 1 year Banks/ Inst
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa1}
                onChange={(e) => setTlduBa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa2}
                onChange={(e) => setTlduBa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa3}
                onChange={(e) => setTlduBa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa4}
                onChange={(e) => setTlduBa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa5}
                onChange={(e) => setTlduBa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa6}
                onChange={(e) => setTlduBa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa7}
                onChange={(e) => setTlduBa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={TlduBa8}
                onChange={(e) => setTlduBa8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Sundry Creditors Expenses 
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx1}
                onChange={(e) => setSunCrEx1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx2}
                onChange={(e) => setSunCrEx2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx3}
                onChange={(e) => setSunCrEx3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx4}
                onChange={(e) => setSunCrEx4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx5}
                onChange={(e) => setSunCrEx5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx6}
                onChange={(e) => setSunCrEx6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx7}
                onChange={(e) => setSunCrEx7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SunCrEx8}
                onChange={(e) => setSunCrEx8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Expenses Payable
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay1}
                onChange={(e) => setExPay1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay2}
                onChange={(e) => setExPay3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay3}
                onChange={(e) => setExPay3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay4}
                onChange={(e) => setExPay4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay5}
                onChange={(e) => setExPay5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay6}
                onChange={(e) => setExPay6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay7}
                onChange={(e) => setExPay7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ExPay8}
                onChange={(e) => setExPay8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Provisions for Tax etc 
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa1}
                onChange={(e) => setPrFoTa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa2}
                onChange={(e) => setPrFoTa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa3}
                onChange={(e) => setPrFoTa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa4}
                onChange={(e) => setPrFoTa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa5}
                onChange={(e) => setPrFoTa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa6}
                onChange={(e) => setPrFoTa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa7}
                onChange={(e) => setPrFoTa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PrFoTa8}
                onChange={(e) => setPrFoTa8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Others
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth111}
                onChange={(e) => setOth111(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth112}
                onChange={(e) => setOth112(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth113}
                onChange={(e) => setOth113(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth114}
                onChange={(e) => setOth114(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth115}
                onChange={(e) => setOth115(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth116}
                onChange={(e) => setOth116(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth117}
                onChange={(e) => setOth117(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={Oth118}
                onChange={(e) => setOth118(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL OTHER CURRENT LIABILITIES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOtCuLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtCuLi8}
            </Col>
          </Row>

          <Row >
            <Col
              lg="4"
              className="flex justify-center  items-center border-l border-solid border-y  font-bold text-l px-28 py-2"
            >
              OTHER  TERM  LIABILITIES  
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Unsecured Loan Promotors
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr1}
                onChange={(e) => setUnLoPr1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr2}
                onChange={(e) => setUnLoPr2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr3}
                onChange={(e) => setUnLoPr3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr4}
                onChange={(e) => setUnLoPr4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr5}
                onChange={(e) => setUnLoPr5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr6}
                onChange={(e) => setUnLoPr6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr7}
                onChange={(e) => setUnLoPr7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={UnLoPr8}
                onChange={(e) => setUnLoPr8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Defered  Tax
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa1}
                onChange={(e) => setDeTa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa2}
                onChange={(e) => setDeTa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa3}
                onChange={(e) => setDeTa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa4}
                onChange={(e) => setDeTa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa5}
                onChange={(e) => setDeTa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa6}
                onChange={(e) => setDeTa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa7}
                onChange={(e) => setDeTa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={DeTa8}
                onChange={(e) => setDeTa8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Security deposits 
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep1}
                onChange={(e) => setSeDep1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep2}
                onChange={(e) => setSeDep2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep3}
                onChange={(e) => setSeDep3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep4}
                onChange={(e) => setSeDep4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep5}
                onChange={(e) => setSeDep5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep6}
                onChange={(e) => setSeDep6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep7}
                onChange={(e) => setSeDep7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={SeDep8}
                onChange={(e) => setSeDep8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
            Revaluation Reserve
                        </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes1}
                onChange={(e) => setRevRes1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes2}
                onChange={(e) => setRevRes2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes3}
                onChange={(e) => setRevRes3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes4}
                onChange={(e) => RevRes4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes5}
                onChange={(e) => setRevRes5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes6}
                onChange={(e) => setRevRes6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes7}
                onChange={(e) => setRevRes7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={RevRes8}
                onChange={(e) => setRevRes8(e.target.value)}
              />
            </Col>
          </Row>


          <Row>
          <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              TOTAL OTHER TERM LIABILITIES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {ToOtTeLi2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {ToOtTeLi8}
            </Col>
          </Row>
















          </Container>
      
      
    </div>
    </div>
  )
}

export default Ocaocl
