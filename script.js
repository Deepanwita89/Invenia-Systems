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

// Modal data for each service
/*const serviceDetails = {
    engineering: {
        title: "Engineering - Design & Drawing",
        description: `
        <ul>
            <li>Protection & Metering Single Line Diagram</li>
            <li>LT AC & DC Distribution Single Line Diagram</li>
            <li>Electrical Layout – Plan & Section</li>
            <li>Cable Trench & Tray Layout with BOM</li>
            <li>Earthing Calculation & Layout with BOM</li>
            <li>Erection Key Diagram with BOM</li>
            <li>Illumination Calculation & Layout with BOM</li>
            <li>Lightning Protection Calculation & Layout with BOM</li>
            <li>Cable Schedule with Interconnection Details</li>
            <li>Transformer Sizing Calculation</li>
            <li>CT Knee Point Voltage Calculation</li>
            <li>Battery & Charger Sizing Calculation</li>
            <li>HT & LT Cable Sizing with Voltage Drop Calculation</li>
            <li>Sag & Tension Calculation</li>
            <li>Short Circuit Force Calculation</li>
            <li>Preparation Of Technical Specification</li>
            <li>Vendor Evaluation</li>
            <li>Review of Vendor Drawings / Documents</li>
            <li>Input / Output List for PLC</li>
        </ul>
        `
    },
    installation: {
        title: "Supply, Installation, Testing & Commissioning",
        description: `We provide Supply & Installation services for all electrical installations. We undertake turnkey projects for substations, 
        Hydro Projects, Transmission Lines and other Plants / Industries. We have authorization from many reputed OEMs for supply of both HV & LV 
        electrical equipment like, Circuit Breaker, Isolator, Current Transformer, Potential Transformer, Capacitive Voltage Transformer, Panels, 
        Cables, APFC & Capacitor Bank, Earthing & Lightning Protection Materials, Cabling Accessories like Cable Tray, Gland & Lug.

        For some special projects we even import electrical equipment / component from foreign countries like Japan, Germany, etc.

        Our experienced professionals can provide tailored solutions to clients and have capability to complete supply & installations of 
        projects within scheduled time.
        `
    },
    supervision: {
        title: "Erection Supervision",
        description: `We provide consultancy services like Project Planning, Progress Monitoring & Erection Supervision for any project.`
    },
    testing: {
        title: "Testing & Commissioning",
        description: `We have experienced testing engineers and complete set of testing equipment to perform testing & commissioning of any 
        electrical project. We can provide testing services for HV & LV Systems, like, Insulation Resistance Test, HV Test, Tan Delta Test, 
        Partial Discharge Test, Contact Resistance Measurement (CRM), Primary Injection Test, Secondary Injection Test, Winding Resistance test, 
        Voltage Ratio Test, Polarity test, Magnetising Current Test, Core Balance Test, Vector Group, etc.

        We have also collaborated with NABL Accredited Labs for Testing of Transformer Oil like Acidity Test, FURAN Test, etc.
        `
    },
    energyAudit: {
        title: "Energy Audit",
        description: `We provide Energy Audit Services for all type of electrical installations. Out team of BEE Certified Auditors 
        systematically analyses each stage of the energy consumption in any facility and determine the areas of improvement. This analysis 
        encompasses equipment efficiency, process optimization and resource utilization, aiming to minimize environmental impact and boost 
        operational efficiency.
        `
    },
    feaReport: {
        title: "Feasibility Report",
        description: `We provide Project Feasibility Report for both Green Field & Extension Projects.`
    },
    soilTest: {
        title: "Soil Resistivity Test",
        description: `We perform Soil Resistivity Test for any project as per IS 3043. With our modernised equipment and experienced professional, 
        we can provide accurate values of Soil Resistivity for any installation. We generally follow the Werner’s Four Electrode method. We have 
        experience of performing Soil Resistivity Test in various kinds of terrains, from plain lands Jharkhand to the rocky mountains of Ladakh.
        `
    },
    supplySpare: {
        title: "Supply of Electrical Spares",
        description: `We have authorization of various OEM for sales & support of their products. We deal in Circuit Breaker (VCB, ACB, MCCB & 
        MCB), Isolator, Current Transformer, Potential Transformer, Capacitive Voltage Transformer, Panels, Cables, APFC & Capacitor Bank, DG 
        Set, Earthing & Lightning Protection Materials, Cabling Accessories like Cable Tray, Gland & Lug, Panel Accessories like Relays, Meters, 
        Indication Lamp, Annunciator, Busbar Sleeves, Belt Conveyor Safety Switches, Limit Switches, etc.`
    }
};

// Open modal when a service box is clicked
document.querySelectorAll(".service-box-electrical").forEach(box => {
    box.addEventListener("click", function() {
        const serviceKey = this.getAttribute("data-service");
        modalTitle.innerHTML = serviceDetails[serviceKey].title;
        modalDescription.innerHTML = serviceDetails[serviceKey].description;
        modal.style.display = "block";
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if clicked outside of content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});
*/

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}