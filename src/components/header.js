
function header() {
    return `
<body>
    <!-- navbar sections starts  -->
    <header class="header">
        <div class="logo">
            <img class="img" src="./img/logo-no-background.png" >
        </div>

        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#Aboutus">About us</a>
            <a href="#footer">Contact</a>
            <a href="./signup.html" class="btn">signup </a>
        </nav>


        <div class="fas fa-bars" id="menu-btn"></div>
    </header>
    `;
    
    
}

export default header;