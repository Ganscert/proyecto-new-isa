
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router";

export const ProcessCard = ({link,name}) => {

  return (
    <div 
    style={{margin:'auto',marginTop:'15dvh'}}
    >
      <div className="card shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
        <div className="card-body text-center">
          <h4 className="card-title text-primary">{name}</h4>
          <div className="d-flex flex-column">

           {
            link.map(e=><NavLink key={e.placeholder} to={e.link} className="btn btn-secondary my-2">{e.placeholder}</NavLink>)
           }

            {/* <NavLink to={link} className="btn btn-primary my-2">Primary Link</NavLink>
            <NavLink href="#" className="btn btn-secondary my-2">Secondary Link</NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};


