let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // Reset index if it exceeds the total number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow on page load
showSlides();


document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    });
});



function h()
{
    document.getElementById("myButton").onclick = window.location.href = "index.html";
}

const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        alert(`File selected: ${fileInput.files[0].name}`);
        // Add code here to upload the file to a server
      }
    });

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".team-images").forEach(member => {
        let tooltip = member.querySelector(".tooltip");
        member.addEventListener("mouseover", function() {
            let rect = tooltip.getBoundingClientRect();
            if (rect.left < 0) {
                tooltip.style.left = "0";
                tooltip.style.transform = "none";
            }
            if (rect.right > window.innerWidth) {
                tooltip.style.right = "0";
                tooltip.style.left = "auto";
                tooltip.style.transform = "none";
            }
        });
    });
});

function sendMail() {
    // Get form values
    let fullName = document.getElementById("fullName").value;
    let companyName = document.getElementById("companyName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let messageText = document.getElementById("messageText").value;

    // Construct mailto link
    let mailtoLink = `mailto:info@inveniasystems.com?subject=Contact Form Submission&body=
        Name: ${fullName}%0D%0A
        Company: ${companyName}%0D%0A
        Phone: ${phoneNumber}%0D%0A
        Email: ${emailAddress}%0D%0A
        Message: ${messageText}`;

    // Open default email client
    window.location.href = mailtoLink;
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function openModal(title, description) {
    document.getElementById("modal-title").style.fontSize= 12;
    document.getElementById("modal-title").innerText = title;
    
    //document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("serviceModal").style.display = "block";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}