import React,{ChangeEvent, FC,useState} from 'react'
 export enum HairColor {
    Blone="Your Haid Is Blonde",
    Brown="Great",
    Pink="Wow"
}

interface Props {
    name:string;
    age:number;
    email:string;
   //  getName:(name:string)=>string;
   hairColor:HairColor
   }
const Person2:FC<Props> = ({name,age,email,hairColor}) => {
    const [country, setcountry] = useState<string>("");
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
     setcountry(e.target.value)
    }
    return (
        <>
       <h1>{name}</h1>
       <h1>{age}</h1>
       <h1>{email}</h1>
       <input placeholder='Write your country' 
       value={country} 
    //    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setcountry(e.target.value)}}
    onChange={handleChange}
       />
       {country}
       <br></br>
       {hairColor}
       </>
    )
}

export default Person2