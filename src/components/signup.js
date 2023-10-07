function signup(){
    return`
    
    <div class="container">
        <header>Signup</header>
    
        <form action="./index.html">
    
            <div class="field email-field">
                <div class="input-field ">
                    <input type="email" placeholder="Enter your email" class="email ">
                </div>
                <span class="error email-error">
                    <i class='bx bx-error-circle error-icon'></i>
                    <p class="error-text">Please enter a valid email</p>
                </span>
            </div>
    
            <div class="field create-password">
                <div class="input-field create-password">
                    <input type="password" placeholder="create password" class="password" />
                    <i class='bx bx-hide show-hide'></i>
                </div>
                <span class="error password-error">
                    <i class='bx bx-error-circle error-icon'></i>
                    <p class="error-text">Please enter at least 8 character with number , symbol,small and capital letter
                    </p>
                </span>
            </div>
    
            <div class="field confirm-password">
                <div class="input-field ">
                    <input type="password" placeholder="Confirm password" class="cPassword" />
                    <i class='bx bx-hide show-hide'></i>
                </div>
                <span class="error cpassword-error">
                    <i class='bx bx-error-circle error-icon'></i>
                    <p class="error-text">Password don't match</p>
                </span>
            </div>
            <div class="input-field button">
                <input type="submit" value="submit Now">
            </div>
        </form>
    </div>
    
    `
}
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector("form"),
        emailField = form.querySelector(".email-field"),
        emailInput = emailField.querySelector(".email"),
        passField = form.querySelector(".create-password"),
        passInput = passField.querySelector(".password"),
        cPassField = form.querySelector(".confirm-password"),
        cPassInput = cPassField.querySelector(".cPassword");

    // Email validation
    function checkEmail() {
        const emaipattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emaipattern)) {
            return emailField.classList.add("invalid")//Adding invalid class if email value does not matched with email pattern
        }
        emailField.classList.remove("invalid")//removing invalid class if email  matched with email value matched with emaipattern
    }

    //Hide and show password
    const eyeIcons = document.querySelectorAll(".show-hide")

    eyeIcons.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            const pInput = eyeIcon.parentElement.querySelector("input")//getting parent element of eye icon and selecting the password input
            if (pInput.type === "password") {
                eyeIcon.classList.replace("bx-hide", "bx-show")
                return (pInput.type = "text")
            }
            eyeIcon.classList.replace("bx-show", "bx-hide")
            pInput.type = "password"
        })
    })

    // password validation
    function createpass() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passInput.value.match(passPattern)) {
            return passField.classList.add("invalid")//adding invalid class if password input value do not match with passPattern
        }
        passField.classList.remove("invalid")//removing invalid class if password input value  matched  with passPattern
    }

    //confirm password validation
    function confirmPass() {
        if (passInput.value !== cPassInput.value || cPassInput.value === "") {
            return cPassField.classList.add("invalid")
        }
        cPassField.classList.remove("invalid");
    }
    // Calling Fuction on Form Submit 
    form.addEventListener("submit", (e) => {
        e.preventDefault() // preventing from submitting
        checkEmail()
        createpass()
        confirmPass()

        //calling function on key up 
        emailInput.addEventListener("keyup", checkEmail)
        passInput.addEventListener("keyup", createpass)
        cPassInput.addEventListener("keyup", confirmPass)

        if (
            !emailField.classList.contains("invalid") &&
            !passField.classList.contains("invalid") &&
            !cPassField.classList.contains("invalid")
        ) {
            location.href = form.getAttribute("action")
        }

    })
})

export default signup;