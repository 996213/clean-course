
type Size = '' | 'S'| 'M' |'L';
class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''

    ){}

    toString(){
        if(this.name.length <= 0 ) throw Error('name is Empty');
        if(this.price <= 0 ) throw Error('price is Zero');
        if(this.size.length <= 0 ) throw Error('size is Empty');

        return `${this.name} (${this.price}), (${this.size})`;
    }
}

(()=>{

    const bluePants = new Product('Blue large pants',10, 'M');
    console.log(bluePants.toString());
})();