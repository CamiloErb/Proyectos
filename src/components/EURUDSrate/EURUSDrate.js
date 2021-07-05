import { useEffect, useState } from "react";
import styled from "styled-components"

const EURUSDrate = () => {
  const [updating, setUpdating] = useState(false)
  const [eurusd, setEurusd] = useState(0);
  const [utc, setUtc] = useState("")

  const getEURUSD = async () => {
      const res =  await fetch("https://v6.exchangerate-api.com/v6/e309146a2616c35941e159ef/latest/EUR")
      const data =  await res.json()
      return data
  }


  useEffect(()=> {
      const setData = () => {
      getEURUSD().then(response => setEurusd(response.conversion_rates.USD) & setUtc(response.time_last_update_utc))
    } 
    setData()
    setInterval(() => {setData() && setUpdating(true)} , 60000 )
  }, [])

  return (
    <Wrapper>
    <Title>EUR/USD</Title>
    <Price>${eurusd}</Price>{updating ? <h2>updating</h2> : null}
    <LastUpdate>Last Update</LastUpdate>
    <UTC>{utc.substring(5,26)}</UTC>
  </Wrapper>
  )
          
};

export default EURUSDrate;

const Wrapper = styled.div`
  letter-spacing: 2px;
  margin: 1em;
  display: flex;
  flex-direction: column;
  height: 50%;
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
`
const Price = styled.h3`
    font-size: 16px;
    color:green;
    margin: 0;

`
const LastUpdate = styled.h3`
  font-size: 12px;

  margin: 0;

`
const UTC = styled.h3`
  font-size: 12px;
  margin: 0;

`