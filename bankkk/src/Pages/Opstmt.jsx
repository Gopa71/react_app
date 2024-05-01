import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Opstmt() {


  

  const[PuRm1, setPuRm1] = useState("");
  const[PuRm2, setPuRm2] = useState("");
  const[PuRm3, setPuRm3] = useState("");
  const[PuRm4, setPuRm4] = useState("");
  const[PuRm5, setPuRm5] = useState("");
  const[PuRm6, setPuRm6] = useState("");
  const[PuRm7, setPuRm7] = useState("");
  const[PuRm8, setPuRm8] = useState("");


  useEffect(() => {
    localStorage.setItem("PuRm1", PuRm1);
  }, [PuRm1]);
  

  useEffect(() => {
    localStorage.setItem("PuRm2", PuRm2);
  }, [PuRm2]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm3", PuRm3);
  }, [PuRm3]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm4", PuRm4);
  }, [PuRm4]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm5", PuRm5);
  }, [PuRm5]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm6", PuRm6);
  }, [PuRm6]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm7", PuRm7);
  }, [PuRm7]);
  
  
  useEffect(() => {
    localStorage.setItem("PuRm8", PuRm8);
  }, [PuRm8]);
  
  







  

  const [savedePre1, setsavedePre1] = useState("");
  const [savedePre2, setsavedePre2] = useState("");
  const [savedePre3, setsavedePre3] = useState("");
  const [savedePre4, setsavedePre4] = useState("");
  const [savedePre5, setsavedePre5] = useState("");
  const [savedePre6, setsavedePre6] = useState("");
  const [savedePre7, setsavedePre7] = useState("");
  const [savedePre8, setsavedePre8] = useState("");




  const [salesRe, setSalesRe] = useState("");
  const [salesEx, setSalesEx] = useState("");
  const [othErs, setOthErs] = useState("");
  const [display, setDisplay] = useState("0");

  const sum = () => {
    try {
      const result = eval(`${salesEx || 0} + ${salesRe || 0} + ${othErs || 0}`);
      setDisplay(result);
    } catch (error) {
      setDisplay("Input all "); 
    }
  };

  useEffect(() => {
    sum();
  }, [othErs, salesEx, salesRe]);

  const [salesRe1, setSalesRe1] = useState("");
  const [salesEx1, setSalesEx1] = useState("");
  const [othErs1, setOthErs1] = useState("");
  const [display1, setDisplay1] = useState("0");

  const sum1 = () => {
    try {
      if (
        typeof salesEx1 === "undefined" ||
        typeof salesRe1 === "undefined" ||
        typeof othErs1 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result1 = eval(
        `${salesEx1 || 0} + ${salesRe1 || 0} + ${othErs1 || 0}`
      );
      setDisplay1(result1);
    } catch (error) {
      setDisplay1("Input all ");
    }
  };

  useEffect(() => {
    sum1();
  }, [othErs1, salesEx1, salesRe1]);

  const [salesRe2, setSalesRe2] = useState("");
  const [salesEx2, setSalesEx2] = useState("");
  const [othErs2, setOthErs2] = useState("");
  const [display2, setDisplay2] = useState("0");

  const sum2 = () => {
    try {
      if (
        typeof salesEx2 === "undefined" ||
        typeof salesRe2 === "undefined" ||
        typeof othErs2 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result2 = eval(
        `${salesEx2 || 0} + ${salesRe2 || 0} + ${othErs2 || 0}`
      );
      setDisplay2(result2);
    } catch (error) {
      setDisplay2("Input all ");
    }
  };

  useEffect(() => {
    sum2();
  }, [othErs2, salesEx2, salesRe2]);

  const [salesRe3, setSalesRe3] = useState("");
  const [salesEx3, setSalesEx3] = useState("");
  const [othErs3, setOthErs3] = useState("");
  const [display3, setDisplay3] = useState("0");

  const sum3 = () => {
    try {
      if (
        typeof salesEx3 === "undefined" ||
        typeof salesRe3 === "undefined" ||
        typeof othErs3 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result3 = eval(
        `${salesEx3 || 0} + ${salesRe3 || 0} + ${othErs3 || 0}`
      );
      setDisplay3(result3);
    } catch (error) {
      setDisplay3("Input all ");
    }
  };

  useEffect(() => {
    sum3();
  }, [othErs3, salesEx3, salesRe3]);

  const [salesRe4, setSalesRe4] = useState("");
  const [salesEx4, setSalesEx4] = useState("");
  const [othErs4, setOthErs4] = useState("");
  const [display4, setDisplay4] = useState("0");

  const sum4 = () => {
    try {
      if (
        typeof salesEx4 === "undefined" ||
        typeof salesRe4 === "undefined" ||
        typeof othErs4 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result4 = eval(
        `${salesEx4 || 0} + ${salesRe4 || 0} + ${othErs4 || 0}`
      );
      setDisplay4(result4);
    } catch (error) {
      setDisplay4("Input all ");
    }
  };

  useEffect(() => {
    sum4();
  }, [othErs4, salesEx4, salesRe4]);

  const [salesRe5, setSalesRe5] = useState("");
  const [salesEx5, setSalesEx5] = useState("");
  const [othErs5, setOthErs5] = useState("");
  const [display5, setDisplay5] = useState("0");

  const sum5 = () => {
    try {
      if (
        typeof salesEx5 === "undefined" ||
        typeof salesRe5 === "undefined" ||
        typeof othErs5 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result5 = eval(
        `${salesEx5 || 0} + ${salesRe5 || 0} + ${othErs5 || 0}`
      );
      setDisplay5(result5);
    } catch (error) {
      setDisplay5("Input all ");
    }
  };

  useEffect(() => {
    sum5();
  }, [othErs5, salesEx5, salesRe5]);

  const [salesRe6, setSalesRe6] = useState("");
  const [salesEx6, setSalesEx6] = useState("");
  const [othErs6, setOthErs6] = useState("");
  const [display6, setDisplay6] = useState("0");

  const sum6 = () => {
    try {
      if (
        typeof salesEx6 === "undefined" ||
        typeof salesRe6 === "undefined" ||
        typeof othErs6 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result6 = eval(
        `${salesEx6 || 0} + ${salesRe6 || 0} + ${othErs6 || 0}`
      );
      setDisplay6(result6);
    } catch (error) {
      setDisplay6("Input all ");
    }
  };

  useEffect(() => {
    sum6();
  }, [othErs6, salesEx6, salesRe6]);

  const [salesRe7, setSalesRe7] = useState("");
  const [salesEx7, setSalesEx7] = useState("");
  const [othErs7, setOthErs7] = useState("");
  const [display7, setDisplay7] = useState("0");

  useEffect(() => {
    localStorage.setItem("display", display);
  }, [display]);


  useEffect(() => {
    localStorage.setItem("display1", display1);
  }, [display1]);

  useEffect(() => {
    localStorage.setItem("display2", display2);
  }, [display2]);

  useEffect(() => {
    localStorage.setItem("display3", display3);
  }, [display3]);


  useEffect(() => {
    localStorage.setItem("display4", display4);
  }, [display4]);

  useEffect(() => {
    localStorage.setItem("display5", display5);
  }, [display5]);
  
  useEffect(() => {
    localStorage.setItem("display6", display6);
  }, [display6]);


  useEffect(() => {
    localStorage.setItem("display7", display7);
  }, [display7]);
  
  
  
    





  const sum7 = () => {
    try {
      if (
        typeof salesEx7 === "undefined" ||
        typeof salesRe7 === "undefined" ||
        typeof othErs7 === "undefined"
      ) {
        throw new Error("Input all values");
      }
      const result7 = eval(
        `${salesEx7 || 0} + ${salesRe7 || 0} + ${othErs7 || 0}`
      );
      setDisplay7(result7);
    } catch (error) {
      setDisplay7("Input all ");
    }
  };

  useEffect(() => {
    sum7();
  }, [othErs7, salesEx7, salesRe7]);

  const [finGo1, setfinGo1] = useState("");
  // const [FiGood12, setfinGo2] = useState("");

  // const [FiGood13, setFiGood13] = useState("");

  // const [FiGood14, setFiGood14] = useState("");

  // const [FiGood15, setFiGood15] = useState("");

  // const [FiGood16, setFiGood16] = useState("");

  // const [FiGood17, setFiGood17] = useState("");

  // const [FiGood18, setFiGood18] = useState("");

  const [wrkPo1, setwrkPo1] = useState("");
  // const [wrkPo12, setwrkPo2] = useState("");
  // const [wrkPo13, setwrkPo13] = useState("");
  // const [wrkPo14, setwrkPo14] = useState("");
  // const [wrkPo15, setwrkPo15] = useState("");
  // const [wrkPo16, setwrkPo16] = useState("");
  // const [wrkPo17, setwrkPo17] = useState("");
  // const [wrkPo18, setwrkPo18] = useState("");

  const [raMat1, setraMat1] = useState("");
  const [raMat12, setraMat12] = useState("");
  const [raMat13, setraMat13] = useState("");
  const [raMat14, setraMat14] = useState("");
  const [raMat15, setraMat15] = useState("");
  const [raMat16, setraMat16] = useState("");
  const [raMat17, setraMat17] = useState("");
  const [raMat18, setraMat18] = useState("");

  const [pwFu1, setpwFu1] = useState("");
  const [pwFu2, setpwFu2] = useState("");
  const [pwFu3, setpwFu3] = useState("");
  const [pwFu4, setpwFu4] = useState("");
  const [pwFu5, setpwFu5] = useState("");
  const [pwFu6, setpwFu6] = useState("");
  const [pwFu7, setpwFu7] = useState("");
  const [pwFu8, setpwFu8] = useState("");

  const [drLa1, setdrLa1] = useState("");
  const [drLa2, setdrLa2] = useState("");
  const [drLa3, setdrLa3] = useState("");
  const [drLa4, setdrLa4] = useState("");
  const [drLa5, setdrLa5] = useState("");
  const [drLa6, setdrLa6] = useState("");
  const [drLa7, setdrLa7] = useState("");
  const [drLa8, setdrLa8] = useState("");

  const [ReMa1, setReMa1] = useState("");
  const [ReMa2, setReMa2] = useState("");
  const [ReMa3, setReMa3] = useState("");
  const [ReMa4, setReMa4] = useState("");
  const [ReMa5, setReMa5] = useState("");
  const [ReMa6, setReMa6] = useState("");
  const [ReMa7, setReMa7] = useState("");
  const [ReMa8, setReMa8] = useState("");

  const [mfDiEx1, setmfDiEx1] = useState("");
  const [mfDiEx2, setmfDiEx2] = useState("");
  const [mfDiEx3, setmfDiEx3] = useState("");
  const [mfDiEx4, setmfDiEx4] = useState("");
  const [mfDiEx5, setmfDiEx5] = useState("");
  const [mfDiEx6, setmfDiEx6] = useState("");
  const [mfDiEx7, setmfDiEx7] = useState("");
  const [mfDiEx8, setmfDiEx8] = useState("");

  const [dePre1, setdePre1] = useState("");
  const [dePre2, setdePre2] = useState("");
  const [dePre3, setdePre3] = useState("");
  const [dePre4, setdePre4] = useState("");
  const [dePre5, setdePre5] = useState("");
  const [dePre6, setdePre6] = useState("");
  const [dePre7, setdePre7] = useState("");
  const [dePre8, setdePre8] = useState("");

  const [FiGood12, setFiGood12] = useState("");
  const [FiGood13, setFiGood13] = useState("");
  const [FiGood14, setFiGood14] = useState("");
  const [FiGood15, setFiGood15] = useState("");
  const [FiGood16, setFiGood16] = useState("");
  const [FiGood17, setFiGood17] = useState("");
  const [FiGood18, setFiGood18] = useState("");
  const [FiGood19, setFiGood19] = useState("");

  const [wrkPo12, setwrkPo12] = useState("");
  const [wrkPo13, setwrkPo13] = useState("");
  const [wrkPo14, setwrkPo14] = useState("");
  const [wrkPo15, setwrkPo15] = useState("");
  const [wrkPo16, setwrkPo16] = useState("");
  const [wrkPo17, setwrkPo17] = useState("");
  const [wrkPo18, setwrkPo18] = useState("");
  const [wrkPo19, setwrkPo19] = useState("");

  // const [raMat12, setraMat12] = useState("");
  // const [raMat13, setraMat13] = useState("");
  // const [raMat14, setraMat14] = useState("");
  // const [raMat15, setraMat15] = useState("");
  // const [raMat16, setraMat16] = useState("");
  // const [raMat17, setraMat17] = useState("");
  // const [raMat18, setraMat18] = useState("");
  const [raMat19, setraMat19] = useState("");

  // COST OF SALES   =SUM(B13:B21)-SUM(B23:B25)

  const [costsales1, setcostsales1] = useState("");

  const costsales1Sum = () => {
    try {
      const sales1Sum = eval(
        `(${dePre1 || 0} + ${finGo1 || 0} + ${wrkPo1 || 0} + ${raMat1 || 0} +
         ${pwFu1 || 0} + ${drLa1 || 0} + ${ReMa1 || 0} + ${mfDiEx1 || 0}) - 
         (${FiGood12 || 0} + ${wrkPo12 || 0} + ${raMat12 || 0} )`
      );
      setcostsales1(sales1Sum);
    } catch (error) {
      setcostsales1("Input all ");
    }
  };

  useEffect(() => {
    costsales1Sum();
  }, [
    dePre1,
    finGo1,
    wrkPo1,
    raMat1,
    pwFu1,
    drLa1,
    ReMa1,
    mfDiEx1,
    FiGood12,
    wrkPo12,
    raMat12,
  ]);

  const [costsales2, setcostsales2] = useState("");

  const costsales2Sum = () => {
    try {
      const sales2Sum = eval(
        `(${dePre2 || 0} + ${FiGood12 || 0} + ${wrkPo12 || 0} + ${raMat12 || 0} +
       ${pwFu2 || 0} + ${drLa2 || 0} + ${ReMa2 || 0} + ${mfDiEx2 || 0}) - 
       (${FiGood13 || 0} + ${wrkPo13 || 0} + ${raMat13 || 0} )`
      );
      setcostsales2(sales2Sum);
    } catch (error) {
      setcostsales2("Input all ");
    }
  };

  useEffect(() => {
    costsales2Sum();
  }, [
    dePre2,
    FiGood12,
    wrkPo12,
    raMat12,
    pwFu2,
    drLa2,
    ReMa2,
    mfDiEx2,
    FiGood13,
    wrkPo13,
    raMat13,
  ]);

  const [costsales3, setcostsales3] = useState("");

  const costsales3Sum = () => {
    try {
      const sales3Sum = eval(
        `(${dePre3 || 0} + ${FiGood13 || 0} + ${wrkPo13 || 0} + ${raMat13 || 0} +
       ${pwFu3 || 0} + ${drLa3 || 0} + ${ReMa3 || 0} + ${mfDiEx3 || 0}) - 
       (${FiGood14 || 0} + ${wrkPo14 || 0} + ${raMat14 || 0} )`
      );
      setcostsales3(sales3Sum);
    } catch (error) {
      setcostsales3("Input all ");
    }
  };

  useEffect(() => {
    costsales3Sum();
  }, [
    dePre3,
    FiGood13,
    wrkPo13,
    raMat13,
    pwFu3,
    drLa3,
    ReMa3,
    mfDiEx3,
    FiGood14,
    wrkPo14,
    raMat14,
  ]);

  const [costsales4, setcostsales4] = useState("");

  const costsales4Sum = () => {
    try {
      const sales4Sum = eval(
        `(${dePre4 || 0} + ${FiGood14 || 0} + ${wrkPo14 || 0} + ${raMat14 || 0} +
       ${pwFu4 || 0} + ${drLa4 || 0} + ${ReMa4 || 0} + ${mfDiEx4 || 0}) - 
       (${FiGood15 || 0} + ${wrkPo15 || 0} + ${raMat15 || 0} )`
      );
      setcostsales4(sales4Sum);
    } catch (error) {
      setcostsales4("Input all ");
    }
  };

  useEffect(() => {
    costsales4Sum();
  }, [
    dePre4,
    FiGood14,
    wrkPo14,
    raMat14,
    pwFu4,
    drLa4,
    ReMa4,
    mfDiEx4,
    FiGood15,
    wrkPo15,
    raMat15,
  ]);

  const [costsales5, setcostsales5] = useState("");

  const costsales5Sum = () => {
    try {
      const sales5Sum = eval(
        `(${dePre5 || 0} + ${FiGood15 || 0} + ${wrkPo15 || 0} + ${raMat15 || 0} +
       ${pwFu5 || 0} + ${drLa5 || 0} + ${ReMa5 || 0} + ${mfDiEx5 || 0}) - 
       (${FiGood16 || 0} + ${wrkPo16 || 0} + ${raMat16 || 0} )`
      );
      setcostsales5(sales5Sum);
    } catch (error) {
      setcostsales5("Input all ");
    }
  };

  useEffect(() => {
    costsales5Sum();
  }, [
    dePre5,
    FiGood15,
    wrkPo15,
    raMat15,
    pwFu5,
    drLa5,
    ReMa5,
    mfDiEx5,
    FiGood16,
    wrkPo16,
    raMat16,
  ]);

  const [costsales6, setcostsales6] = useState("");

  const costsales6Sum = () => {
    try {
      const sales6Sum = eval(
        `(${dePre6 || 0} + ${FiGood16 || 0} + ${wrkPo16 || 0} + ${raMat16 || 0} +
       ${pwFu6 || 0} + ${drLa6 || 0} + ${ReMa6 || 0} + ${mfDiEx6 || 0}) - 
       (${FiGood17 || 0} + ${wrkPo17 || 0} + ${raMat17 || 0} )`
      );
      setcostsales6(sales6Sum);
    } catch (error) {
      setcostsales6("Input all ");
    }
  };

  useEffect(() => {
    costsales6Sum();
  }, [
    dePre6,
    FiGood16,
    wrkPo16,
    raMat16,
    pwFu6,
    drLa6,
    ReMa6,
    mfDiEx6,
    FiGood17,
    wrkPo17,
    raMat17,
  ]);

  const [costsales7, setcostsales7] = useState("");

  const costsales7Sum = () => {
    try {
      const sales7Sum = eval(
        `(${dePre7 || 0} + ${FiGood17 || 0} + ${wrkPo17 || 0} + ${raMat17 || 0} +
       ${pwFu7 || 0} + ${drLa7 || 0} + ${ReMa7 || 0} + ${mfDiEx7 || 0}) - 
       (${FiGood18 || 0} + ${wrkPo18 || 0} + ${raMat18 || 0} )`
      );
      setcostsales7(sales7Sum);
    } catch (error) {
      setcostsales7("Input all ");
    }
  };

  useEffect(() => {
    costsales7Sum();
  }, [
    dePre7,
    FiGood17,
    wrkPo17,
    raMat17,
    pwFu7,
    drLa7,
    ReMa7,
    mfDiEx7,
    FiGood18,
    wrkPo18,
    raMat18,
  ]);

  const [costsales8, setcostsales8] = useState("");

  const costsales8Sum = () => {
    try {
      const sales8Sum = eval(
        `(${dePre8 || 0} + ${FiGood18 || 0} + ${wrkPo18 || 0} + ${raMat18 || 0} +
       ${pwFu8 || 0} + ${drLa8 || 0} + ${ReMa8 || 0} + ${mfDiEx8 || 0}) - 
       (${FiGood19 || 0} + ${wrkPo19 || 0} + ${raMat19 || 0} )`
      );
      setcostsales8(sales8Sum);
    } catch (error) {
      setcostsales8("Input all ");
    }
  };

  useEffect(() => {
    costsales8Sum();
  }, [
    dePre8,
    FiGood18,
    wrkPo18,
    raMat18,
    pwFu8,
    drLa8,
    ReMa8,
    mfDiEx8,
    FiGood19,
    wrkPo19,
    raMat19,
  ]);

  // -----------------------------------------------

  const [costprod1, setcostprod1] = useState("");

  const costprod1Sum = () => {
    try {
      const prod1Sum = eval(
        `(${dePre1 || 0} +  ${wrkPo1 || 0} + ${raMat1 || 0} +
         ${pwFu1 || 0} + ${drLa1 || 0} + ${ReMa1 || 0} + ${mfDiEx1 || 0}) - 
         ( ${wrkPo12 || 0} + ${raMat12 || 0} )`
      );
      setcostprod1(prod1Sum);
    } catch (error) {
      setcostprod1("Input all ");
    }
  };

  useEffect(() => {
    costprod1Sum();
  }, [dePre1, wrkPo1, raMat1, pwFu1, drLa1, ReMa1, mfDiEx1, wrkPo12, raMat12]);

  const [costprod2, setcostprod2] = useState("");

  const costprod2Sum = () => {
    try {
      const prod2Sum = eval(
        `(${dePre2 || 0} +  ${wrkPo12 || 0} + ${raMat12 || 0} +
         ${pwFu2 || 0} + ${drLa2 || 0} + ${ReMa2 || 0} + ${mfDiEx2 || 0}) - 
         ( ${wrkPo13 || 0} + ${raMat13 || 0} )`
      );
      setcostprod2(prod2Sum);
    } catch (error) {
      setcostprod2("Input all ");
    }
  };

  useEffect(() => {
    costprod2Sum();
  }, [dePre2, wrkPo12, raMat12, pwFu2, drLa2, ReMa2, mfDiEx2, wrkPo13, raMat13]);

  const [costprod3, setcostprod3] = useState("");

  const costprod3Sum = () => {
    try {
      const prod3Sum = eval(
        `(${dePre3 || 0} +  ${wrkPo13 || 0} + ${raMat13 || 0} +
         ${pwFu3 || 0} + ${drLa3 || 0} + ${ReMa3 || 0} + ${mfDiEx3 || 0}) - 
         ( ${wrkPo14 || 0} + ${raMat14 || 0} )`
      );
      setcostprod3(prod3Sum);
    } catch (error) {
      setcostprod3("Input all ");
    }
  };

  useEffect(() => {
    costprod3Sum();
  }, [dePre3, wrkPo13, raMat13, pwFu3, drLa3, ReMa3, mfDiEx3, wrkPo14, raMat14]);

  const [costprod4, setcostprod4] = useState("");

  const costprod4Sum = () => {
    try {
      const prod4Sum = eval(
        `(${dePre4 || 0} +  ${wrkPo14 || 0} + ${raMat14 || 0} +
         ${pwFu4 || 0} + ${drLa4 || 0} + ${ReMa4 || 0} + ${mfDiEx4 || 0}) - 
         ( ${wrkPo15 || 0} + ${raMat15 || 0} )`
      );
      setcostprod4(prod4Sum);
    } catch (error) {
      setcostprod4("Input all ");
    }
  };

  useEffect(() => {
    costprod4Sum();
  }, [dePre4, wrkPo14, raMat14, pwFu4, drLa4, ReMa4, mfDiEx4, wrkPo15, raMat15]);

  const [costprod5, setcostprod5] = useState("");

  const costprod5Sum = () => {
    try {
      const prod5Sum = eval(
        `(${dePre5 || 0} +  ${wrkPo15 || 0} + ${raMat15 || 0} +
         ${pwFu5 || 0} + ${drLa5 || 0} + ${ReMa5 || 0} + ${mfDiEx5 || 0}) - 
         ( ${wrkPo16 || 0} + ${raMat16 || 0} )`
      );
      setcostprod5(prod5Sum);
    } catch (error) {
      setcostprod5("Input all ");
    }
  };

  useEffect(() => {
    costprod5Sum();
  }, [dePre5, wrkPo15, raMat15, pwFu5, drLa5, ReMa5, mfDiEx5, wrkPo16, raMat16]);

  const [costprod6, setcostprod6] = useState("");

  const costprod6Sum = () => {
    try {
      const prod6Sum = eval(
        `(${dePre6 || 0} +  ${wrkPo16 || 0} + ${raMat16 || 0} +
         ${pwFu6 || 0} + ${drLa6 || 0} + ${ReMa6 || 0} + ${mfDiEx6 || 0}) - 
         ( ${wrkPo17 || 0} + ${raMat17 || 0} )`
      );
      setcostprod6(prod6Sum);
    } catch (error) {
      setcostprod6("Input all ");
    }
  };

  useEffect(() => {
    costprod6Sum();
  }, [dePre6, wrkPo16, raMat16, pwFu6, drLa6, ReMa6, mfDiEx6, wrkPo17, raMat17]);

  const [costprod7, setcostprod7] = useState("");

  const costprod7Sum = () => {
    try {
      const prod7Sum = eval(
        `(${dePre7 || 0} +  ${wrkPo17 || 0} + ${raMat17 || 0} +
         ${pwFu7 || 0} + ${drLa7 || 0} + ${ReMa7 || 0} + ${mfDiEx7 || 0}) - 
         ( ${wrkPo18 || 0} + ${raMat18 || 0} )`
      );
      setcostprod7(prod7Sum);
    } catch (error) {
      setcostprod7("Input all ");
    }
  };

  useEffect(() => {
    costprod7Sum();
  }, [dePre7, wrkPo17, raMat17, pwFu7, drLa7, ReMa7, mfDiEx7, wrkPo18, raMat18]);

  const [costprod8, setcostprod8] = useState("");

  const costprod8Sum = () => {
    try {
      const prod8Sum = eval(
        `(${dePre8 || 0} +  ${wrkPo18 || 0} + ${raMat18 || 0} +
         ${pwFu8 || 0} + ${drLa8 || 0} + ${ReMa8 || 0} + ${mfDiEx8 || 0}) - 
         ( ${wrkPo19 || 0} + ${raMat19 || 0} )`
      );
      setcostprod8(prod8Sum);
    } catch (error) {
      setcostprod8("Input all ");
    }
  };

  useEffect(() => {
    costprod8Sum();
  }, [dePre8, wrkPo18, raMat18, pwFu8, drLa8, ReMa8, mfDiEx8, wrkPo19, raMat19]);

  // -----------------------------------

  const [grossprof1, setgrossprof1] = useState("");

  const grossprof1Sum = () => {
    try {
      const gross1Sum = eval(
        `(${display || 0} +  ${FiGood12 || 0} ) - 
       ( ${costprod1 || 0}  )`
      );
      setgrossprof1(gross1Sum);
    } catch (error) {
      setgrossprof1("Input all ");
    }
  };

  useEffect(() => {
    grossprof1Sum();
  }, [display, FiGood12, costprod1]);

  const [grossprof2, setgrossprof2] = useState("");

  const grossprof2Sum = () => {
    try {
      const gross2Sum = eval(
        `(${display || 0} +  ${FiGood13 || 0} ) - 
       ( ${costprod2 || 0}  )`
      );
      setgrossprof2(gross2Sum);
    } catch (error) {
      setgrossprof2("Input all ");
    }
  };

  useEffect(() => {
    grossprof2Sum();
  }, [display, FiGood13, costprod2]);

  const [grossprof3, setgrossprof3] = useState("");

  const grossprof3Sum = () => {
    try {
      const gross3Sum = eval(
        `(${display || 0} +  ${FiGood14 || 0} ) - 
       ( ${costprod3 || 0}  )`
      );
      setgrossprof3(gross3Sum);
    } catch (error) {
      setgrossprof3("Input all ");
    }
  };

  useEffect(() => {
    grossprof3Sum();
  }, [display, FiGood14, costprod3]);

  const [grossprof4, setgrossprof4] = useState("");

  const grossprof4Sum = () => {
    try {
      const gross4Sum = eval(
        `(${display || 0} +  ${FiGood15 || 0} ) - 
       ( ${costprod4 || 0}  )`
      );
      setgrossprof4(gross4Sum);
    } catch (error) {
      setgrossprof4("Input all ");
    }
  };

  useEffect(() => {
    grossprof4Sum();
  }, [display, FiGood15, costprod4]);

  const [grossprof5, setgrossprof5] = useState("");

  const grossprof5Sum = () => {
    try {
      const gross5Sum = eval(
        `(${display || 0} +  ${FiGood16 || 0} ) - 
       ( ${costprod5 || 0}  )`
      );
      setgrossprof5(gross5Sum);
    } catch (error) {
      setgrossprof5("Input all ");
    }
  };

  useEffect(() => {
    grossprof5Sum();
  }, [display, FiGood16, costprod5]);

  const [grossprof6, setgrossprof6] = useState("");

  const grossprof6Sum = () => {
    try {
      const gross6Sum = eval(
        `(${display || 0} +  ${FiGood17 || 0} ) - 
       ( ${costprod6 || 0}  )`
      );
      setgrossprof6(gross6Sum);
    } catch (error) {
      setgrossprof6("Input all ");
    }
  };

  useEffect(() => {
    grossprof6Sum();
  }, [display, FiGood17, costprod6]);

  const [grossprof7, setgrossprof7] = useState("");

  const grossprof7Sum = () => {
    try {
      const gross7Sum = eval(
        `(${display || 0} +  ${FiGood18 || 0} ) - 
       ( ${costprod7 || 0}  )`
      );
      setgrossprof7(gross7Sum);
    } catch (error) {
      setgrossprof7("Input all ");
    }
  };

  useEffect(() => {
    grossprof7Sum();
  }, [display, FiGood18, costprod7]);

  const [grossprof8, setgrossprof8] = useState("");

  const grossprof8Sum = () => {
    try {
      const gross8Sum = eval(
        `(${display || 0} +  ${FiGood19 || 0} ) - 
       ( ${costprod8 || 0}  )`
      );
      setgrossprof8(gross8Sum);
    } catch (error) {
      setgrossprof8("Input all ");
    }
  };

  useEffect(() => {
    grossprof8Sum();
  }, [display, FiGood19, costprod8]);

  // -------------------------------------------

  const [selAdm1, setselAdm1] = useState("");
  const [selAdm2, setselAdm2] = useState("");
  const [selAdm3, setselAdm3] = useState("");
  const [selAdm4, setselAdm4] = useState("");
  const [selAdm5, setselAdm5] = useState("");
  const [selAdm6, setselAdm6] = useState("");
  const [selAdm7, setselAdm7] = useState("");
  const [selAdm8, setselAdm8] = useState("");

  const [IntFinch, setIntFinch] = useState("");
  const [IntFinch2, setIntFinch2] = useState("");
  const [IntFinch3, setIntFinch3] = useState("");
  const [IntFinch4, setIntFinch4] = useState("");
  const [IntFinch5, setIntFinch5] = useState("");
  const [IntFinch6, setIntFinch6] = useState("");
  const [IntFinch7, setIntFinch7] = useState("");
  const [IntFinch8, setIntFinch8] = useState("");

  //  OPERATING PROFIT / LOSS--------------------------------------

  const [opProLo1, setopProLo1] = useState("");

  const opProLo1Sum = () => {
    try {
      const opprL1Sum = eval(
        `(${grossprof1 || 0}  ) - 
       ( ${selAdm1 || 0} + ${IntFinch || 0} )`
      );
      setopProLo1(opprL1Sum);
    } catch (error) {
      setopProLo1("Input all ");
    }
  };

  useEffect(() => {
    opProLo1Sum();
  }, [grossprof1, selAdm1, IntFinch]);

  const [opProLo2, setopProLo2] = useState("");

  const opProLo2Sum = () => {
    try {
      const opprL2Sum = eval(
        `(${grossprof2 || 0}  ) - 
     ( ${selAdm2 || 0} + ${IntFinch2 || 0} )`
      );
      setopProLo2(opprL2Sum);
    } catch (error) {
      setopProLo2("Input all ");
    }
  };

  useEffect(() => {
    opProLo2Sum();
  }, [grossprof2, selAdm2, IntFinch2]);

  const [opProLo3, setopProLo3] = useState("");

  const opProLo3Sum = () => {
    try {
      const opprL3Sum = eval(
        `(${grossprof3 || 0}  ) - 
     ( ${selAdm3 || 0} + ${IntFinch3 || 0} )`
      );
      setopProLo3(opprL3Sum);
    } catch (error) {
      setopProLo3("Input all ");
    }
  };

  useEffect(() => {
    opProLo3Sum();
  }, [grossprof3, selAdm3, IntFinch3]);

  const [opProLo4, setopProLo4] = useState("");

  const opProLo4Sum = () => {
    try {
      const opprL4Sum = eval(
        `(${grossprof4 || 0}  ) - 
     ( ${selAdm4 || 0} + ${IntFinch4 || 0} )`
      );
      setopProLo4(opprL4Sum);
    } catch (error) {
      setopProLo4("Input all ");
    }
  };

  useEffect(() => {
    opProLo4Sum();
  }, [grossprof4, selAdm4, IntFinch4]);

  const [opProLo5, setopProLo5] = useState("");

  const opProLo5Sum = () => {
    try {
      const opprL5Sum = eval(
        `(${grossprof5 || 0}  ) - 
     ( ${selAdm5 || 0} + ${IntFinch5 || 0} )`
      );
      setopProLo5(opprL5Sum);
    } catch (error) {
      setopProLo5("Input all ");
    }
  };

  useEffect(() => {
    opProLo5Sum();
  }, [grossprof5, selAdm5, IntFinch5]);

  const [opProLo6, setopProLo6] = useState("");

  const opProLo6Sum = () => {
    try {
      const opprL6Sum = eval(
        `(${grossprof6 || 0}  ) - 
     ( ${selAdm6 || 0} + ${IntFinch6 || 0} )`
      );
      setopProLo6(opprL6Sum);
    } catch (error) {
      setopProLo6("Input all ");
    }
  };

  useEffect(() => {
    opProLo6Sum();
  }, [grossprof6, selAdm6, IntFinch6]);

  const [opProLo7, setopProLo7] = useState("");

  const opProLo7Sum = () => {
    try {
      const opprL7Sum = eval(
        `(${grossprof7 || 0}  ) - 
     ( ${selAdm7 || 0} + ${IntFinch7 || 0} )`
      );
      setopProLo7(opprL7Sum);
    } catch (error) {
      setopProLo7("Input all ");
    }
  };

  useEffect(() => {
    opProLo7Sum();
  }, [grossprof7, selAdm7, IntFinch7]);

  const [opProLo8, setopProLo8] = useState("");

  const opProLo8Sum = () => {
    try {
      const opprL8Sum = eval(
        `(${grossprof8 || 0}  ) - 
     ( ${selAdm8 || 0} + ${IntFinch8 || 0} )`
      );
      setopProLo8(opprL8Sum);
    } catch (error) {
      setopProLo8("Input all ");
    }
  };

  useEffect(() => {
    opProLo8Sum();
  }, [grossprof8, selAdm8, IntFinch8]);

  // --------------------------------------

  const [adOthIn1, setadOthIn1] = useState("");
  const [adOthIn2, setadOthIn2] = useState("");
  const [adOthIn3, setadOthIn3] = useState("");
  const [adOthIn4, setadOthIn4] = useState("");
  const [adOthIn5, setadOthIn5] = useState("");
  const [adOthIn6, setadOthIn6] = useState("");
  const [adOthIn7, setadOthIn7] = useState("");
  const [adOthIn8, setadOthIn8] = useState("");

  const [leOtEx1, setleOtEx1] = useState("");
  const [leOtEx2, setleOtEx2] = useState("");
  const [leOtEx3, setleOtEx3] = useState("");
  const [leOtEx4, setleOtEx4] = useState("");
  const [leOtEx5, setleOtEx5] = useState("");
  const [leOtEx6, setleOtEx6] = useState("");
  const [leOtEx7, setleOtEx7] = useState("");
  const [leOtEx8, setleOtEx8] = useState("");

  // profit before tax

  const [prBeTa1, setprBeTa1] = useState("");

  const prBeTa1Sum = () => {
    try {
      const prBe1Sum = eval(
        `(${opProLo1 || 0}  ) + 
       ( ${adOthIn1 || 0} - ${leOtEx1 || 0} )`
      );
      setprBeTa1(prBe1Sum);
    } catch (error) {
      setprBeTa1("Input all ");
    }
  };

  useEffect(() => {
    prBeTa1Sum();
  }, [opProLo1, adOthIn1, leOtEx1]);

  const [prBeTa2, setprBeTa2] = useState("");

  const prBeTa2Sum = () => {
    try {
      const prBe2Sum = eval(
        `(${opProLo2 || 0}  ) + 
     ( ${adOthIn2 || 0} - ${leOtEx2 || 0} )`
      );
      setprBeTa2(prBe2Sum);
    } catch (error) {
      setprBeTa2("Input all ");
    }
  };

  useEffect(() => {
    prBeTa2Sum();
  }, [opProLo2, adOthIn2, leOtEx2]);

  const [prBeTa3, setprBeTa3] = useState("");

  const prBeTa3Sum = () => {
    try {
      const prBe3Sum = eval(
        `(${opProLo3 || 0}  ) + 
     ( ${adOthIn3 || 0} - ${leOtEx3 || 0} )`
      );
      setprBeTa3(prBe3Sum);
    } catch (error) {
      setprBeTa3("Input all ");
    }
  };

  useEffect(() => {
    prBeTa3Sum();
  }, [opProLo3, adOthIn3, leOtEx3]);

  const [prBeTa4, setprBeTa4] = useState("");

  const prBeTa4Sum = () => {
    try {
      const prBe4Sum = eval(
        `(${opProLo4 || 0}  ) + 
     ( ${adOthIn4 || 0} - ${leOtEx4 || 0} )`
      );
      setprBeTa4(prBe4Sum);
    } catch (error) {
      setprBeTa4("Input all ");
    }
  };

  useEffect(() => {
    prBeTa4Sum();
  }, [opProLo4, adOthIn4, leOtEx4]);

  const [prBeTa5, setprBeTa5] = useState("");

  const prBeTa5Sum = () => {
    try {
      const prBe5Sum = eval(
        `(${opProLo5 || 0}  ) + 
     ( ${adOthIn5 || 0} - ${leOtEx5 || 0} )`
      );
      setprBeTa5(prBe5Sum);
    } catch (error) {
      setprBeTa5("Input all ");
    }
  };

  useEffect(() => {
    prBeTa5Sum();
  }, [opProLo5, adOthIn5, leOtEx5]);

  const [prBeTa6, setprBeTa6] = useState("");

  const prBeTa6Sum = () => {
    try {
      const prBe6Sum = eval(
        `(${opProLo6 || 0}  ) + 
     ( ${adOthIn6 || 0} - ${leOtEx6 || 0} )`
      );
      setprBeTa6(prBe6Sum);
    } catch (error) {
      setprBeTa6("Input all ");
    }
  };

  useEffect(() => {
    prBeTa6Sum();
  }, [opProLo6, adOthIn6, leOtEx6]);

  const [prBeTa7, setprBeTa7] = useState("");

  const prBeTa7Sum = () => {
    try {
      const prBe7Sum = eval(
        `(${opProLo7 || 0}  ) + 
     ( ${adOthIn7 || 0} - ${leOtEx7 || 0} )`
      );
      setprBeTa7(prBe7Sum);
    } catch (error) {
      setprBeTa7("Input all ");
    }
  };

  useEffect(() => {
    prBeTa7Sum();
  }, [opProLo7, adOthIn7, leOtEx7]);

  const [prBeTa8, setprBeTa8] = useState("");

  const prBeTa8Sum = () => {
    try {
      const prBe8Sum = eval(
        `(${opProLo8 || 0}  ) + 
     ( ${adOthIn8 || 0} - ${leOtEx8 || 0} )`
      );
      setprBeTa8(prBe8Sum);
    } catch (error) {
      setprBeTa8("Input all ");
    }
  };

  useEffect(() => {
    prBeTa8Sum();
  }, [opProLo8, adOthIn8, leOtEx8]);

  // --------------------------------------

  const [prFoTa1, setprFoTa1] = useState("");
  const [prFoTa2, setprFoTa2] = useState("");
  const [prFoTa3, setprFoTa3] = useState("");
  const [prFoTa4, setprFoTa4] = useState("");
  const [prFoTa5, setprFoTa5] = useState("");
  const [prFoTa6, setprFoTa6] = useState("");
  const [prFoTa7, setprFoTa7] = useState("");
  const [prFoTa8, setprFoTa8] = useState("");

  // Net Profit after Tax / Loss

  const [NePrafTa1, setNePrafTa1] = useState("");

  const NePrafTa1Sum = () => {
    try {
      const NePrafTa1SumEv = eval(
        `  
       ( ${prBeTa1 || 0} - ${prFoTa1 || 0} )`
      );
      setNePrafTa1(NePrafTa1SumEv);
    } catch (error) {
      setopProLo1("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa1Sum();
  }, [prBeTa1, prFoTa1]);

  const [NePrafTa2, setNePrafTa2] = useState("");

  const NePrafTa2Sum = () => {
    try {
      const NePrafTa2SumEv = eval(
        `  
       ( ${prBeTa2 || 0} - ${prFoTa2 || 0} )`
      );
      setNePrafTa2(NePrafTa2SumEv);
    } catch (error) {
      setopProLo2("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa2Sum();
  }, [prBeTa2, prFoTa2]);

  const [NePrafTa3, setNePrafTa3] = useState("");

  const NePrafTa3Sum = () => {
    try {
      const NePrafTa3SumEv = eval(
        `  
       ( ${prBeTa3 || 0} - ${prFoTa3 || 0} )`
      );
      setNePrafTa3(NePrafTa3SumEv);
    } catch (error) {
      setopProLo3("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa3Sum();
  }, [prBeTa3, prFoTa3]);

  const [NePrafTa4, setNePrafTa4] = useState("");

  const NePrafTa4Sum = () => {
    try {
      const NePrafTa4SumEv = eval(
        `  
       ( ${prBeTa4 || 0} - ${prFoTa4 || 0} )`
      );
      setNePrafTa4(NePrafTa4SumEv);
    } catch (error) {
      setopProLo4("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa4Sum();
  }, [prBeTa4, prFoTa4]);

  const [NePrafTa5, setNePrafTa5] = useState("");

  const NePrafTa5Sum = () => {
    try {
      const NePrafTa5SumEv = eval(
        `  
       ( ${prBeTa5 || 0} - ${prFoTa5 || 0} )`
      );
      setNePrafTa5(NePrafTa5SumEv);
    } catch (error) {
      setopProLo5("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa5Sum();
  }, [prBeTa5, prFoTa5]);

  const [NePrafTa6, setNePrafTa6] = useState("");

  const NePrafTa6Sum = () => {
    try {
      const NePrafTa6SumEv = eval(
        `  
       ( ${prBeTa6 || 0} - ${prFoTa6 || 0} )`
      );
      setNePrafTa6(NePrafTa6SumEv);
    } catch (error) {
      setopProLo6("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa6Sum();
  }, [prBeTa6, prFoTa6]);

  const [NePrafTa7, setNePrafTa7] = useState("");

  const NePrafTa7Sum = () => {
    try {
      const NePrafTa7SumEv = eval(
        `  
       ( ${prBeTa7 || 0} - ${prFoTa7 || 0} )`
      );
      setNePrafTa7(NePrafTa7SumEv);
    } catch (error) {
      setopProLo7("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa7Sum();
  }, [prBeTa7, prFoTa7]);

  const [NePrafTa8, setNePrafTa8] = useState("");

  const NePrafTa8Sum = () => {
    try {
      const NePrafTa8SumEv = eval(
        `  
       ( ${prBeTa8 || 0} - ${prFoTa8 || 0} )`
      );
      setNePrafTa8(NePrafTa8SumEv);
    } catch (error) {
      setopProLo8("Input all ");
    }
  };

  useEffect(() => {
    NePrafTa8Sum();
  }, [prBeTa8, prFoTa8]);

  // -------------------------------

  //  p b d i t

  const [pBdiT1, setpBdiT1] = useState("");

  const pBdiT1Sum = () => {
    try {
      const pBdiT1SumEv = eval(
        `  
       ( ${prBeTa1 || 0} + ${dePre1 || 0} + ${IntFinch || 0} )`
      );
      setpBdiT1(pBdiT1SumEv);
    } catch (error) {
      setpBdiT1("Input all ");
    }
  };

  useEffect(() => {
    pBdiT1Sum();
  }, [prBeTa1, dePre1, IntFinch]);

  const [pBdiT2, setpBdiT2] = useState("");

  const pBdiT2Sum = () => {
    try {
      const pBdiT2SumEv = eval(
        `  
     ( ${prBeTa2 || 0} + ${dePre2 || 0} + ${IntFinch2 || 0} )`
      );
      setpBdiT2(pBdiT2SumEv);
    } catch (error) {
      setpBdiT2("Input all ");
    }
  };

  useEffect(() => {
    pBdiT2Sum();
  }, [prBeTa2, dePre2, IntFinch2]);

  const [pBdiT3, setpBdiT3] = useState("");

  const pBdiT3Sum = () => {
    try {
      const pBdiT3SumEv = eval(
        `  
     ( ${prBeTa3 || 0} + ${dePre3 || 0} + ${IntFinch3 || 0} )`
      );
      setpBdiT3(pBdiT3SumEv);
    } catch (error) {
      setpBdiT3("Input all ");
    }
  };

  useEffect(() => {
    pBdiT3Sum();
  }, [prBeTa3, dePre3, IntFinch3]);

  const [pBdiT4, setpBdiT4] = useState("");

  const pBdiT4Sum = () => {
    try {
      const pBdiT4SumEv = eval(
        `  
     ( ${prBeTa4 || 0} + ${dePre4 || 0} + ${IntFinch4 || 0} )`
      );
      setpBdiT4(pBdiT4SumEv);
    } catch (error) {
      setpBdiT4("Input all ");
    }
  };

  useEffect(() => {
    pBdiT4Sum();
  }, [prBeTa4, dePre4, IntFinch4]);

  const [pBdiT5, setpBdiT5] = useState("");

  const pBdiT5Sum = () => {
    try {
      const pBdiT5SumEv = eval(
        `  
     ( ${prBeTa5 || 0} + ${dePre5 || 0} + ${IntFinch5 || 0} )`
      );
      setpBdiT5(pBdiT5SumEv);
    } catch (error) {
      setpBdiT5("Input all ");
    }
  };

  useEffect(() => {
    pBdiT5Sum();
  }, [prBeTa5, dePre5, IntFinch5]);

  const [pBdiT6, setpBdiT6] = useState("");

  const pBdiT6Sum = () => {
    try {
      const pBdiT6SumEv = eval(
        `  
     ( ${prBeTa6 || 0} + ${dePre6 || 0} + ${IntFinch6 || 0} )`
      );
      setpBdiT6(pBdiT6SumEv);
    } catch (error) {
      setpBdiT6("Input all ");
    }
  };

  useEffect(() => {
    pBdiT6Sum();
  }, [prBeTa6, dePre6, IntFinch6]);

  const [pBdiT7, setpBdiT7] = useState("");

  const pBdiT7Sum = () => {
    try {
      const pBdiT7SumEv = eval(
        `  
     ( ${prBeTa7 || 0} + ${dePre7 || 0} + ${IntFinch7 || 0} )`
      );
      setpBdiT7(pBdiT7SumEv);
    } catch (error) {
      setpBdiT7("Input all ");
    }
  };

  useEffect(() => {
    pBdiT7Sum();
  }, [prBeTa7, dePre7, IntFinch7]);

  const [pBdiT8, setpBdiT8] = useState("");

  const pBdiT8Sum = () => {
    try {
      const pBdiT8SumEv = eval(
        `  
     ( ${prBeTa8 || 0} + ${dePre8 || 0} + ${IntFinch8 || 0} )`
      );
      setpBdiT8(pBdiT8SumEv);
    } catch (error) {
      setpBdiT8("Input all ");
    }
  };

  useEffect(() => {
    pBdiT8Sum();
  }, [prBeTa8, dePre8, IntFinch8]);

  // --------------------------------

  // Cash Accruals

  const [CasAcc1, setCasAcc1] = useState("");

  const CasAcc1Sum = () => {
    try {
      const CasAcc1SumEv = eval(
        `  
       ( ${NePrafTa1 || 0} + ${dePre1 || 0}  )`
      );
      setCasAcc1(CasAcc1SumEv);
    } catch (error) {
      setCasAcc1("Input all ");
    }
  };

  useEffect(() => {
    CasAcc1Sum();
  }, [NePrafTa1, dePre1]);

  const [CasAcc2, setCasAcc2] = useState("");

  const CasAcc2Sum = () => {
    try {
      const CasAcc2SumEv = eval(
        `  
       ( ${NePrafTa2 || 0} + ${dePre2 || 0}  )`
      );
      setCasAcc2(CasAcc2SumEv);
    } catch (error) {
      setCasAcc2("Input all ");
    }
  };

  useEffect(() => {
    CasAcc2Sum();
  }, [NePrafTa2, dePre2]);

  const [CasAcc3, setCasAcc3] = useState("");

  const CasAcc3Sum = () => {
    try {
      const CasAcc3SumEv = eval(
        `  
       ( ${NePrafTa3 || 0} + ${dePre3 || 0}  )`
      );
      setCasAcc3(CasAcc3SumEv);
    } catch (error) {
      setCasAcc3("Input all ");
    }
  };

  useEffect(() => {
    CasAcc3Sum();
  }, [NePrafTa3, dePre3]);

  const [CasAcc4, setCasAcc4] = useState("");

  const CasAcc4Sum = () => {
    try {
      const CasAcc4SumEv = eval(
        `  
       ( ${NePrafTa4 || 0} + ${dePre4 || 0}  )`
      );
      setCasAcc4(CasAcc4SumEv);
    } catch (error) {
      setCasAcc4("Input all ");
    }
  };

  useEffect(() => {
    CasAcc4Sum();
  }, [NePrafTa4, dePre4]);

  const [CasAcc5, setCasAcc5] = useState("");

  const CasAcc5Sum = () => {
    try {
      const CasAcc5SumEv = eval(
        `  
       ( ${NePrafTa5 || 0} + ${dePre5 || 0}  )`
      );
      setCasAcc5(CasAcc5SumEv);
    } catch (error) {
      setCasAcc5("Input all ");
    }
  };

  useEffect(() => {
    CasAcc5Sum();
  }, [NePrafTa5, dePre5]);

  const [CasAcc6, setCasAcc6] = useState("");

  const CasAcc6Sum = () => {
    try {
      const CasAcc6SumEv = eval(
        `  
       ( ${NePrafTa6 || 0} + ${dePre6 || 0}  )`
      );
      setCasAcc6(CasAcc6SumEv);
    } catch (error) {
      setCasAcc6("Input all ");
    }
  };

  useEffect(() => {
    CasAcc6Sum();
  }, [NePrafTa6, dePre6]);

  const [CasAcc7, setCasAcc7] = useState("");

  const CasAcc7Sum = () => {
    try {
      const CasAcc7SumEv = eval(
        `  
       ( ${NePrafTa7 || 0} + ${dePre7 || 0}  )`
      );
      setCasAcc7(CasAcc7SumEv);
    } catch (error) {
      setCasAcc7("Input all ");
    }
  };

  useEffect(() => {
    CasAcc7Sum();
  }, [NePrafTa7, dePre7]);

  const [CasAcc8, setCasAcc8] = useState("");

  const CasAcc8Sum = () => {
    try {
      const CasAcc8SumEv = eval(
        `  
       ( ${NePrafTa8 || 0} + ${dePre8 || 0}  )`
      );
      setCasAcc8(CasAcc8SumEv);
    } catch (error) {
      setCasAcc8("Input all ");
    }
  };

  useEffect(() => {
    CasAcc8Sum();
  }, [NePrafTa8, dePre8]);

  // ---------------------------

  const [divDra1, setdivDra1] = useState("");
  const [divDra2, setdivDra2] = useState("");
  const [divDra3, setdivDra3] = useState("");
  const [divDra4, setdivDra4] = useState("");
  const [divDra5, setdivDra5] = useState("");
  const [divDra6, setdivDra6] = useState("");
  const [divDra7, setdivDra7] = useState("");
  const [divDra8, setdivDra8] = useState("");

  // Retained Profit

  const [RetPro1, setRetPro1] = useState("");

  const RetPro1Sum = () => {
    try {
      const RetPro1SumEv = eval(
        `  
       ( ${NePrafTa1 || 0} - ${divDra1 || 0}  )`
      );
      setRetPro1(RetPro1SumEv);
    } catch (error) {
      setRetPro1("Input all ");
    }
  };

  useEffect(() => {
    RetPro1Sum();
  }, [NePrafTa1, divDra1]);

  const [RetPro2, setRetPro2] = useState("");

  const RetPro2Sum = () => {
    try {
      const RetPro2SumEv = eval(
        `  
       ( ${NePrafTa2 || 0} - ${divDra2 || 0}  )`
      );
      setRetPro2(RetPro2SumEv);
    } catch (error) {
      setRetPro2("Input all ");
    }
  };

  useEffect(() => {
    RetPro2Sum();
  }, [NePrafTa2, divDra2]);

  const [RetPro3, setRetPro3] = useState("");

  const RetPro3Sum = () => {
    try {
      const RetPro3SumEv = eval(
        `  
       ( ${NePrafTa3 || 0} - ${divDra3 || 0}  )`
      );
      setRetPro3(RetPro3SumEv);
    } catch (error) {
      setRetPro3("Input all ");
    }
  };

  useEffect(() => {
    RetPro3Sum();
  }, [NePrafTa3, divDra3]);

  const [RetPro4, setRetPro4] = useState("");

  const RetPro4Sum = () => {
    try {
      const RetPro4SumEv = eval(
        `  
       ( ${NePrafTa4 || 0} - ${divDra4 || 0}  )`
      );
      setRetPro4(RetPro4SumEv);
    } catch (error) {
      setRetPro4("Input all ");
    }
  };

  useEffect(() => {
    RetPro4Sum();
  }, [NePrafTa4, divDra4]);

  const [RetPro5, setRetPro5] = useState("");

  const RetPro5Sum = () => {
    try {
      const RetPro5SumEv = eval(
        `  
       ( ${NePrafTa5 || 0} - ${divDra5 || 0}  )`
      );
      setRetPro5(RetPro5SumEv);
    } catch (error) {
      setRetPro5("Input all ");
    }
  };

  useEffect(() => {
    RetPro5Sum();
  }, [NePrafTa5, divDra5]);

  const [RetPro6, setRetPro6] = useState("");

  const RetPro6Sum = () => {
    try {
      const RetPro6SumEv = eval(
        `  
       ( ${NePrafTa6 || 0} - ${divDra6 || 0}  )`
      );
      setRetPro6(RetPro6SumEv);
    } catch (error) {
      setRetPro6("Input all ");
    }
  };

  useEffect(() => {
    RetPro6Sum();
  }, [NePrafTa6, divDra6]);

  const [RetPro7, setRetPro7] = useState("");

  const RetPro7Sum = () => {
    try {
      const RetPro7SumEv = eval(
        `  
       ( ${NePrafTa7 || 0} - ${divDra7 || 0}  )`
      );
      setRetPro7(RetPro7SumEv);
    } catch (error) {
      setRetPro7("Input all ");
    }
  };

  useEffect(() => {
    RetPro7Sum();
  }, [NePrafTa7, divDra7]);

  const [RetPro8, setRetPro8] = useState("");

  const RetPro8Sum = () => {
    try {
      const RetPro8SumEv = eval(
        `  
       ( ${NePrafTa8 || 0} - ${divDra8 || 0}  )`
      );
      setRetPro8(RetPro8SumEv);
    } catch (error) {
      setRetPro8("Input all ");
    }
  };

  useEffect(() => {
    RetPro8Sum();
  }, [NePrafTa8, divDra8]);

// -----------------------------------local
  
  const saveraMat1 = () => {
    localStorage.setItem("raMat1", raMat1);
};

useEffect(() =>{
  saveraMat1();
},
[raMat1])


const saveraMat12 = () => {
  localStorage.setItem("raMat12", raMat12);
};

useEffect(() =>{
saveraMat12();
},
[raMat12])


const saveraMat13 = () => {
  localStorage.setItem("raMat13", raMat13);
};

useEffect(() =>{
saveraMat13();
},
[raMat13])


const saveraMat14 = () => {
  localStorage.setItem("raMat14", raMat14);
};

useEffect(() =>{
saveraMat14();
},
[raMat14])

const saveraMat15 = () => {
  localStorage.setItem("raMat15", raMat15);
};

useEffect(() =>{
saveraMat15();
},
[raMat15])

const saveraMat16 = () => {
  localStorage.setItem("raMat16", raMat16);
};

useEffect(() =>{
saveraMat16();
},
[raMat16])

const saveraMat17 = () => {
  localStorage.setItem("raMat17", raMat17);
};

useEffect(() =>{
saveraMat17();
},
[raMat17])

const saveraMat18 = () => {
  localStorage.setItem("raMat18", raMat18);
};

useEffect(() =>{
saveraMat18();
},
[raMat18])


const saveraMat19 = () => {
  localStorage.setItem("raMat19", raMat19);
};

useEffect(() =>{
saveraMat19();
},
[raMat19])



const savewrkPo1 = () => {
  localStorage.setItem("wrkPo12", wrkPo12);
};

useEffect(() =>{
  savewrkPo1();
},
[wrkPo12])

const savewrkPo2 = () => {
  localStorage.setItem("wrkPo13", wrkPo13);
};

useEffect(() =>{
  savewrkPo2();
},
[wrkPo13])

const savewrkPo3 = () => {
  localStorage.setItem("wrkPo14", wrkPo14);
};

useEffect(() =>{
  savewrkPo3();
},
[wrkPo14])

const savewrkPo4 = () => {
  localStorage.setItem("wrkPo15", wrkPo15);
};

useEffect(() =>{
  savewrkPo4();
},
[wrkPo15])

const savewrkPo5 = () => {
  localStorage.setItem("wrkPo16", wrkPo16);
};

useEffect(() =>{
  savewrkPo5();
},
[wrkPo16])

const savewrkPo6 = () => {
  localStorage.setItem("wrkPo17", wrkPo17);
};

useEffect(() =>{
  savewrkPo6();
},
[wrkPo17])

const savewrkPo7 = () => {
  localStorage.setItem("wrkPo18", wrkPo18);
};

useEffect(() =>{
  savewrkPo7();
},
[wrkPo18])



const savewrkPo8 = () => {
  localStorage.setItem("wrkPo19", wrkPo19);
};

useEffect(() =>{
  savewrkPo8();
},
[wrkPo19])


const saveFiGood12 = () => {
  localStorage.setItem("FiGood12", FiGood12);
};

useEffect(() =>{
  saveFiGood12();
},
[FiGood12])


const saveFiGood13 = () => {
  localStorage.setItem("FiGood13", FiGood13);
};

useEffect(() =>{
  saveFiGood13();
},
[FiGood13])


const saveFiGood14 = () => {
  localStorage.setItem("FiGood14", FiGood14);
};

useEffect(() =>{
  saveFiGood14();
},
[FiGood14])



const saveFiGood15 = () => {
  localStorage.setItem("FiGood15", FiGood15);
};

useEffect(() =>{
  saveFiGood15();
},
[FiGood15])


const saveFiGood16 = () => {
  localStorage.setItem("FiGood16", FiGood16);
};

useEffect(() =>{
  saveFiGood16();
},
[FiGood16])


const saveFiGood17 = () => {
  localStorage.setItem("FiGood17", FiGood17);
};

useEffect(() =>{
  saveFiGood17();
},
[FiGood17])


const saveFiGood18 = () => {
  localStorage.setItem("FiGood18", FiGood18);
};

useEffect(() =>{
  saveFiGood18();
},
[FiGood18])



const saveFiGood19 = () => {
  localStorage.setItem("FiGood19", FiGood19);
};

useEffect(() =>{
  saveFiGood19();
},
[FiGood19])


useEffect(() => {
  localStorage.setItem("pwFu1", pwFu1);
}, [pwFu1]);



















  //======================================

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

      <div className="mt-4 ">
        <Container>
          <Row>
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl"
            >
              Operating Statement Particulars
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
              NET SALES
            </Col>
            <Col lg="8" className=" border-r border-solid border-y  "></Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2"
              lg="4"
            >
              Sales/ Receipts- Domestic
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe}
                onChange={(e) => setSalesRe(e.target.value)}
                id="a1"
              />
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe1}
                onChange={(e) => setSalesRe1(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe2}
                onChange={(e) => setSalesRe2(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe3}
                onChange={(e) => setSalesRe3(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe4}
                onChange={(e) => setSalesRe4(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe5}
                onChange={(e) => setSalesRe5(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe6}
                onChange={(e) => setSalesRe6(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesRe7}
                onChange={(e) => setSalesRe7(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2"
              lg="4"
            >
              Sales Exports
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx}
                onChange={(e) => setSalesEx(e.target.value)}
                id="a2"
              />
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              <input
                className="w-20 flex "
                placeholder="Rs."
                type="number"
                value={salesEx1}
                onChange={(e) => setSalesEx1(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx2}
                onChange={(e) => setSalesEx2(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx3}
                onChange={(e) => setSalesEx3(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx4}
                onChange={(e) => setSalesEx4(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx5}
                onChange={(e) => setSalesEx5(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx6}
                onChange={(e) => setSalesEx6(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={salesEx7}
                onChange={(e) => setSalesEx7(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2"
              lg="4"
            >
              Others
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs}
                onChange={(e) => setOthErs(e.target.value)}
                id="a3"
              />
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              <input
                className="w-20 flex "
                placeholder="Rs."
                type="number"
                value={othErs1}
                onChange={(e) => setOthErs1(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs2}
                onChange={(e) => setOthErs2(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs3}
                onChange={(e) => setOthErs3(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs5}
                onChange={(e) => setOthErs5(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs6}
                onChange={(e) => setOthErs6(e.target.value)}
              />
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs7}
                onChange={(e) => setOthErs7(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Total Sales
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {display}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {display1}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {display2}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {display3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {display4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {display5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {display6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {display7}
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl "
            >
              COST OF SALES
            </Col>

            <Col className="border " lg="8"></Col>
          </Row>
          <Row>
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid  "
            >
              Add Opening Stock
            </Col>
            <Col className="border" lg="8"></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Finished Goods
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={finGo1}
                onChange={(e) => setfinGo1(e.target.value)}
                
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood12}
                // onChange={(e) => setfinGo2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood13}
                // onChange={(e) => setFiGood13(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood14}
                // onChange={(e) => setFiGood14(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood15}
                // onChange={(e) => setFiGood15(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood16}
                // onChange={(e) => setFiGood16(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood17}
                // onChange={(e) => setFiGood17(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood18}
                // onChange={(e) => setFiGood18(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Work in Process 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo1}
                onChange={(e) => setwrkPo1(e.target.value)}
               
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo12}
                // onChange={(e) => setwrkPo12(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo13}
                // onChange={(e) => setwrkPo13(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo14}
                // onChange={(e) => setwrkPo14(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo15}
                // onChange={(e) => setwrkPo15(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo16}
                // onChange={(e) => setwrkPo16(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo17}
                // onChange={(e) => setwrkPo17(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo18}
                // onChange={(e) => setwrkPo18(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Raw Material 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat1}
                onChange={(e) => setraMat1(e.target.value)}
                onInput={saveraMat1}
               
                
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat12}
                // onChange={(e) => setraMat12(e.target.value)}
                // onInput={saveraMat13}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat13}
                // onChange={(e) => setraMat13(e.target.value)}
                // onInput={saveraMat14}
                
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat14}
                // onChange={(e) => setraMat14(e.target.value)}
                // onInput={saveraMat15}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat15}
                // onChange={(e) => setraMat15(e.target.value)}
                // onInput={saveraMat16}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat16}
                // onChange={(e) => setraMat16(e.target.value)}
                // onInput={saveraMat17}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat17}
                // onChange={(e) => setraMat17(e.target.value)}
                // onInput={saveraMat18}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat18}
                // onChange={(e) => setraMat18(e.target.value)}
                // onInput={saveraMat19}
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl "
            >
              PURCHASE / RM
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm1}
                onChange={(e) => setPuRm1(e.target.value)}

             



              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm2}
                onChange={(e) => setPuRm2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm3}
                onChange={(e) => setPuRm3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm4}
                onChange={(e) => setPuRm4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm5}
                onChange={(e) => setPuRm5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm6}
                onChange={(e) => setPuRm6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm7}
                onChange={(e) => setPuRm7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={PuRm8}
                onChange={(e) => setPuRm8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Power & Fuel
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu1}
                onChange={(e) => setpwFu1(e.target.value)}

             



              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu2}
                onChange={(e) => setpwFu2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu3}
                onChange={(e) => setpwFu3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu4}
                onChange={(e) => setpwFu4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu5}
                onChange={(e) => setpwFu5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu6}
                onChange={(e) => setpwFu6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu7}
                onChange={(e) => setpwFu7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={pwFu8}
                onChange={(e) => setpwFu8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Direct labour
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa1}
                onChange={(e) => setdrLa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa2}
                onChange={(e) => setdrLa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa3}
                onChange={(e) => setdrLa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa4}
                onChange={(e) => setdrLa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa5}
                onChange={(e) => setdrLa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa6}
                onChange={(e) => setdrLa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa7}
                onChange={(e) => setdrLa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={drLa8}
                onChange={(e) => setdrLa8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Repairs & Maintenence
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa1}
                onChange={(e) => setReMa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa2}
                onChange={(e) => setReMa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa3}
                onChange={(e) => setReMa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa4}
                onChange={(e) => setReMa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa5}
                onChange={(e) => setReMa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa6}
                onChange={(e) => setReMa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa7}
                onChange={(e) => setReMa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={ReMa8}
                onChange={(e) => setReMa8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              MFG / Direct Expenses
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx1}
                onChange={(e) => setmfDiEx1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx2}
                onChange={(e) => setmfDiEx2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx3}
                onChange={(e) => setmfDiEx3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx4}
                onChange={(e) => setmfDiEx4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx5}
                onChange={(e) => setmfDiEx5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx6}
                onChange={(e) => setmfDiEx6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx7}
                onChange={(e) => setmfDiEx7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={mfDiEx8}
                onChange={(e) => setmfDiEx8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Depreciation
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre1}
                onChange={(e) => setdePre1(e.target.value)}
                // onInput={savedePre1}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre2}
                onChange={(e) => setdePre2(e.target.value)}
                // onInput={savedePre2}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre3}
                onChange={(e) => setdePre3(e.target.value)}
                // onInput={savedePre3}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre4}
                onChange={(e) => setdePre4(e.target.value)}
                // onInput={savedePre4}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre5}
                onChange={(e) => setdePre5(e.target.value)}
                // onInput={savedePre5}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre6}
                onChange={(e) => setdePre6(e.target.value)}
                // onInput={savedePre6}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre7}
                onChange={(e) => setdePre7(e.target.value)}
                // onInput={savedePre7}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={dePre8}
                onChange={(e) => setdePre8(e.target.value)}
                // onInput={savedePre8}
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl "
            >
              LESS : Closing Stock
            </Col>

            <Col className="border " lg="8"></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Finished Goods 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood12}
                onChange={(e) => setFiGood12(e.target.value)}
                onInput={saveFiGood12}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood13}
                onChange={(e) => setFiGood13(e.target.value)}
                onInput={saveFiGood13}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood14}
                onChange={(e) => setFiGood14(e.target.value)}
                onInput={saveFiGood14}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood15}
                onChange={(e) => setFiGood15(e.target.value)}
                onInput={saveFiGood15}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood16}
                onChange={(e) => setFiGood16(e.target.value)}
                onInput={saveFiGood16}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood17}
                onChange={(e) => setFiGood17(e.target.value)}
                onInput={saveFiGood17}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood18}
                onChange={(e) => setFiGood18(e.target.value)}
                onInput={saveFiGood18}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={FiGood19}
                onChange={(e) => setFiGood19(e.target.value)}
                onInput={saveFiGood19}

              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Work- in -Process
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo12}
                onChange={(e) => setwrkPo12(e.target.value)}
                onInput={savewrkPo1}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo13}
                onChange={(e) => setwrkPo13(e.target.value)}
                onInput={savewrkPo2}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo14}
                onChange={(e) => setwrkPo14(e.target.value)}
                onInput={savewrkPo3}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo15}
                onChange={(e) => setwrkPo15(e.target.value)}
                onInput={savewrkPo4}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo16}
                onChange={(e) => setwrkPo16(e.target.value)}
                onInput={savewrkPo5}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo17}
                onChange={(e) => setwrkPo17(e.target.value)}
                onInput={savewrkPo6}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo18}
                onChange={(e) => setwrkPo18(e.target.value)}
                onInput={savewrkPo7}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={wrkPo19}
                onChange={(e) => setwrkPo19(e.target.value)}
                onInput={savewrkPo8}

              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Raw Material 
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat12}
                onChange={(e) => setraMat12(e.target.value)}
                onInput={saveraMat12}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat13}
                onChange={(e) => setraMat13(e.target.value)}
                onInput={saveraMat13}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat14}
                onChange={(e) => setraMat14(e.target.value)}
                onInput={saveraMat14}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat15}
                onChange={(e) => setraMat15(e.target.value)}
                onInput={saveraMat15}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat16}
                onChange={(e) => setraMat16(e.target.value)}
                onInput={saveraMat16}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat17}
                onChange={(e) => setraMat17(e.target.value)}
                onInput={saveraMat17}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat18}
                onChange={(e) => setraMat18(e.target.value)}
                onInput={saveraMat18}

              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={raMat19}
                onChange={(e) => setraMat19(e.target.value)}
                onInput={saveraMat19}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              COST OF SALES
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {costsales1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {costsales2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {costsales3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costsales4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costsales5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costsales6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costsales7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costsales8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              COST OF PRODUCTION
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {costprod1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {costprod2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {costprod3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costprod4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costprod5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costprod6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costprod7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {costprod8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              GROSS PROFIT(+)/LOSS(-)
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {grossprof2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {grossprof8}
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Selling & Adm Expenses
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm1}
                onChange={(e) => setselAdm1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm2}
                onChange={(e) => setselAdm2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm3}
                onChange={(e) => setselAdm3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm4}
                onChange={(e) => setselAdm4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm5}
                onChange={(e) => setselAdm5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm6}
                onChange={(e) => setselAdm6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm7}
                onChange={(e) => setselAdm7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={selAdm8}
                onChange={(e) => setselAdm8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Interest & Fin Charges
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch}
                onChange={(e) => setIntFinch(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch2}
                onChange={(e) => setIntFinch2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch3}
                onChange={(e) => setIntFinch3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch4}
                onChange={(e) => setIntFinch4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch5}
                onChange={(e) => setIntFinch5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch6}
                onChange={(e) => setIntFinch6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch7}
                onChange={(e) => setIntFinch7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={IntFinch8}
                onChange={(e) => setIntFinch8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              OPERATING PROFIT / LOSS
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {opProLo2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {opProLo8}
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              lg="4"
              className="flex justify-center items-center border border-solid font-bold text-xl "
            >
              OTHER INCOME / EXPENSES
            </Col>

            <Col className="border " lg="8"></Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Add Other Income
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn1}
                onChange={(e) => setadOthIn1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn2}
                onChange={(e) => setadOthIn2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn3}
                onChange={(e) => setadOthIn3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn4}
                onChange={(e) => setadOthIn4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn5}
                onChange={(e) => setadOthIn5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn6}
                onChange={(e) => setadOthIn6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn7}
                onChange={(e) => setadOthIn7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={adOthIn8}
                onChange={(e) => setadOthIn8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Less Other Expenses
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx1}
                onChange={(e) => setleOtEx1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx2}
                onChange={(e) => setleOtEx2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx3}
                onChange={(e) => setleOtEx3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx4}
                onChange={(e) => setleOtEx4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx5}
                onChange={(e) => setleOtEx5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx6}
                onChange={(e) => setleOtEx6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx7}
                onChange={(e) => setleOtEx7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={leOtEx8}
                onChange={(e) => setleOtEx8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              PROFIT BEFORE TAX
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {prBeTa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {prBeTa8}
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Provision for Taxes
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa1}
                onChange={(e) => setprFoTa1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa2}
                onChange={(e) => setprFoTa2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa3}
                onChange={(e) => setprFoTa3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa4}
                onChange={(e) => setprFoTa4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa5}
                onChange={(e) => setprFoTa5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa6}
                onChange={(e) => setprFoTa6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa7}
                onChange={(e) => setprFoTa7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={prFoTa8}
                onChange={(e) => setprFoTa8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Net Profit after Tax / Loss
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {NePrafTa2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {NePrafTa8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              P B D I T
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {pBdiT2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {pBdiT8}
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Cash Accruals
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {CasAcc2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {CasAcc8}
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Dividend / Drawings
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra1}
                onChange={(e) => setdivDra1(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra2}
                onChange={(e) => setdivDra2(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra3}
                onChange={(e) => setdivDra3(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra4}
                onChange={(e) => setdivDra4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra5}
                onChange={(e) => setdivDra5(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra6}
                onChange={(e) => setdivDra6(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra7}
                onChange={(e) => setdivDra7(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={divDra8}
                onChange={(e) => setdivDra8(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col
              className="flex justify-center  items-center border-l border-solid border-y   text-l px-28 py-2 font-bold"
              lg="4"
            >
              Retained Profit
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro1}
            </Col>
            <Col className="border border-solid flex items-center justify-center">
              {RetPro2}
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro3}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro4}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro5}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro6}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro7}
            </Col>
            <Col className=" border border-solid  flex items-center justify-center">
              {RetPro8}
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="flex justify-center items-center border  ">
              Net Cash accrual
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>

            <Col className=" border border-solid  flex items-center justify-center">
              <input
                className="w-20"
                placeholder="Rs."
                type="number"
                value={othErs4}
                onChange={(e) => setOthErs4(e.target.value)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Opstmt;
