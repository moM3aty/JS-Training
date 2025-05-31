
console.log("script.js loaded");

const imagesData = [
    { src: "../images/1.jpg", alt: "وصف الصورة 1" },
    { src: "../images/2.jpg", alt: "وصف الصورة 2" },
    { src: "../images/3.jpg", alt: "وصف الصورة 3" },
    { src: "../images/4.jpg", alt: "وصف الصورة 4" },
    { src: "../images/5.jpg", alt: "وصف الصورة 5" },
    { src: "../images/6.jpg", alt: "وصف الصورة 6" }
];
function initializePage() {
    console.log("initializePage called");
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.warn("Element with ID 'currentYear' not found in footer.");
    }
    
    populateImageGallery();
    
    const modal = document.getElementById('initialCheckModal');
    const confirmYesButton = document.getElementById('confirmYes');
    const confirmNoButton = document.getElementById('confirmNo');

    if (modal && confirmYesButton && confirmNoButton) {
        console.log("Modal elements found. Displaying modal.");
        modal.classList.add('active');

        confirmYesButton.onclick = function() {
            console.log("Modal 'Yes' clicked.");
            closeModal(modal);
        };

        confirmNoButton.onclick = function() {
            console.log("Modal 'No' clicked.");
            closeModal(modal); 
            const bodyElement = document.getElementById("body");
            if (bodyElement) {
                bodyElement.style.display = "none";
                console.log("Body hidden due to modal 'No' response.");
            } else {
                console.error("Body element with ID 'body' not found for hiding.");
            }
        };
    } else {
        console.error("One or more modal elements not found. Check IDs: initialCheckModal, confirmYes, confirmNo. Modal will not be displayed.");
    }
}

function closeModal(modalElement) {
    if (modalElement) {
        modalElement.classList.remove('active');
        console.log("Modal closed.");
    } else {
        console.warn("closeModal called with null modalElement.");
    }
}

function dat() {
    console.log("dat() called");
    const dValueElement = document.getElementById("date");
    const txtElement = document.getElementById("txt");
    
    if (!dValueElement) {
        console.error("Date input element with ID 'date' not found.");
        return;
    }
    if (!txtElement) {
        console.error("Message element with ID 'txt' for date input not found.");
        return;
    }

    const dValue = dValueElement.value;
    const currentYear = new Date().getFullYear(); 

    txtElement.className = "form-message"; 
    txtElement.textContent = ""; 

    if (dValue === "") {
        txtElement.textContent = "عفواً، يجب إدخال رقم سنة الميلاد.";
        txtElement.classList.add("error");
        console.log("Age check: No year born entered.");
        return;
    }

    const yearBorn = Number(dValue);
    const age = currentYear - yearBorn;

    if (isNaN(yearBorn) || yearBorn <= 0 || yearBorn > currentYear) {
         txtElement.textContent = "عفواً، لقد أدخلت سنة ميلاد غير صحيحة.";
         txtElement.classList.add("error");
         console.log(`Age check: Invalid year born - ${dValue}`);
    } else if (age < 18) {
        txtElement.textContent = `عمرك هو ${age} سنة. يجب أن يكون عمرك 18 عامًا أو أكثر.`;
        txtElement.classList.add("warning");
        console.log(`Age check: Age is ${age} (less than 18).`);
    } else {
        txtElement.textContent = `عمرك هو ${age} سنة.`;
        txtElement.classList.add("success");
        console.log(`Age check: Age is ${age} (18 or older). Showing GPA section.`);
        
        const gpaSection = document.getElementById("GpaSection");
        if (gpaSection) {
            gpaSection.style.display = 'block'; 
            void gpaSection.offsetWidth; 
            gpaSection.classList.add('gpa-section-visible');
            console.log("GPA section made visible.");
        } else {
            console.error("GPA section element with ID 'GpaSection' not found.");
        }
    }
}

function GPA() {
    console.log("GPA() called");
    const gpaInputElement = document.getElementById("GPa");
    const txt1Element = document.getElementById("txt1");

    if (!gpaInputElement) {
        console.error("GPA input element with ID 'GPa' not found.");
        return;
    }
    if (!txt1Element) {
        console.error("Message element with ID 'txt1' for GPA input not found.");
        return;
    }
    
    const gpaInput = gpaInputElement.value;
    txt1Element.className = "form-message gpa-result"; 
    txt1Element.textContent = "";

    if (gpaInput === "") {
        txt1Element.textContent = "الرجاء إدخال معدلك التراكمي.";
        txt1Element.classList.add("error"); 
        console.log("GPA calculation: No GPA entered.");
        return;
    }
    
    const gpa = Number(gpaInput);

    if (isNaN(gpa) || gpa < 0 || gpa > 4) { 
        txt1Element.textContent = "الرجاء إدخال قيمة معدل صحيحة (بين 0 و 4).";
        txt1Element.classList.add("error"); 
        console.log(`GPA calculation: Invalid GPA value - ${gpaInput}`);
        return;
    }
    
    let grade = "";
    if (gpa >= 3.7) { 
        grade = "ممتاز مرتفع (A+)";
    } else if (gpa >= 3.3) {
        grade = "ممتاز (A)";
    } else if (gpa >= 3.0) {
        grade = "جيد جداً مرتفع (B+)";
    } else if (gpa >= 2.7) {
        grade = "جيد جداً (B)";
    } else if (gpa >= 2.3) {
        grade = "جيد مرتفع (C+)";
    } else if (gpa >= 2.0) {
        grade = "جيد (C)";
    } else if (gpa >= 1.7) {
        grade = "مقبول مرتفع (D+)";
    } else if (gpa >= 1.0) {
        grade = "مقبول (D)";
    } else {
        grade = "راسب (F)";
    }
    txt1Element.textContent = `تقديرك هو: ${grade}`;
    console.log(`GPA calculation: GPA is ${gpa}, Grade is ${grade}`);
}

function day() {
    console.log("day() called");
    const dateValueElement = document.getElementById("dd");
    const txt2Element = document.getElementById("txt2");

    if (!dateValueElement) {
        console.error("Date input element with ID 'dd' for day finder not found.");
        return;
    }
    if (!txt2Element) {
        console.error("Message element with ID 'txt2' for day finder not found.");
        return;
    }

    const dateValue = dateValueElement.value;
    txt2Element.className = "form-message day-result"; 
    txt2Element.textContent = "";

    if (!dateValue) {
        txt2Element.textContent = "الرجاء اختيار تاريخ.";
        txt2Element.classList.add("error");
        console.log("Day finder: No date selected.");
        return;
    }

    try {
        const dateObj = new Date(dateValue);
        if (isNaN(dateObj.getTime())) {
            txt2Element.textContent = "الرجاء إدخال تاريخ صحيح.";
            txt2Element.classList.add("error");
            console.log(`Day finder: Invalid date selected - ${dateValue}`);
            return;
        }
        const dayIndex = dateObj.getDay();
        const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        
        txt2Element.textContent = `اليوم المحدد هو: ${daysOfWeek[dayIndex]}`;
        console.log(`Day finder: Date is ${dateValue}, Day is ${daysOfWeek[dayIndex]}`);
    } catch (e) {
        txt2Element.textContent = "حدث خطأ أثناء معالجة التاريخ.";
        txt2Element.classList.add("error");
        console.error("Day finder: Error processing date -", e);
    }
}

function populateImageGallery() {
    console.log("populateImageGallery called");
    const gallery = document.getElementById('imageGallery');
    if (!gallery) {
        console.error("Image gallery element with ID 'imageGallery' not found.");
        return;
    }

    gallery.innerHTML = ''; 

    imagesData.forEach((imgData, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item'; 

        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.id = `gallery_img_${index}`;

        const button = document.createElement('button');
        button.textContent = 'إخفاء الصورة';
        button.id = `gallery_btn_${index}`;
        button.onclick = function() {
            toggleImageVisibility(index);
        };

        div.appendChild(img);
        div.appendChild(button);
        gallery.appendChild(div);
    });
    console.log(`Image gallery populated with ${imagesData.length} items.`);
}

function toggleImageVisibility(index) {
    console.log(`toggleImageVisibility called for index ${index}`);
    const img = document.getElementById(`gallery_img_${index}`);
    const btn = document.getElementById(`gallery_btn_${index}`);

    if (!img) {
        console.error(`Image element with ID 'gallery_img_${index}' not found.`);
        return;
    }
    if (!btn) {
        console.error(`Button element with ID 'gallery_btn_${index}' not found.`);
        return;
    }

    const isHidden = img.classList.contains('gallery-image-hidden');

    if (isHidden) {
        img.classList.remove('gallery-image-hidden');
        btn.textContent = 'إخفاء الصورة';
        console.log(`Image ${index} shown.`);
    } else {
        img.classList.add('gallery-image-hidden');
        btn.textContent = 'إظهار الصورة';
        console.log(`Image ${index} hidden.`);
    }
}
