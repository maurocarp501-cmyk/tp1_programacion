export default function Tarjeta({nombre,categoria,prioridad,estado,eliminar,cambiarEstado}) {

    return(
  <div className="Tarjeta">
<div className="tarjeta-info">
    <h2>{nombre}</h2>
            <h3>{categoria}, {prioridad},{estado}</h3>
             </div>    
    <span
    className="Eliminar"
               onClick={() => eliminar()}
    >Borrar</span>   
    <select value={estado} onChange={(e) => cambiarEstado(e.target.value)}>
    <option value="pendiente">pendiente</option>
    <option value="en proceso">en proceso</option>
    <option value="finalizado">finalizado</option>
    </select>
  </div>
    )
}