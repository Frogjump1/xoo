import Navbar from '../components/Navbar.js'
import Service from '../components/Service.js'
import Contact from '../components/Contact.js'
export default function services(){
  return(
    <>

      <Navbar/>

      <div
        class="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-4 text-white mb-3 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Pages</a>
              </li>
              <li class="breadcrumb-item text-primary active" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <Service/>

      <Contact/>

    </>
  )
}
