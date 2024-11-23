document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contact-form form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const whatsapp = form.querySelector('input[name="whatsapp"]').value;
        const services = Array.from(form.querySelector('select[name="services"]').selectedOptions).map(option => option.value).join(", ");
        const message = form.querySelector('textarea[name="message"]').value;

        const url = `https://wa.me/5511978748097?text=${encodeURIComponent(
            `Nome: ${name}\nWhatsApp: ${whatsapp}\nServiços: ${services}\nMensagem: ${message}`
        )}`;

        window.open(url, '_blank');
    });
});