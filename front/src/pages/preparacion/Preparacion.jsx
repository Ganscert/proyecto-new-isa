import { useEffect, useState } from "react"
import { NavBar } from "../../components/NavbarHero"
import { TablaDop } from "../../components/preparacion/TablaDop"
import { TablaEur } from "../../components/preparacion/TablaEur"
import { TablaUsd } from "../../components/preparacion/TablaUsd"
import { useForm } from "../../hooks/useForm"
import { useSelector } from "react-redux"

export const Preparacion = () => {

  const auth = useSelector(state => state.auth)


  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const getClients = async () => {
      const peticion = await fetch('http://localhost:3000/user/consultaClientes')
      const data = await peticion.json()
      setClientes(data)
    }
    getClients()
  }, [])

  const [datos, setDatos] = useState([])

  const recibirDatos = (cantidades) => {
    setDatos(cantidades);
    console.log("Cantidades recibidas:", cantidades);
  };

  const estiloinput = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "1px",
  }

  const { valija, cliente, billetes, checke, divisa, caja, camara, onInputChange } = useForm({
    valija: '',
    cliente: '',
    billetes: 0,
    checke: 0,
    divisa: 'DOP',
    caja: auth.caja,
    camara: ''
  })

  let contenido = null
  if(divisa == 'DOP'){
    contenido = <TablaDop onUpdate={recibirDatos} />
  } else if(divisa == 'USD'){
    contenido = <TablaUsd onUpdate={recibirDatos} />
  }else if(divisa == "EUR"){
    contenido = <TablaEur onUpdate={recibirDatos} />
  }


  return (
    <>
      <NavBar />
      <div className="container text-center">
        <div className="d-flex aling-items-center justify-content-center">
          <h1 style={{
            margin: "auto",
            marginTop: "1rem"
          }}>Preparacion</h1>
        </div>

        <div style={{ border: "1px solid black", paddingBottom: "2rem" }}>
          <div className="row mt-4">
            <div className="col">
              <label
                htmlFor="valija">VALIJA</label>
              <input id="valija" name='valija' onChange={onInputChange} value={valija} type="text" list="valijas" className="form-control" style={estiloinput} />

            </div>


            <datalist id="valijas">
              {auth.inventario.map(i => {
                return <option key={i} value={i}> </option>
              })}
            </datalist>


            <div className="col">
              <label htmlFor="cliente">CLIENTE</label>
              <input id="cliente"
                name='cliente'
                onChange={onInputChange}
                value={cliente}
                type="text" className="form-control" list="clientes" style={estiloinput} />
            </div>
            <datalist id="clientes">
              {
                clientes.map(i => {
                  return <option key={i.clientName} value={i.clientName}> </option>
                })
              }
            </datalist>
          </div>
        </div>
      </div>
      <form className="container text-center">
        <div className="row">
          <div className="col">
            <label htmlFor="montoEnBilletes">Monto en billetes</label>
            <input type="number"
              name='billetes'
              onChange={onInputChange}
              value={billetes}
              id="montoEnBilletes" className="form-control" style={estiloinput} />
          </div>
          <div className="col">
            <label htmlFor="montoEnCheque">Monto En Cheque</label>
            <input type="text" name="checke" onChange={onInputChange} value={checke} id="montoEnCheque" className="form-control" style={estiloinput} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="divisa">divisa</label>
            <select type="text" id="divisa" name="divisa" onChange={onInputChange} value={divisa} className="form-control" style={estiloinput} >
              <option defaultValue={divisa} value="DOP">DOP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="caja">caja</label>
            <input readOnly type="text" id="caja" name="caja" onChange={onInputChange} value={caja} className="form-control" style={estiloinput} />
          </div>
          <div className="col">
            <label htmlFor="camara">cámara</label>
            <input type="text" name="camara" value={camara} onChange={onInputChange} id="camara" className="form-control" style={estiloinput} />
          </div>
        </div>
        {
          contenido
        }
      </form>
    </>
  )
}
