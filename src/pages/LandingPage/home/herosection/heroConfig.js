import Image0 from "../../../../assets/static/iphone.png"
import Image1 from "../../../../assets/static/gaming.png"
import Image2 from "../../../../assets/static/macbook.png"
import Image3 from "../../../../assets/static/vr.png"
import { BsApple } from "react-icons/bs";
import { BsPlaystation } from "react-icons/bs";
import { PiVirtualRealityFill } from "react-icons/pi";

export const HeroConfig = [
    {
        id:1,
        img: Image0,
        icon: <BsApple size={45}/>,
        subtitle: "Iphone 14 series",
        title: "Up to 10% off Voucher",
    },
    {
        id:2,
        img: Image1,
        icon: <BsPlaystation size={45}/>,
        subtitle: "Playstation series",
        title: "Gaming",
    },
    {
        id:3,
        img: Image2,
        icon: <BsApple size={45}/>,
        subtitle: "Macbook pro series",
        title: "Laptops",
    },
    {
        id:4,
        img: Image3,
        icon: <PiVirtualRealityFill size={45}/>,
        subtitle: "wireless",
        title: "Virtual",
    }
]
export const HeroConfig1 = [
    {
        id: 1,
        name: "Women's Fashion",
        path: "/#women-fashion",
        dropdown: [
            {
            id: 1,
            name: "Dressy",
            path: "/#dressy"
            },
            {
            id: 2,
            name: "Business Formal",
            path: "/#"
            },
            {
            id: 3,
            name: "Semi Formal",
            path: "/#semi-formal"
            },
            {
            id: 4,
            name: "Casual",
            path: "/#casual"
            }
        ]
    },
    {
        id: 2,
        name: "Men's Fashion",
        path: "/#men-fashion",
        dropdown: [
            {
            id: 1,
            name: "Dressy",
            path: "/#dressy"
            },
            {
            id: 2,
            name: "Business Formal",
            path: "/#"
            },
            {
            id: 3,
            name: "Semi Formal",
            path: "/#semi-formal"
            },
            {
            id: 4,
            name: "Casual",
            path: "/#casual"
            }
        ]
    },
    {
        id: 3,
        name: "Electronics",
        path: "/#electronics",
    },
    {
        id: 4,
        name: "Home & lIfestyle",
        path: "/#lifestyle",
    },
    {
        id: 5,
        name: "Medicine",
        path: "/#medicine",
    },
    {
        id: 6,
        name: "Sports & Outdoor",
        path: "/#sport",
    },
    {
        id: 7,
        name: "Baby's & Toys",
        path: "/#baby",
    },
    {
        id: 8,
        name: "Groceries & Pets",
        path: "/#groceries",
    },
    {
        id: 9,
        name: "Health & Beauty",
        path: "/#health",
    },
];
