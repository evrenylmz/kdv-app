import './App.css';
import Logo from './components/logo'
import Button from './components/button'
import SelectIcon from './components/selectIcon'
import { useEffect, useState } from 'react';
import KdvButton from './components/kdvButton';

function App() {

  const [kdv, setKdv] = useState("dahil")
  const [kdvOran, setKdvOran] = useState(18)
  const [value, setValue] = useState()
  const [toplam, setToplam] = useState(0)
  const [genelToplam, setGenelToplam] = useState(0)
  const [kdvToplam, setKdvToplam] = useState(0)



  useEffect(() => {

    sonuc()
  })

  const sonuc = () => {
    if (kdv === "dahil") {
      setGenelToplam(value)
      const t = Number(genelToplam) / (1 + Number(kdvOran) / 100)
      const k = Number(genelToplam) - Number(toplam)
      setKdvToplam(k.toFixed(2))
      setToplam(t.toFixed(2))


    }
    if (kdv === "hariç") {
      Number(setToplam(value))
      const t = Number(toplam) * (1 + Number(kdvOran) / 100)
      const k = Number(genelToplam) - Number(toplam)
      setKdvToplam(k.toFixed(2))
      setGenelToplam(t.toFixed(2))

    }
  }


  return (
    <div className="App min-h-screen flex flex-col gap-6 justify-center md:w-[400px] w-full md:text-base text-xl px-4">

      <Logo />

      <div className='flex justify-between gap-2'>
        <Button title="Kdv Dahil" onPress={() => setKdv("dahil")} style={kdv === "dahil" ? ({ backgroundColor: "black", color: "white" }) : null}>{kdv === "dahil" ? (<SelectIcon />) : null}</Button>
        <Button title="Kdv Hariç" onPress={() => setKdv("hariç")} style={kdv === "hariç" ? ({ backgroundColor: "black", color: "white" }) : null}>{kdv === "hariç" ? (<SelectIcon />) : null}</Button>


      </div>

      <div className='flex justify-start gap-2'>
        <KdvButton title="% 1" onPress={() => setKdvOran(1)} style={kdvOran === 1 ? ({ backgroundColor: "black", color: "white" }) : null}></KdvButton>
        <KdvButton title="% 8" onPress={() => setKdvOran(8)} style={kdvOran === 8 ? ({ backgroundColor: "black", color: "white" }) : null}></KdvButton>
        <KdvButton title="% 18" onPress={() => setKdvOran(18)} style={kdvOran === 18 ? ({ backgroundColor: "black", color: "white" }) : null}></KdvButton>
      </div>


      <div className='flex'>

        <input onChange={(e) => setValue(e.target.value)} value={value} type="number" className="bg-transparent border-2 border-stone-700 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3" placeholder="Tutar giriniz" />
      </div>







      <div className='flex flex-row justify-between items-center w-full h-1/4'>


        {Number(value) > 0 ? (
          <>
          <div className='flex flex-col w-1/2'>
          <span>Toplam</span>
          <span>Kdv % <span className='text-red-700 font-bold'>{kdvOran   ? kdvOran : ' '}</span></span>
          <span>Genel Toplam</span>
        </div>
        <div className='flex flex-col w-1/2 text-right font-semibold'>
            <span>{Number(toplam) > 0 ? toplam : ' '}</span>
          <span>{Number(kdvToplam) > 0 ? kdvToplam : ' '}</span>
          <span>{Number(genelToplam) > 0 ? genelToplam : ' '}</span>
        </div>
        </>
        ): ''}






      </div>


<div className='absolute bottom-0 md:text-sm text-sm py-2'>
  <div className='flex justify-center items-center gap-1'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

evrenyilmaz28@gmail.com
  </div>

</div>



    </div>
  );
}

export default App;
