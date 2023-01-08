import './App.css';
import Logo from './components/logo'
import Button from './components/button'
import SelectIcon from './components/selectIcon'
import { useEffect, useState } from 'react';

function App() {

  const [kdv, setKdv] = useState("dahil")
  const [kdvOran, setKdvOran] = useState(18)
  const [value, setValue] = useState()
  const [toplam, setToplam] = useState(0)
  const [genelToplam, setGenelToplam] = useState(0)
  const [kdvToplam, setKdvToplam] = useState(0)

  

useEffect(()=>{
  
  sonuc()
})

  const sonuc = () => {
    if (kdv==="dahil"){
      setGenelToplam(value)
      const t = Number(genelToplam)/(1+Number(kdvOran)/100)
      const k = Number(genelToplam)-Number(toplam)
      setKdvToplam(k.toFixed(2))
      setToplam(t.toFixed(2))
      
      
    }
    if(kdv==="hariç"){
      Number(setToplam(value))
      const t = Number(toplam)*(1+Number(kdvOran)/100)
      const k = Number(genelToplam)-Number(toplam)
      setKdvToplam(k.toFixed(2))
      setGenelToplam(t.toFixed(2))
      
    }
  }
  

  return (
    <div className="App min-h-screen">
      <Logo/>
      <div className='flex gap-5 p-4 justify-center select-none'>
        
        
          <Button title="Kdv Dahil" onPress={()=>setKdv("dahil")} style={kdv === "dahil" ? ({backgroundColor:"black", color:"white"}): null}>
            {kdv === "dahil" ? (<SelectIcon/>) : null}
            
          </Button>
          <Button title="Kdv Hariç" onPress={()=>setKdv("hariç")} style={kdv === "hariç" ? ({backgroundColor:"black", color:"white"}): null}>
          {kdv === "hariç" ? (<SelectIcon/>) : null}
          </Button>
        
          
          
          
      </div>

      <div className='flex p-4 justify-center select-none'>
        <div className='flex flex-row w-[400px] space-x-5'>
      <Button title="% 1" onPress={()=>setKdvOran(1)} style={kdvOran === 1 ? ({backgroundColor:"black", color:"white"}): null}/>
      <Button title="% 8" onPress={()=>setKdvOran(8)}style={kdvOran === 8 ? ({backgroundColor:"black", color:"white"}): null}/>
      <Button title="% 18" onPress={()=>setKdvOran(18)}style={kdvOran === 18 ? ({backgroundColor:"black", color:"white"}): null}/>
        </div>
      
      </div>
      <div className='flex justify-center py-[16px]'>
      <input onChange={(e)=> setValue(e.target.value)} value={value} type="number" class="noscroll" className="w-[400px] border-b-[2px] border-gray-700 w-full border-0" placeholder="Tutar giriniz..."></input>


      </div>

{
  Number(value) > 0 ? (
    <div className='flex w-full flex-col items-center py-[16px] font-bold text-stone-700'>
    <div className='flex w-[400px] flex-row justify-between'><span>Toplam</span><span>{Number(toplam) > 0 ? toplam : ' '}</span></div>
    <div className='flex w-[400px] flex-row justify-between'><span>Kdv % <span className='text-appRed'>{kdvOran   ? kdvOran : ' '}</span></span><span>{Number(kdvToplam) > 0 ? kdvToplam : ' '}</span></div>
    <div className='flex w-[400px] flex-row justify-between'><span>Genel Toplam</span><span>{Number(genelToplam) > 0 ? genelToplam : ' '}</span></div>

   </div>
  ) : ''
}
     
      
      
    </div>
  );
}

export default App;
