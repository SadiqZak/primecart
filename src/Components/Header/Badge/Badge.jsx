const Badge =({icon, type})=>{
  
    return(
        <div>
            <button className="btn-badge">
                 <span className="badge">0</span>
                 <span className="badge-icon material-icons">{icon}</span>
            </button>
        </div>
    )
}

export default Badge