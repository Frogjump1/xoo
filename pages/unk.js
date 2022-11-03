import Navbar from '../components/Navbar.js'
import Contact from '../components/Contact.js'

export default function unk(){
  return(
    <>
    <Navbar/>

    <div
      class="container-fluid header-bg py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <h1 class="display-4 text-white mb-3 animated slideInDown">
          404 Error
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a class="text-white" href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a class="text-white" href="#">Pages</a>
            </li>
            <li class="breadcrumb-item text-primary active" aria-current="page">
              404 Error
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <i class="bi bi-exclamation-triangle display-1 text-success"></i>
            <h1 class="display-1">404</h1>
            <h1 class="mb-4">Page Not Found</h1>
            <p class="mb-4">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <a class="btn btn-success py-3 px-5" href="">Go Back To Home</a>
          </div>
        </div>
      </div>
    </div>

    <Contact/>
    </>
  )
}
