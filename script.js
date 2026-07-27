// ===============================
// UMS Drinking Water
// WhatsApp Booking System
// ===============================

let whatsappNumber = "";

const orderForm = document.getElementById("orderForm");
const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
  whatsappNumber = document.getElementById("whatsappNumber").value;

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const address = document.getElementById("address").value.trim();
const tank = document.getElementById("tank").value;
const quantity = document.getElementById("quantity").value;
const note = document.getElementById("note").value.trim();

if(name === "" || phone === "" || address === ""){
alert("Please fill all required fields.");
return;
}

const phonePattern = /^[0-9]{11}$/;

if(!phonePattern.test(phone)){
alert("Enter a valid 11 digit phone number.");
return;
}

if(quantity < 1){
alert("Quantity must be at least 1.");
return;
}

const message =
`Aqua pure water
📦 New Order

👤 Name: ${name}

📱 Phone: ${phone}

📍 Address:
${address}

🛢 Tank:
${tank}

🔢 Quantity:
${quantity}

📝 Note:
${note || "No Note"}
`;
const url =
`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

const successPopup = document.getElementById("successPopup");

if (successPopup) {

    successPopup.classList.add("show");

    setTimeout(() => {

        successPopup.classList.remove("show");
        window.open(url, "_blank");

        orderForm.reset();

    }, 1500);

} else {

    window.open(url, "_blank");
    orderForm.reset();

}

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Console Message
// ===============================
/* ===== IMAGE VIEWER ===== */

const galleryImages = document.querySelectorAll(".gallery img");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.querySelector(".close-viewer");

if (galleryImages.length && imageViewer && viewerImage && closeViewer) {

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            viewerImage.src = img.src;
            viewerImage.alt = img.alt;
            imageViewer.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeImageViewer() {
        imageViewer.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeViewer.addEventListener("click", closeImageViewer);

    imageViewer.addEventListener("click", (e) => {
        if (e.target === imageViewer) {
            closeImageViewer();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeImageViewer();
        }
    });

}

/* ===== END IMAGE VIEWER ===== */
/* ===== SCROLL REVEAL ===== */

const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections();

/* ===== END SCROLL REVEAL ===== */
console.log("Aqua pure water Website Loaded Successfully");
/* ===== ANIMATED COUNTER ===== */

const counters = document.querySelectorAll(".counter");

const runCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        const isPercent = counter.textContent.includes("%");
        let count = 0;

        const speed = target / 80;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.textContent = isPercent
                    ? Math.floor(count) + "%"
                    : Math.floor(count).toLocaleString() + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = isPercent
                    ? target + "%"
                    : target.toLocaleString() + "+";

            }

        };

        updateCounter();

    });

};

const statsSection = document.getElementById("stats");

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounters();
                observer.unobserve(statsSection);

            }

        });

    }, { threshold: 0.3 });

    observer.observe(statsSection);

}

/* ===== END ANIMATED COUNTER ===== */
/* ===== BACK TO TOP BUTTON ===== */

const backToTop = document.getElementById("backToTop");
console.log(backToTop);

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

    backToTop.classList.add("clicked");

    setTimeout(() => {
        backToTop.classList.remove("clicked");
    }, 200);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

}

/* ===== END BACK TO TOP BUTTON ===== */
/* ===== SCROLL PROGRESS BAR ===== */

const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        scrollProgress.style.width = progress + "%";

    });

}

/* ===== END SCROLL PROGRESS BAR ===== */
/* ===== FAQ SECTION ===== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

/* ===== END FAQ SECTION ===== */
const businessStatus = document.getElementById("businessStatus");

if (businessStatus) {
  const hour = new Date().getHours();

  if (hour >= 9 && hour < 22) {
    businessStatus.innerHTML = "🟢 Open Now • 9:00 AM - 10:00 PM";
  } else {
    businessStatus.innerHTML = "🔴 Closed • Opens at 9:00 AM";
    businessStatus.classList.add("closed");
  }
}