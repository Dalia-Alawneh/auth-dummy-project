const displayProfile=s=>{var t=document.querySelector(".profile-img img");console.log(t),t.src=s.image,document.querySelector(".user-info").innerHTML=`
        <h1 class="username">${s.firstName} ${s.lastName}</h1>

        <p class="margin-top--2"><strong>City:</strong> ${s.address.city}</p>
        <p class="margin-top--1"><strong>Email:</strong> ${s.email}</p>
        <p class="margin-top--1"><strong>Phone:</strong>  ${s.phone}</p>
        <div class="row margin-top--2 border--rounded">
            <div class="width-50">
                <h5 class="card-title">Personal Information</h5>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Age:</strong> ${s.age}</li>
                    <li class="list-group-item"><strong>Gender:</strong> ${s.gender}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${s.email}</li>
                    <li class="list-group-item"><strong>Phone:</strong> ${s.phone}</li>
                    <li class="list-group-item"><strong>Username:</strong> ${s.username}</li>
                    <li class="list-group-item"><strong>Birth Date:</strong> ${s.birthDate}</li>
                    <li class="list-group-item"><strong>Blood Group:</strong> ${s.bloodGroup}</li>
                    <li class="list-group-item"><strong>Height:</strong> ${s.height} cm</li>
                    <li class="list-group-item"><strong>Weight:</strong> ${s.weight} kg</li>
                    <li class="list-group-item"><strong>Eye Color:</strong> ${s.eyeColor}</li>
                    <li class="list-group-item"><strong>Hair Color:</strong> ${s.hair.color}</li>
                    <li class="list-group-item"><strong>Hair Type:</strong> ${s.hair.type}</li>
                </ul>
            </div>
        <div class="width-50">
            <h5 class="card-title">Contact Information</h5>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Address:</strong> ${s.address.address}, ${s.address.city}, ${s.address.state} ${s.address.postalCode}</li>
                            <li class="list-group-item"><strong>Coordinates:</strong> ${s.address.coordinates.lat}° N, ${s.address.coordinates.lng}° E</li>
                            <li class="list-group-item"><strong>Postal Code:</strong> ${s.address.postalCode}</li>
                            <li class="list-group-item"><strong>Mac Address:</strong> ${s.macAddress}</li>
                            <li class="list-group-item"><strong>University:</strong> ${s.university}</li>
                            <li class="list-group-item"><strong>Bank Card Expire:</strong> ${s.bank.cardExpire}</li>
                            <li class="list-group-item"><strong>Bank Card Number:</strong> ${s.bank.cardNumber}</li>
                            <li class="list-group-item"><strong>Bank Card Type:</strong> ${s.bank.cardType}</li>
                            <li class="list-group-item"><strong>Currency:</strong> ${s.bank.currency}</li>
                            <li class="list-group-item"><strong>IBAN:</strong> ${s.bank.iban}</li>
             </ul>
        </div>
            <br>
            <div class="width-50">
            <h5 class="card-title">Employment Information</h5>
            <ul class="list-group">
                <li class="list-group-item"><strong>Company:</strong> ${s.company.name}</li>
                <li class="list-group-item"><strong>Department:</strong> ${s.company.department}</li>
                <li class="list-group-item"><strong>Title:</strong> ${s.company.title}</li>
                <li class="list-group-item"><strong>Company Address:</strong> ${s.company.address.address}, ${s.company.address.city}, ${s.company.address.state} ${s.company.address.postalCode}</li>
                <li class="list-group-item"><strong>Company Coordinates:</strong> ${s.company.address.coordinates.lat}° N, ${s.company.address.coordinates.lng}° E</li>
                <li class="list-group-item"><strong>EIN:</strong> ${s.ein}</li>
            </ul>
            </div>
        </div>
    </div>
    `};async function generateProfile(){var s=decodeToken()["id"],s=await getData("https://dummyjson.com/users/"+s);displayProfile(s)}generateProfile();