import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= ()=>{
    setConvertedAmount(amount * currencyInfo[to]) //amount * value stored in inr
  }
  



return (
    
    
    <div
        className="w-full h-screen grid xl:grid-flow-col gap-10 justify-center  items-center bg-cover bg-no-repeat  "
        style={{
            backgroundImage: `url(' https://images.pexels.com/photos/18804128/pexels-photo-18804128/free-photo-of-people-exchanging-money.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, }}>


        


        <div className="w-full mt-5">
            <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className="text-2xl text-center mb-4 py-2 px-2 text-white bg-blue-600 rounded-lg ">Currency Convertor</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                           
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mb-4">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        
        <div className="w-full ">
            <div className="w-full mx-auto max-w-md  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50 ">
                <div className="flex item-center justify-center">
                <img
                    src='https://images.pexels.com/photos/19904328/pexels-photo-19904328.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt="Moazzam"
                className="w-1/2 rounded-full h-64 object-cover"
                />
                </div>
            
                <div className="p-4">
                
                    <h1 className="text-xl font-semibold">Hello everyone, I am Moazzam Majid</h1>
                    <p className="my-3 text-m text-black">
                    In my early React project, I developed this currency converter app. I implemented custom hooks and reusable components to enhance code modularity and maintainability, fostering a clean and organized codebase. 
                    </p>
                    <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md bg-blue-600 text-white px-2 py-0.5 m-1"
                    >
                    <a href="https://www.linkedin.com/in/moazzammajid/" target='_blank'> MY LINKEDIN</a>
                    </button>
                </div>
            </div>
        </div>
    </div>

    
    
);
      
}

export default App
