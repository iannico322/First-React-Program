

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
    return (
        <header>
            <nav className="nav">
                <div>
                    <img src="./react-logo.png" className="nav-logo" />
                    <h1>React JS</h1>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <div className="footer-cls">
            <small>© 2022 Caulin development. All rights reserved.</small>
        </div>
    )
}

function MainContent() {
    return (
        <div className="main">
            <div>
                <h1>Reasons I'm excited to learn React</h1>
                <ul>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ul>
            </div>
            
            
                
        </div>
      
    )
}

function SvgImg(){
    return(

    <div className="svg-container">
        <svg className="react-logo" viewBox="0 0 132 235" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M131.503 140.767C144.474 140.767 154.988 130.253 154.988 117.282C154.988 104.312 144.474 93.797 131.503 93.797C118.533 93.797 108.018 104.312 108.018 117.282C108.018 130.253 118.533 140.767 131.503 140.767Z" fill="#33373E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.508 69.5326C163.04 69.5326 192.332 74.0571 214.419 81.6607C241.03 90.8222 257.391 104.709 257.391 117.283C257.391 130.386 240.051 145.139 211.475 154.607C189.87 161.765 161.44 165.501 131.508 165.501C100.819 165.501 71.7592 161.994 49.9111 154.528C22.2693 145.08 5.62038 130.137 5.62038 117.283C5.62038 104.811 21.2422 91.0314 47.4791 81.884C69.6479 74.155 99.6636 69.5326 131.504 69.5326H131.508Z" stroke="#33373E" stroke-width="11.2354"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.9433 93.5446C105.696 66.2295 124.249 43.1146 141.869 27.7803C163.1 9.30464 183.303 2.06907 194.195 8.3501C205.547 14.8961 209.664 37.2877 203.589 66.7721C199.002 89.064 188.031 115.558 173.078 141.487C157.746 168.072 140.191 191.494 122.81 206.686C100.817 225.912 79.5543 232.869 68.4196 226.448C57.615 220.221 53.4832 199.801 58.6664 172.502C63.0459 149.437 74.0364 121.126 89.9382 93.5441L89.9433 93.5446Z" stroke="#33373E" stroke-width="11.2354"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.9729 141.557C74.1755 114.272 63.42 86.6498 58.9305 63.7259C53.5263 36.1057 57.3472 14.9879 68.2296 8.68857C79.5698 2.12338 101.025 9.73908 123.536 29.7268C140.555 44.8383 158.032 67.5698 173.029 93.4748C188.404 120.034 199.928 146.941 204.411 169.586C210.084 198.242 205.492 220.138 194.368 226.577C183.574 232.826 163.822 226.21 142.76 208.086C124.965 192.773 105.926 169.112 89.9729 141.556V141.557Z" stroke="#33373E" stroke-width="11.2354"/>
        </svg>
    </div>
    )
    }

function Card(){

    return(
    <div className="cards-container">
        <div className="cards one">
            <h1> <span>1</span> Gwapo</h1>
            <p>Ea commodo consequat Lorem quis mollit. Est esse amet et exercitation exercitation </p>
        </div>

        <div className="cards one">
            <h1><span>2</span> Gwapo</h1>
            <p>Ea commodo consequat Lorem quis mollit. Est esse amet et exercitation exercitation fugiat incididunt tempo.  Est esse amet et exercitation exercitation fugiat incididunt tempo</p>
        </div>
        <div className="cards one">
            <h1><span>3</span>Gwapo</h1>
            <p>Ea commodo consequat Lorem quis mollit. Est esse amet et exercitation exercitation </p>
        </div>
        
    </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <SvgImg />
            <MainContent />
            <Card />
            
        </div>
    )
}
function Foot(){
    return(
        <Footer />
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.render(<Foot />, document.getElementById("bottom"))