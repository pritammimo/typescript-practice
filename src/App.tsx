import React,{FC,createContext} from 'react'
import { Person } from './components/Person'
import Person2, { HairColor } from './components/Person2'
interface AppContextInterfcae{
  name:string;
  age:number;
  country:string;
}
const AppContext=createContext<AppContextInterfcae | null>(null)
const App:FC = () => {
  const contextValue:AppContextInterfcae={
    name:"pritam",
    age:25,
    country:"India"
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div>App</div>
    <Person name="Pritam" age={25}  email="abc"/>
    <Person2 name="Pritam2" age={25}  email="abc" hairColor={HairColor.Blone}/>
    </AppContext.Provider>
  )
}

export default App
