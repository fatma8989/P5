class happynewyear {

    constructor(year, wishes) {

        this.year = year;
        this.wishes = wishes;

    }


    saycongrates() {

        console.log(' happy new ' + this.year + ' year')
        console.log('wish you ' + this.wishes.join(" ,", "")+"!")
    }
}





const date = new Date()
const currentyear = date.getFullYear();
const wishes = ['happiess', 'success', 'luck'];


const party = new happynewyear(currentyear + 1, wishes)

party.saycongrates()