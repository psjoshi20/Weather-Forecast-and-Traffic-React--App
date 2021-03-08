import React from 'react'

function Header() {
  return (
        <div>
              <h1> Welcome to mySingapore  Weather / Traffic App</h1>
   
              <nav id ="navbar" class ="nav">
                  <ul class="nav-list">
                      <li>About</li>
                      <a href="#welcome-section">About</a>
                      <li>Traffic/ Weather Today</li>
                      <a href="#images">Work</a>
                      <li>Connect</li>
                      <a href="#contact">Connect</a>
                  </ul>
              </nav>
  
              <section id ="welcome-section" class ="welcome-section">
                  <p> A non commercial App to quick find of Singapore Traffic and Weather information</p>
              </section>
      
              <section id ="images" class ="images-section">
                        <h2 class="images-section-header">please choose a Date and Time to find out more</h2>

                        <div class="images-grid">
                          <a 
                            href=""target="_blank" class="image image-tile" >
                            <img class="image-image" src="" alt="singapore Image" />
                          </a>
                          <a
                          href="" target="_blank" className="image image-tile">
                          <img className="project-image" src="" alt="" /> 
                          <p class="image-title">
                          
                          Traffic and Weather 
                            
                          </p>
                        </a>

                        </div> 

              </section>


         
        </div>
    )
}
export default Header;


     