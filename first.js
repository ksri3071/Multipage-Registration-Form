    // personal details

    const First_name = document.getElementById('fname');
    const Last_name = document.getElementById('lname');
    const DOB = document.getElementById('dob');
    const email = document.getElementById('email');
    const Father_fname = document.getElementById('father_fname');
    const Father_lname = document.getElementById('father_lname');
    const mother_fname = document.getElementById('mother_fname');
    const mother_lname = document.getElementById('mother_lname');
    const address = document.getElementById('address');
    const gender = document.getElementById('gender');
    const nationality = document.getElementById('nation');
    const country = document.getElementById('country');
    const mobile_no = document.getElementById('Mno');
    
    const form = document.getElementById('form');

    const error = document.getElementById('seterror');

    var goodColor = "#0C6";
    var badColor = "#FF9B37";

    form.addEventListener('submit', (e) => {
        let msg = [];

        if (First_name.value === '' || First_name.value == null) {
            msg.push('First Name is required');
        }
        if (Last_name.value === '' || Last_name.value == null) {
            msg.push('Last Name is required');
        }
        if(DOB.value === '' || DOB.value == null) {
            msg.push('Date of Birth is required');
        }
        if(email.value === '' || email.value == null) {
            msg.push('Email is required');
        }
        if (Father_fname.value === '' || Father_fname.value == null) {
            msg.push('First Name is required');
        }
        if (Father_lname.value === '' || Father_lname.value == null) {
            msg.push('Last Name is required');
        }
        if (mother_fname.value === '' || mother_fname.value == null) {
            msg.push('First Name is required');
        }
        if (mother_lname.value === '' || mother_lname.value == null) {
            msg.push('Last Name is required');
        }
        if(mobile_no.value.length < 10 || mobile_no.value.length > 10) {

            msg.push('Mobile number is not valid');
        }
        if(nationality.value.length ==='' || nationality.value.length == null) {
            
            msg.push('Nationality is required');
        }
        if(country.value.length ==='') {
            
            msg.push('country is required');
        }

        localStorage.setItem('name', JSON.stringify(First_name.value));

localStorage.setItem('First_name', JSON.stringify(Last_name.value));
localStorage.setItem('dob', JSON.stringify(DOB.value));
localStorage.setItem('email', JSON.stringify(email.value));

localStorage.setItem('father', JSON.stringify(Father_fname.value));

localStorage.setItem('mother', JSON.stringify(mother_fname.value));

localStorage.setItem('gender', JSON.stringify(gender.value)); 
localStorage.setItem('nation', JSON.stringify(nationality.value)); 
localStorage.setItem('country', JSON.stringify(country.value));  
localStorage.setItem('mobile', JSON.stringify(mobile_no.value)); 
     

        if(msg.length > 0) {
            e.preventDefault()
            seterror.innerText = msg.join(', ')
}
    })

