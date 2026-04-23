// @ts-ignore
const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
// @ts-ignore
emailjs.init("u7iQzLsxAErz6ZGTw");
if (contactForm) {
    contactForm.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();

        const submitBtn = contactForm.querySelector('button') as HTMLButtonElement;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const dataAtual = new Date().toLocaleString();
        const templateParams = {
            name: nameInput.value,
            email: emailInput.value,
            title: titleInput.value,
            message: messageInput.value,
            time: dataAtual
        }
        // @ts-ignore
          emailjs.send("service_4lbn01n","template_e3fqnem", templateParams)
        .then(() => {
            alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = 'Sent Successfully!';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 3000);
            })
        .catch((error: any) => {    
            console.error('Failed to send email:', error);
            alert('An error occurred while sending your message. Please try again later.');
            submitBtn.textContent = 'Failed to Send Message, try again in 5 seconds';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 5000);
        })
    });
    
}