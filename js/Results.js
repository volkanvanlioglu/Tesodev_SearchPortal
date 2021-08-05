const names_init = document.getElementsByClassName("names");
const surnames_init = document.getElementsByClassName("surnames");
const sexes_init = document.getElementsByClassName("sexes");
const ages_init = document.getElementsByClassName("ages");
const nationalities_init = document.getElementsByClassName("nationalities");

function SortByName() {
    var data = [];
    var names = [];
    var surnames = [];
    var sexes = [];
    var ages = [];
    var nationalities = [];

    for (var i = 0; i < names_init.length; i++) {
        data.push({
            "Age": ages_init[i].innerText,
            "Name": names_init[i].innerText,
            "Nationality": nationalities_init[i].innerText,
            "Sex": sexes_init[i].innerText,
            "Surname": surnames_init[i].innerText
        });
    }

    data.sort((d1, d2) => {
        if (d1.Name < d2.Name) { return -1; }
        if (d1.Name > d2.Name) { return 1; }
        return 0;
    });

    data.forEach(d => {
        names.push(d.Name);
        surnames.push(d.Surname);
        sexes.push(d.Sex);
        ages.push(d.Age);
        nationalities.push(d.Nationality);
    });

    for (var i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerText = names[i];
    }
    for (var i = 0; i < document.getElementsByClassName("surnames").length; i++) {
        document.getElementsByClassName("surnames")[i].innerText = surnames[i];
    }
    for (var i = 0; i < document.getElementsByClassName("sexes").length; i++) {
        document.getElementsByClassName("sexes")[i].innerText = sexes[i];
    }
    for (var i = 0; i < document.getElementsByClassName("ages").length; i++) {
        document.getElementsByClassName("ages")[i].innerText = ages[i];
    }
    for (var i = 0; i < document.getElementsByClassName("nationalities").length; i++) {
        document.getElementsByClassName("nationalities")[i].innerText = nationalities[i];
    }
}

function SortBySurname() {
    var data = [];
    var names = [];
    var surnames = [];
    var sexes = [];
    var ages = [];
    var nationalities = [];

    for (var i = 0; i < surnames_init.length; i++) {
        data.push({
            "Age": ages_init[i].innerText,
            "Name": names_init[i].innerText,
            "Nationality": nationalities_init[i].innerText,
            "Sex": sexes_init[i].innerText,
            "Surname": surnames_init[i].innerText
        });
    }

    data.sort((d1, d2) => {
        if (d1.Surname < d2.Surname) { return -1; }
        if (d1.Surname > d2.Surname) { return 1; }
        return 0;
    });

    data.forEach(d => {
        names.push(d.Name);
        surnames.push(d.Surname);
        sexes.push(d.Sex);
        ages.push(d.Age);
        nationalities.push(d.Nationality);
    });

    for (var i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerText = names[i];
    }
    for (var i = 0; i < document.getElementsByClassName("surnames").length; i++) {
        document.getElementsByClassName("surnames")[i].innerText = surnames[i];
    }
    for (var i = 0; i < document.getElementsByClassName("sexes").length; i++) {
        document.getElementsByClassName("sexes")[i].innerText = sexes[i];
    }
    for (var i = 0; i < document.getElementsByClassName("ages").length; i++) {
        document.getElementsByClassName("ages")[i].innerText = ages[i];
    }
    for (var i = 0; i < document.getElementsByClassName("nationalities").length; i++) {
        document.getElementsByClassName("nationalities")[i].innerText = nationalities[i];
    }
}

function SortBySex() {
    var data = [];
    var names = [];
    var surnames = [];
    var sexes = [];
    var ages = [];
    var nationalities = [];

    for (var i = 0; i < sexes_init.length; i++) {
        data.push({
            "Age": ages_init[i].innerText,
            "Name": names_init[i].innerText,
            "Nationality": nationalities_init[i].innerText,
            "Sex": sexes_init[i].innerText,
            "Surname": surnames_init[i].innerText
        });
    }

    data.sort((d1, d2) => {
        if (d1.Sex < d2.Sex) { return -1; }
        if (d1.Sex > d2.Sex) { return 1; }
        return 0;
    });

    data.forEach(d => {
        names.push(d.Name);
        surnames.push(d.Surname);
        sexes.push(d.Sex);
        ages.push(d.Age);
        nationalities.push(d.Nationality);
    });

    for (var i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerText = names[i];
    }
    for (var i = 0; i < document.getElementsByClassName("surnames").length; i++) {
        document.getElementsByClassName("surnames")[i].innerText = surnames[i];
    }
    for (var i = 0; i < document.getElementsByClassName("sexes").length; i++) {
        document.getElementsByClassName("sexes")[i].innerText = sexes[i];
    }
    for (var i = 0; i < document.getElementsByClassName("ages").length; i++) {
        document.getElementsByClassName("ages")[i].innerText = ages[i];
    }
    for (var i = 0; i < document.getElementsByClassName("nationalities").length; i++) {
        document.getElementsByClassName("nationalities")[i].innerText = nationalities[i];
    }
}

function SortByAge() {
    var data = [];
    var names = [];
    var surnames = [];
    var sexes = [];
    var ages = [];
    var nationalities = [];

    for (var i = 0; i < ages_init.length; i++) {
        data.push({
            "Age": ages_init[i].innerText,
            "Name": names_init[i].innerText,
            "Nationality": nationalities_init[i].innerText,
            "Sex": sexes_init[i].innerText,
            "Surname": surnames_init[i].innerText
        });
    }

    data.sort((d1, d2) => {
        if (parseInt(d1.Age) < parseInt(d2.Age)) { return -1; }
        if (parseInt(d1.Age) > parseInt(d2.Age)) { return 1; }
        return 0;
    });

    data.forEach(d => {
        names.push(d.Name);
        surnames.push(d.Surname);
        sexes.push(d.Sex);
        ages.push(d.Age);
        nationalities.push(d.Nationality);
    });

    for (var i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerText = names[i];
    }
    for (var i = 0; i < document.getElementsByClassName("surnames").length; i++) {
        document.getElementsByClassName("surnames")[i].innerText = surnames[i];
    }
    for (var i = 0; i < document.getElementsByClassName("sexes").length; i++) {
        document.getElementsByClassName("sexes")[i].innerText = sexes[i];
    }
    for (var i = 0; i < document.getElementsByClassName("ages").length; i++) {
        document.getElementsByClassName("ages")[i].innerText = ages[i];
    }
    for (var i = 0; i < document.getElementsByClassName("nationalities").length; i++) {
        document.getElementsByClassName("nationalities")[i].innerText = nationalities[i];
    }
}

function SortByNationality() {
    var data = [];
    var names = [];
    var surnames = [];
    var sexes = [];
    var ages = [];
    var nationalities = [];

    for (var i = 0; i < nationalities_init.length; i++) {
        data.push({
            "Age": ages_init[i].innerText,
            "Name": names_init[i].innerText,
            "Nationality": nationalities_init[i].innerText,
            "Sex": sexes_init[i].innerText,
            "Surname": surnames_init[i].innerText
        });
    }

    data.sort((d1, d2) => {
        if (d1.Nationality < d2.Nationality) { return -1; }
        if (d1.Nationality > d2.Nationality) { return 1; }
        return 0;
    });

    data.forEach(d => {
        names.push(d.Name);
        surnames.push(d.Surname);
        sexes.push(d.Sex);
        ages.push(d.Age);
        nationalities.push(d.Nationality);
    });

    for (var i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerText = names[i];
    }
    for (var i = 0; i < document.getElementsByClassName("surnames").length; i++) {
        document.getElementsByClassName("surnames")[i].innerText = surnames[i];
    }
    for (var i = 0; i < document.getElementsByClassName("sexes").length; i++) {
        document.getElementsByClassName("sexes")[i].innerText = sexes[i];
    }
    for (var i = 0; i < document.getElementsByClassName("ages").length; i++) {
        document.getElementsByClassName("ages")[i].innerText = ages[i];
    }
    for (var i = 0; i < document.getElementsByClassName("nationalities").length; i++) {
        document.getElementsByClassName("nationalities")[i].innerText = nationalities[i];
    }
}
