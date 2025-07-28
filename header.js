document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <div class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Sugar n' Slice Logo" class="logo-img">
        </div>
        <nav>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="shop.html">Shop</a>
          <a href= "signup.html">Login or Sign Up</a>
          <a href="contact.html">Contact</a>
          <a href="faqs.html">FAQs</a>
        </nav>
      </div>
    </header>
  `;

  document.getElementById("header-container").innerHTML = headerHTML;
});
