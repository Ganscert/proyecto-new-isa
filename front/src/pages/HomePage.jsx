import { ProcessCard } from "../components/home/ProcessCard"
import { NavBar } from "../components/NavbarHero"



export const HomePage = () => {
  return (<>
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ProcessCard
            name="RECEPCION"
            link={[
              { link: '/recepcion', placeholder: 'recepcion' },
              { link: '/recepcion/transferencia', placeholder: 'transferencia' },
            ]}
          />
        </div>
        {/* <div className="col-6">
          <ProcessCard name="CUENTA" link="/cuenta" />
        </div>
        <div className="col-6">
          <ProcessCard name="PREPARACION" link="/preparacion" />
        </div>
        <div className="col-6">
          <ProcessCard name="REPORTS" link="/reports" />
        </div> */}
      </div>

    </div>
  </>
  )
}
