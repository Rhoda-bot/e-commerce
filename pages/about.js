import Footer from "./reuseables/footer";
import Navbar from "./reuseables/menuBar";

export default function About() {
    return (
      <>
        <Navbar />
        <div class="video-background-holder">
        <div class="video-background-overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src="/images/bgvideo.mp4"
               type="video/mp4" />
          </video>
        <div class="video-background-content container h-100">
          <div class="d-flex h-100 text-start align-items-center">
            <div class="w-50 text-white">
              <h1 class="display-4">Bootstrap video background</h1>
              <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
              <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white">
                          <u>Bootstrapious</u></a>
              </p>
            </div>
            <div className="w-50  banner__image">
              <img src="/images/drone5.png" className="img-fluid banner__image--img"/>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </>
    )
  }