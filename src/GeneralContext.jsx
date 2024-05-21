import { createContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({children}) =>{
    const [target, setTarget]=useState([]);
    const [dataPlanets , setDataPlanets] = useState([]);
    const values = {
        target,
        setTarget,
        dataPlanets,
        setDataPlanets
    }
    return <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
}

export default GeneralContext;