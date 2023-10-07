import header from "./components/header.js";
import footer from "./components/footer.js";
import Main from "./components/main.js";
import signup from "./components/signup.js";


 function App(page) {

    let output = "<div>";

    if(page == 'index'){
        output += header();
        output += Main();
        output += footer();
    
    }else if(page == 'signup'){
        output +=signup();

    }
    output += "</div>";
    return output;

}
export default App;

 