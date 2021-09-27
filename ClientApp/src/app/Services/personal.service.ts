export class personal{
    listP : PersonalName[] = [];
    getList(){
    //this.listP.push({id:"1111",Name: "علی",Family: "عباسی" ,City: "مشهد"});
    //this.listP.push({id:"2222",Name: "فاطمه",Family: "غلامی" ,City: "تهران"});
    //this.listP.push({id:"3333",Name: "جواد",Family: "عزتی" ,City: "قم"});
    //this.listP.push({id:"4444",Name: "رضا",Family: "محمدی" ,City: "اهواز"});

    return this.listP;
}

AddToList(id:any, Name:any, Family:any, city:any){
    //console.log('Push');
    this.listP.push({id:id, Name: Name, Family: Family, City: city});
}
}
interface PersonalName {
    id: string;
    Name: string;
    Family: string;
    City: string;
}