import { AddOnsProps } from '@/types/add-ons';
import { NextResponse } from 'next/server';

export async function GET() {
  
  const addOns:AddOnsProps[] = [
    {
        id: 1,
        title:'Official Race T-shirt',
        quality: 'High-quality technical fabric',
        price: 25,
        imgUrl:'https://res.cloudinary.com/duwr4xret/image/upload/v1749136690/Render-incoming-5_oc7jev.png',
        type:'tshirt',
        
    },
    {
        id: 2,
        title:'Running Cap',
        quality: 'Lightweight and breathable',
        price: 20,
        imgUrl:'https://res.cloudinary.com/duwr4xret/image/upload/v1749136818/running_cap_6_qcqpzo.png',
        type:'cap',

    },
    {
        id: 3,
        title:'Water Bottle',
        quality: 'BPA-free, 24oz capacity',
        price: 15,
        imgUrl:'https://res.cloudinary.com/duwr4xret/image/upload/v1749136880/SoftFlask_Speed_500ml_Back_HP25_WebRes_zu5cqs.webp',
        type:'waterBottle',

    }
  ]
    return NextResponse.json(addOns);
}