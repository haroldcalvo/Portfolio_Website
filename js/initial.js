  // Smooth scroll for anchor links
  $(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        600 // duration in ms
      );
    });

    // Initialize EmailJS
    emailjs.init("z4OhepAn4QnpiGjEX"); // ✅ your Public Key

    // Contact form submission
    $("#contactForm").on("submit", function (e) {
  e.preventDefault();

  const templateParams = {
    from_name: $("#name").val(),
    from_email: $("#email").val(),
    message: $("#message").val(),
  };

  // Show loader
  $("#btnText").text("Sending...");
  $("#btnLoader").removeClass("hidden");
  $("#submitBtn").prop("disabled", true);

  emailjs.send("service_vooiju4", "template_oreh7la", templateParams)
    .then(function () {
      showModal("Success ✅", "Your message has been sent successfully!");
      $("#contactForm")[0].reset();
    })
    .catch(function () {
      showModal("Error ❌", "Failed to send your message. Please try again later.");
    })
    .finally(function () {
      // Hide loader
      $("#btnText").text("Send");
      $("#btnLoader").addClass("hidden");
      $("#submitBtn").prop("disabled", false);
    });
});

    
    // Function to open modal
    function showModal(title, message) {
      $("#modalTitle").text(title);
      $("#modalMessage").text(message);
      $("#responseModal").removeClass("hidden").addClass("flex");
    }

    // Close modal
    $("#closeModal").on("click", function () {
      $("#responseModal").removeClass("flex").addClass("hidden");
    });
  
  });
