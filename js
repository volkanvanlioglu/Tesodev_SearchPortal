const search = document.getElementById('search');
const matchlist = document.getElementById('matchlist');

const searchData = async SearchText => {
    const res = await fetch('../json/data.json');
    const data = await res.json();

    let matches = data.filter(d => {
        const regex = new RegExp(`^${SearchText}`, 'gi');
        return d.Name.match(regex) || d.Surname.match(regex);
    });

    if (SearchText.length === 0) {
        matches = [];
        matchlist.innerHTML = '';
    }
    outputHtml(matches);
}

const outputHtml = matches => {
    if (matches.length > 0 && matches.length <= 3) {
        var html = matches.map(m =>
            `<div class='card card-body mb-1'>
                <h4>${m.Name} ${m.Surname}</h4>
            </div>`
        ).join('');

        matchlist.innerHTML = html;
    }
    else if (matches.length > 3) {
        var html = `<div class='card card-body mb-1'>
                       <h4>${matches[0].Name} ${matches[0].Surname}</h4>
                   </div>
                   <div class='card card-body mb-1'>
                       <h4>${matches[1].Name} ${matches[1].Surname}</h4>
                   </div>
                   <div class='card card-body mb-1'>
                       <h4>${matches[2].Name} ${matches[2].Surname}</h4>
                   </div>
                    `;

        var Names = "";
        var Surnames = "";
        var Sexes = "";
        var Ages = "";
        var Nationalities = "";

        for (var m = 0; m < matches.length; m++) {
            if (m < matches.length - 1) {
                Names += matches[m].Name + ",";
                Surnames += matches[m].Surname + ",";
                Sexes += matches[m].Sex + ",";
                Ages += matches[m].Age + ",";
                Nationalities += matches[m].Nationality + ",";
            }
            else if (m == matches.length - 1) {
                Names += matches[m].Name;
                Surnames += matches[m].Surname;
                Sexes += matches[m].Sex;
                Ages += matches[m].Age;
                Nationalities += matches[m].Nationality;
            }
        }

        console.log(Names + " " + Surnames);

        matchlist.innerHTML = html + `<div class='card card-body mb-1'>
                <h4><a href="Results.aspx?names=${Names}&surnames=${Surnames}&sexes=${Sexes}&ages=${Ages}&nationalities=${Nationalities}&page=1">Load more...</a></h4>
            </div>`;
    }
    else {
        var html = `
            <div class='card card-body mb-1'>
                <h4>No results were found.</h4>
            </div>`;

        matchlist.innerHTML = html;
    }
}

search.addEventListener('input', () => searchData(search.value));
