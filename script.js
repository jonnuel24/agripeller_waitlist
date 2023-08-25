// function isValidEmail(email) {
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitingListForm');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
       
        const formData = {
            fullName: form.fullName.value,
            email: form.email.value,
            farmName: form.farmName.value,
            location: form.location.value,
            phoneNumber: form.phoneNumber.value,
            productCategory: form.productCategory.value,
            typesOfLivestock: form.typesOfLivestock.value.split(',').map(item => item.trim())
        };
  
        try {
            const response = await fetch('https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/waiting-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
  
            if (response.ok) {
              Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'You have successfully joined the waitlist'
                });
              //   swal.fire("Thank you for Joiing the Waitlist");
                form.reset();
                setTimeout(function(){
                  window.location.href= '/index_submitted.html'
                },2000)
            } else {
                alert('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    });
  });