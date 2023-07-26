import "./Footer.css"

export default function Footer () {
    return (
        <footer id = "footer" className="bd-footer mt-5 ">
          <div className="container">
            <div className="mb-3 my-4" id = "brand">
              <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Weather Forecast"> 
                <strong className="fs-5">Weather Forecast - App</strong>
              </a>
              <ul className="list-unstyled ">
                <li className="mb-2">Designed and built by <strong className = "text-body-secondary text-decoration-none">Abhay Dixit</strong></li>
              </ul>
            </div>
          </div>
          <div id = "links" className="mb-3 my-4">
            <h5 id = "link-heading">Links</h5>
            <ul className="list-unstyled" >
              <li className="mb-2"><a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/abhayd08" style = {{color: "black"}}>
                  <i className="fa-brands fa-linkedin fa-xl mx-1 mb-6" style={{color: "#0a66c2"}}></i><span className = "platform-name">LinkedIn</span>
                </a>
              </li>
              <li className="mb-2"><a target = "_blank" rel = "noreferrer" href = "https://www.github.com/abhayd08" style = {{color: "black"}}>
                  <i className="fa-brands fa-square-github fa-xl mx-1" style={{color: "#1f3251"}}></i><span className = "platform-name">Github</span>
                </a>
              </li>
              <li className="mb-2"><a target = "_blank" rel = "noreferrer" href = "https://www.twitter.com/abhayd_8" style = {{color: "black"}}>
                  <i className="fa-brands fa-square-twitter fa-xl mx-1" style={{color: "#0a66c2"}}></i><span className = "platform-name">Twitter</span>
                </a>
              </li>
              <li className="mb-2"><a target = "_blank" rel = "noreferrer" href = "https://instagram.com/abhayd_08?igshid=ZDc4ODBmNjlmNQ==" style = {{color: "black"}}>
                  <i className="fa-brands fa-instagram fa-xl mx-1" style={{color: "#e61e89"}}></i><span className = "platform-name">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
    )
}