import React, { useEffect, useState } from "react"
import { Tabs, Tab } from "react-bootstrap"
import { Excel } from "../../components/Excel/Excel"
import db from "../../firebase/firebase"
import styled from "styled-components"
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
`;


export const Inicio = () => {
    const [profesionales, setProfesionales] = useState([])
    const [tabs, setTabs] = useState([])
    const [num, setNum] = useState(1)
    const [loaded, setLoaded] = useState(false)

    useEffect(async () => {
        await db.collection("profesionales").onSnapshot(querySnapshot => {
            const data = []
            querySnapshot.docs.forEach(doc => {
                const { name, ...sheets } = doc.data()
                data.push({
                    id: doc.id,
                    name,
                    sheets
                })
            })
            setProfesionales(data)
            setLoaded(true)

        })

    }, [])


    useEffect(() => {
        if (profesionales.length > 0) {

            const sheetsNames = Object.keys(profesionales[0].sheets)
            const newTabs = sheetsNames.map(sheet=> {return {name: sheet, key: 0}})
            for (let i = 0; i < newTabs.length; i++) {
                newTabs[i].key = i+1
            }
            setNum(newTabs.length+1)
            setTabs(tabs.concat(newTabs))
        }
    }, [loaded])


    const newTab = () => {
        setNum(num + 1)
        setTabs([...tabs, { name: `Hoja vacía ${num}`, key: num }])
    }

    const tittleChange = (titulo, key) => {
        const newTabs = [...tabs]
        const foundIndex = tabs.findIndex(item => item.key === key)
        const obj = tabs[foundIndex]
        if (titulo === "") {
            obj.name = `Hoja vacía ${num}`
        } else {
            obj.name = titulo
        }
        newTabs[foundIndex] = obj
        setTabs(newTabs)
    }
    return <div>
        {loaded ? <button className="btn btn-outline-success m-2" onClick={newTab}>Nueva Hoja</button> : 
            <div className="mt-5"><ClipLoader css={override} color={"black"} size={70} /> </div>
        }
        <Tabs
            defaultActiveKey="1"
            transition={false}
            className="mb-3 m-2 "
        >
            {tabs.map(item =>
                <Tab key={item.key} title={item.name} eventKey={item.key}>
                    <StyledInput type="text" placeholder="titulo" className="form-control border-bottom border-dark p-1 m-2" onBlur={(e) => tittleChange(e.target.value, item.key)}>
                    </StyledInput>
                    <Excel titulo={item.name} profesionales={profesionales}></Excel></Tab>)}

        </Tabs>
    </div>
}


const StyledInput = styled.input`
    font-weight: ;
    font-size: 24px;
    border:0;
    &:focus{
    border-color: #ced4da;
    box-shadow: none;
  }
  
`