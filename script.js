document.addEventListener("DOMContentLoaded", function () {
    const fieldsets = document.querySelectorAll("fieldset");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    let currentStep = 0;

    // Function to display the current step and hide others
    function showStep(step) {
        fieldsets.forEach((fieldset, index) => {
            fieldset.style.display = index === step ? "block" : "none";
        });
    }

    // Show the first step initially
    showStep(currentStep);

    // Event listeners for the "Next" buttons
    nextButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (validateStep(currentStep)) {
                currentStep++;
                if (currentStep < fieldsets.length) {
                    showStep(currentStep);
                } else {
                    // Form submission handling if it's the last step
                    document.getElementById("tneaForm").submit();
                }
            } else {
                alert("Please fill out all required fields correctly.");
            }
        });
    });

    // Event listeners for the "Previous" buttons
    prevButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Basic validation function
    function validateStep(step) {
        const inputs = fieldsets[step].querySelectorAll("input, select, textarea");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        return isValid;
    }

    // Handle form submission
    document.getElementById("tneaForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        // You can implement actual form submission here (AJAX or server submission)
    });
});
