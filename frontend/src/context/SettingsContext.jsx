import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const SettingsContext = createContext();



export function SettingsProvider({children}){


const [settings,setSettings] = useState(null);

const [loading,setLoading] = useState(true);





const fetchSettings = async()=>{


try{


const res = await fetch(

"http://localhost:5000/api/settings"

);



const data = await res.json();



setSettings(data);



}

catch(err){


console.log(
"Settings Error",
err
);


}


finally{


setLoading(false);


}


};







useEffect(()=>{


fetchSettings();


},[]);









return(


<SettingsContext.Provider

value={{

settings,

loading

}}

>


{children}


</SettingsContext.Provider>


);


}







export function useSettings(){


return useContext(SettingsContext);


}