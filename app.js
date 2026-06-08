const API =
"https://meownest-backend.onrender.com";

async function loadCats(){

    try{

        const response = await fetch(
            `${API}/api/cats`
        );

        const data = await response.json();

        const container =
        document.getElementById(
            "catsContainer"
        );

        container.innerHTML = "";

        data.cats.forEach(cat=>{

            container.innerHTML += `
            
            <div class="cat-card">

                <div class="cat-image"></div>

                <div class="cat-content">

                    <h3>${cat.name}</h3>

                    <p>
                        ${cat.breed}
                    </p>

                    <p>
                        📍 ${cat.city}
                    </p>

                    <button class="view-btn">
                        View Details
                    </button>

                </div>

            </div>
            
            `;

        });

    }catch(error){

        console.log(error);

    }

}

loadCats();