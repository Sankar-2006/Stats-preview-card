(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a="/Stats-preview-card/assets/image-header-desktop-c3703b29.jpg";document.querySelector("#app").innerHTML=`

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
    <img src="${a}" alt="working women">
    </div>
    
  </section>
`;
