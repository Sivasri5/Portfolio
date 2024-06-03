<script>
    function handleSubmit(event) {
        event.preventDefault(); 
       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Subject:', subject);
        console.log('Message:', message);

        document.getElementById('contactForm').reset();
    }
</script>
