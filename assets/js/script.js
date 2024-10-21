//cons let var (bunlar varsa ramda yeni yer yaratmis olursan , qiymetin deyismek nedir bes?)

//var istifade etmemek lazimdir. var qlobal scopedir. her yerden elde ede bilirik cunki 


//let  qiymeti deyismeye icaze verir 
//let ve const 2sinde de eynisin yaratmaq olmaz
//const qiymet deyismeye icaze vermir 
//let dovrlerde islenir cunki const qoymaq olmaz(for (let i=0; i<10; i++))

//{} [] komplex ve ya referans tiplerdir 

const telebeler = [
    {
    ad: "Elmar",
    soyad: "Misirzada",
    education: "ADA",
    Tehsillidirmi: true,
    age: 19

},
{ad: "Elgun",
    soyad: "Tagiyev",
    education: "WU",
    Tehsillidirmi: true,
    age: 20

},
{
    ad: "Gulsen",
    soyad: "Quliyeva",
    education: "BDU",
    Tehsillidirmi: true,
    age: 21
}


]
telebeler.push ({
    ad: "Anvar",
    soyad: "Xalid",
    education: "BDU",
    Tehsillidirmi: false,
    age: 27

})

//<th scope="row">1</th>
//<td>Mark</td>
//<td>Otto</td>
//<td>@mdo</td>
//<td>@mdo</td>

const tbodyTeqi = document.querySelector("tbody")

//i++ increment 
//i = i+1 i+=1  i++ eynidi 
//++i  i-- --i nedir? 

//cut dirnagi setirden setire kecirmek olmur. ona gore de tek eyri dirnaq istifade edilir))

for(let i=0; i<telebeler.length;i++) {
    tbodyTeqi.innerHTML += `
<tr>
<td>${telebeler[i].soyad}</td>
<td>${telebeler[i].ad}</td>
<td>${telebeler[i].education}</td>
<td>${telebeler[i].Tehsillidirmi ? '<span class="text-success">tehsil alir</span>' : '<span class="text-danger">Xaric edilib</span>' }</td>
<td>${telebeler[i].age}</td>
<tr>`

}

if(telebeler[i].Tehsillidirmi) {
    console,log("tehsillidir")
}
else{
    console.log("tehsilli deyil")
}

//one line killer

telebeler[i].Tehsillidirmi ? console.log("tehsillidir") : console.log("tehsilli deyil")