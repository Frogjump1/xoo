import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Navbar(){
  return(
    <>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    <title>Zoofari - Zoo & Safari Park Website Template</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Quicksand:wght@600;700&display=swap"
      rel="stylesheet"/>

    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"/>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"/>

      <div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <div className={styles.icon}>
              <small class="fa fa-map-marker-alt text-success me-2"></small>
              </div>
              <div className={styles.icon1}>
              <small>123 Street, New York, USA</small>
              </div>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-3">
            <div className={styles.ispace}>
            <div className={styles.icon}>
              <small class="far fa-clock text-success me-2"></small>
            </div>
            <div className={styles.icon1}>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-phone-alt text-success me-2 mx-2"></small>
              <div className={styles.icon1}>
              <small class="mx-2">+012 345 6789</small>
              </div>
            </div>
            <div class="h-100 d-inline-flex align-items-center">
              <a class="btn btn-sm-square bg-white text-success me-1 mx-1" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-sm-square bg-white text-success me-1 mx-1" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-sm-square bg-white text-success me-1 mx-1" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a class="btn btn-sm-square bg-white text-success me-0 mx-1" href=""
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" class="navbar-brand p-0">
        <div className={styles.title}>
        <img class="img-fluid me-3 mx-3" src="./icon-10.png" alt="Icon" />
          <h1 class="m-2 ">Zoofari</h1>
          </div>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <Link href="/"><a class="nav-item nav-link active">Home</a></Link>
            <Link href="/about"><a class="nav-item nav-link">About</a></Link>
            <Link href="/services"><a class="nav-item nav-link">Services</a></Link>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link href="/animal"><a class="dropdown-item" href="#">Our Animal</a></Link></li>
            <li><Link href="/membership"><a class="dropdown-item" href="#">Membership</a></Link></li>
            <li><Link href="/visiting"><a class="dropdown-item" href="#">Visiting</a></Link></li>
            <li><Link href="/testi"><a class="dropdown-item" href="#">Testi Monial</a></Link></li>
            <li><Link href="/unk"><a class="dropdown-item" href="#">404</a></Link></li>
          </ul>
        </li>
            <a href="contact.html" class="nav-item nav-link me-4">Contact</a>
          </div>
          <a href="" class="btn btn-success"
            >Buy Ticket<i class="fa fa-arrow-right ms-2"></i
          ></a>
        </div>
      </nav>

    </>
  )
}
