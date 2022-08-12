export interface CartDetails{
    id: number,
    title: string,
    price: number,
    quantity:number,
    description: string,
    category:string,
    image:string,
    rating: {
      rate: number,
      count: number
    },
    total:number
}