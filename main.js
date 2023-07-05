import "./style.css";
import image from "/images/image-header-desktop.jpg";

document.querySelector("#app").innerHTML = `

  <section id="main-container">
    <div class="text-container">
      <h1>Get <span>insights</span> that help your business grow.</h1>

      <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

      <div id="footer">
        <div class="text1">
            <span class="text-1">10k+</span>
            <span class="text-2">companies</span>
        </div>
        <div class="text2">
            <span class="text-1">314</span>
            <span class="text-2">templates</span>
        </div>
        <div class="text3">
            <span class="text-1">12m+</span>
            <span class="text-2">queries</span>
        </div>
      </div>  
    </div>
    <div class="image-container">
    <div class="image-screen"></div>
    <img src="${image}" alt="working women">
    </div>
    
  </section>
`
