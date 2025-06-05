export type AddOnsProps = {
        id: number,
        title:string,
        quality: string,
        price: number,
        imgUrl:string,
        type:MerchandiseType,
}

export type MerchandiseType = 'tshirt' | 'cap' | 'waterBottle';