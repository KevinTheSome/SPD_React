import { useState,useEffect } from 'react'
import Quote from './Quote'

function QuoteList() {
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        try {
          fetch("https://dummyjson.com/quotes")
          .then(response => response.json())
          .then(data => setData(data.quotes))
        } catch (error) {
          console.error(error)
        }
        setIsLoading(false)
      },[])

    console.log(data);

    const quoteJSX = data.map((quote) => {
        return <Quote key={quote.id} quote={quote}/>
    })

  return (
    <>
        {isLoading ? <p>Loading</p> : 
        <>
            <h1>Quotes</h1>
            {quoteJSX}
        </>
        }

    </>
  )
}

export default QuoteList
