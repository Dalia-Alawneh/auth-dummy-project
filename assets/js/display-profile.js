const displayProfile = (user) => {
    const profileImage = document.querySelector('.profile-img img');
    console.log(profileImage);
    profileImage.src = user.image;
    const userInfo = document.querySelector('.user-info');
    userInfo.innerHTML = `
        <h1 class="username">${user.firstName} ${user.lastName}</h1>

        <p class="margin-top--2"><strong>City:</strong> ${user.address.city}</p>
        <p class="margin-top--1"><strong>Email:</strong> ${user.email}</p>
        <p class="margin-top--1"><strong>Phone:</strong>  ${user.phone}</p>
        <div class="row margin-top--2 border--rounded">
            <div class="width-50">
                <h5 class="card-title">Personal Information</h5>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Age:</strong> ${user.age}</li>
                    <li class="list-group-item"><strong>Gender:</strong> ${user.gender}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
                    <li class="list-group-item"><strong>Phone:</strong> ${user.phone}</li>
                    <li class="list-group-item"><strong>Username:</strong> ${user.username}</li>
                    <li class="list-group-item"><strong>Birth Date:</strong> ${user.birthDate}</li>
                    <li class="list-group-item"><strong>Blood Group:</strong> ${user.bloodGroup}</li>
                    <li class="list-group-item"><strong>Height:</strong> ${user.height} cm</li>
                    <li class="list-group-item"><strong>Weight:</strong> ${user.weight} kg</li>
                    <li class="list-group-item"><strong>Eye Color:</strong> ${user.eyeColor}</li>
                    <li class="list-group-item"><strong>Hair Color:</strong> ${user.hair.color}</li>
                    <li class="list-group-item"><strong>Hair Type:</strong> ${user.hair.type}</li>
                </ul>
            </div>
        <div class="width-50">
            <h5 class="card-title">Contact Information</h5>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Address:</strong> ${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}</li>
                            <li class="list-group-item"><strong>Coordinates:</strong> ${user.address.coordinates.lat}° N, ${user.address.coordinates.lng}° E</li>
                            <li class="list-group-item"><strong>Postal Code:</strong> ${user.address.postalCode}</li>
                            <li class="list-group-item"><strong>Mac Address:</strong> ${user.macAddress}</li>
                            <li class="list-group-item"><strong>University:</strong> ${user.university}</li>
                            <li class="list-group-item"><strong>Bank Card Expire:</strong> ${user.bank.cardExpire}</li>
                            <li class="list-group-item"><strong>Bank Card Number:</strong> ${user.bank.cardNumber}</li>
                            <li class="list-group-item"><strong>Bank Card Type:</strong> ${user.bank.cardType}</li>
                            <li class="list-group-item"><strong>Currency:</strong> ${user.bank.currency}</li>
                            <li class="list-group-item"><strong>IBAN:</strong> ${user.bank.iban}</li>
             </ul>
        </div>
            <br>
            <div class="width-50">
            <h5 class="card-title">Employment Information</h5>
            <ul class="list-group">
                <li class="list-group-item"><strong>Company:</strong> ${user.company.name}</li>
                <li class="list-group-item"><strong>Department:</strong> ${user.company.department}</li>
                <li class="list-group-item"><strong>Title:</strong> ${user.company.title}</li>
                <li class="list-group-item"><strong>Company Address:</strong> ${user.company.address.address}, ${user.company.address.city}, ${user.company.address.state} ${user.company.address.postalCode}</li>
                <li class="list-group-item"><strong>Company Coordinates:</strong> ${user.company.address.coordinates.lat}° N, ${user.company.address.coordinates.lng}° E</li>
                <li class="list-group-item"><strong>EIN:</strong> ${user.ein}</li>
            </ul>
            </div>
        </div>
    </div>
    `;

}
async function generateProfile(){
    const {id} = decodeToken()
    const user =await getData(`https://dummyjson.com/users/${id}`)
    displayProfile(user)

}
generateProfile()