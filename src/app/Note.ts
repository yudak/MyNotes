export class Note{
    text:string;
    createDate:number;

    constructor(text){
        this.text = text;
        this.createDate = Date.now();

    }

    Text(){
        return this.text;
    }


    Create(){
        var date = new Date(this.createDate)
        return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }

    Update(NewText){
        this.text = NewText;
    }

    SetText(text){
        this.text = text;
    }

}