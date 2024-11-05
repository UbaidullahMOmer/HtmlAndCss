import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [lenght, setLenght] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) {
      str += "0123456789";
    }
    if (charactersAllowed) {
      str += "!@#$%^&*-_+=[]{}`~?";
    }

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [lenght,numbersAllowed,charactersAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [lenght,numbersAllowed,charactersAllowed,passwordGenrator,])

  return (
    <>
    <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500 font-semibold">
      <h1 className='text-2xl text-center text-white mb-4 font-semibold'>Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} ref={passwordRef}  className='outline-none w-full py-[10px] px-4 rounded-l-lg' placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0 hover:bg-blue-600 transition-all active:bg-blue-800' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-2">
          <input type="range" min={6} max={100} value={lenght} className='cursor-pointer' onChange={(e) => {setLenght(e.target.value)}}/>
          <label className='text-[17px] font-medi mb-1'>Length: {lenght}</label>
        </div>
        <div className="flex items-center gap-x-2 mb-1">
        <input type="checkbox" defaultChecked={numbersAllowed} id='numberInput' className='cursor-pointer' onChange={() => {setNumbersAllowed((prev) => !prev)}}/>
        <label className='text-[17px] font-medium' htmlFor='numberInput'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-2 mb-1">
        <input type="checkbox" defaultChecked={charactersAllowed} id='characterInput' className='cursor-pointer' onChange={() => {setCharactersAllowed((prev) => !prev)}}/>
        <label className='text-[17px] font-medium' htmlFor='charactorInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
