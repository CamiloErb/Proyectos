import React, { useEffect, useRef, useState } from "react"
import db from "../../firebase/firebase"
import firebase from "firebase"

export const Excel = (props) => {
    const [profesionales, setProfesionales] = useState([])
    const [titulo, setTitulo] = useState("")

    useEffect(() => {
        setProfesionales(props.profesionales)
    }, [props.profesionales])

    useEffect(() => {
        setTitulo(props.titulo)
    }, [props.titulo])

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    var prevCount = usePrevious(titulo)


    const saveData = async (e) => {
        e.preventDefault()
        await profesionales.map(item => {
            const { monto, iibb, circ, circalq, bco, subtotal, total } = item
            const saved = item.sheets[titulo]
            db.collection("profesionales").doc(item.id).set(
                {
                    [titulo]:
                    {
                        monto: monto || saved.monto,
                        iibb: iibb || saved.iibb,
                        circ: circ || saved.circ,
                        circalq: circalq || saved.circalq,
                        bco: bco || saved.bco,
                        subtotal: subtotal || saved.subtotal,
                        total: total || saved.total,
                    }
                }
                , { merge: true })
        })
        if (prevCount !== titulo && prevCount !== "") {
            profesionales.map(item => {
                db.collection("profesionales").doc(item.id).update({ [prevCount]: firebase.firestore.FieldValue.delete() })
            })
        }

    }

    const conseguirPorcentaje = (num, porcentaje) => {
        return Math.round((porcentaje * num) / 100)
    }
    const conseguirBco = (num1, num2) =>{
        if(num1 > 0 && num2 > 0 ){
            return (conseguirPorcentaje((num1 + num2), 1.2)) + 40
        } else {
            return 0
        }
    }
    const circalq = (value, id) => {
        const prof = [...profesionales]
        const foundIndex = profesionales.findIndex(item => item.id === id)
        const obj = profesionales[foundIndex]
        obj.circalq = +value
        obj.subtotal = obj.monto - obj.iibb - obj.circ - (obj.circalq || 0)
        obj.bco = conseguirBco(+obj.subtotal, +obj.monto)
        obj.total = obj.subtotal - obj.bco
        prof[foundIndex] = obj
        setProfesionales(prof)
    }
    const guardarMontos = (value, id) => {
        const prof = [...profesionales]
        const foundIndex = profesionales.findIndex(item => item.id === id)
        const obj = profesionales[foundIndex]
        obj.monto = +value
        obj.iibb = conseguirPorcentaje(value, 3.5)
        obj.circ = conseguirPorcentaje(value, 5)
        obj.subtotal = obj.monto - obj.iibb - obj.circ - (obj.circalq || 0)
        obj.bco = conseguirBco(+obj.subtotal, +obj.monto)
        obj.total = obj.subtotal - obj.bco
        prof[foundIndex] = obj
        setProfesionales(prof)
    }
    const titulos = ["MONTO", "IIBB", "%CIRC", "CIRC/ALQ", "SUBTOTAL", "BCO", "TOTAL", "", "", "", "", "", ""]
    return <div className="row">
        <div className="">
            <button className="btn btn-success m-2 float-end" onClick={saveData}>GUARDAR DATOS</button>

        </div>
        <div className=" m-0">
            <div className="row m-0 ">
                <div className="row m-0">
                    <div className="col-2 p-3 border">
                    </div>
                    {titulos.map(item => <div className="col p-0 border">
                        {item}
                    </div>)}
                </div>
            </div>
            <div className="row m-0 ">
                {profesionales.map(item => {
                    const sheet = item.sheets[titulo]
                    console.log(item.subtotal)
                    return <div className="row m-0 ">
                        <div key={item.id} className="col-2 border ">{item.name}</div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control"
                             defaultValue={sheet.monto > 0 ? sheet.monto : item.monto } 
                             onBlur={(e) => guardarMontos(e.target.value, item.id) } />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" 
                             readOnly value={sheet.iibb > 0 && typeof(item.iibb) === "undefined"?  sheet.iibb : item.iibb} />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" 
                            readOnly value={sheet.circ > 0 && typeof(item.circ) === "undefined"? sheet.circ :  item.circ } />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" 
                            defaultValue={sheet.circalq > 0 ? sheet.circalq : item.circalq}
                            onBlur={(e) => circalq(e.target.value, item.id)} />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control"
                             readOnly value={sheet.subtotal > 0 && typeof(item.subtotal) === "undefined"? sheet.subtotal : item.subtotal } />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" 
                            readOnly value={sheet.bco > 0 && typeof(item.bco) === "undefined"? sheet.bco :  item.bco } />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control"  
                            readOnly value={sheet.total > 0 && typeof(item.total) === "undefined" ? sheet.total : item.total} />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col p-0 ">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}


