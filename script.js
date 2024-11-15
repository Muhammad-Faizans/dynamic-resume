document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const profilePic = document.getElementById('profilePic').files[0];

    // Create a URL for the uploaded image
    const imageUrl = profilePic ? URL.createObjectURL(profilePic) : '';

    const resumeContent = `
        <h3>${name}</h3>
        ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture" style="width:100px;height:auto;border-radius:50%;"/>` : ''}
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;
});