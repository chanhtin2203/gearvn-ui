import { MdComputer, MdOutlineLaptopChromebook } from 'react-icons/md';
import { BsKeyboard, BsLaptop } from 'react-icons/bs';
import { AiOutlineApple, AiOutlinePrinter } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { CgScreen, CgSmartphoneRam } from 'react-icons/cg';
import { BsCpu } from 'react-icons/bs';
import { RiHeadphoneLine, RiSuitcase2Line } from 'react-icons/ri';
import { BiMouse } from 'react-icons/bi';
import { GiOfficeChair } from 'react-icons/gi';
import { TbNetwork } from 'react-icons/tb';
const categories = [
    {
        id: 1,
        icon: <MdOutlineLaptopChromebook width="25px" height="25px" />,
        title: 'Laptop Gaming',
        path: '/laptop-gaming',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        icon: <BsLaptop width="25px" height="25px" />,
        title: 'Laptop văn phòng',
        path: '/laptop-van-phong',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        icon: <AiOutlineApple width="25px" height="25px" />,
        title: 'Apple',
        path: '/apple',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        icon: <HiOutlineDesktopComputer width="25px" height="25px" />,
        title: 'PC Gaming',
        path: '/pc-gaming',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        icon: <MdComputer width="25px" height="25px" />,
        title: 'PC – Máy bộ GEARVN',
        path: '/pc-maybo',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        icon: <CgScreen width="25px" height="25px" />,
        title: 'Màn hình',
        path: '/man-hinh',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        icon: <BsCpu width="25px" height="25px" />,
        title: 'Main – CPU – VGA',
        path: '/main-cpu',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        icon: <RiSuitcase2Line width="25px" height="25px" />,
        title: 'Case – Tản – Nguồn',
        path: '/menu-case-tan-nguon',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        icon: <CgSmartphoneRam width="25px" height="25px" />,
        title: 'SSD – HDD – RAM',
        path: '/menu-ram-ssd-hdd',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        icon: <BsKeyboard width="25px" height="25px" />,
        title: 'Bàn phím',
        path: '/ban-phim',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 11,
        icon: <BiMouse width="25px" height="25px" />,
        title: 'Chuột',
        path: '/chuot',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 12,
        icon: <RiHeadphoneLine width="25px" height="25px" />,
        title: 'Tai Nghe – Loa',
        path: '/tainghe-loa',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 13,
        icon: <AiOutlinePrinter width="25px" height="25px" />,
        title: 'Máy in – Phần mềm',
        path: '/may-in-phan-mem',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 14,
        icon: <GiOfficeChair width="25px" height="25px" />,
        title: 'Ghế & Bàn',
        path: '/ghe-ban',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
    {
        id: 15,
        icon: <TbNetwork width="25px" height="25px" />,
        title: 'Thiết bị mạng',
        path: '/thiet-bi-mang',
        border: 'border-bottom-none',
        image: 'https://gstatic.gearvn.com/2021/11/Menu-Laptop-Gaming.jpg',
        sub_menu_item: [
            {
                id: 1,
                title: 'Thương hiệu',

                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ACER / PREDATOR',
                        path: '/acer-predator',
                    },
                    {
                        id: 2,
                        name_product: 'ASUS / ROG',
                        path: '/asus-rog',
                    },
                    {
                        id: 3,
                        name_product: 'MSI',
                        path: '/msi',
                    },
                    {
                        id: 4,
                        name_product: 'LENOVO',
                        path: '/lenovo',
                    },
                    {
                        id: 5,
                        name_product: 'DELL',
                        path: '/dell',
                    },
                    {
                        id: 6,
                        name_product: 'GIGABYTE / AORUS',
                        path: '/gigabyte-aorus',
                    },
                    {
                        id: 7,
                        name_product: 'HP',
                        path: '/hp',
                    },
                ],
            },
            {
                id: 2,
                title: 'Giá bán',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Dưới 20 triệu',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Từ 20 đến 25 triệu',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Từ 25 đến 30',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Trên 30',
                        path: '/lenovo',
                    },
                ],
            },
            {
                id: 3,
                title: 'Laptop ACER Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Nitro Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Aspire Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Predator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 4,
                title: 'Laptop ASUS Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'ROG Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'TUF Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Zephyrus Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'ROG StrixG Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'ROG Flow Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 5,
                title: 'Laptop MSI Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GF Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'GL Series',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'GS Series',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Bravo Series',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Creator Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 6,
                title: 'Laptop Lenovo Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Legion Gaming',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'Ideapad Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 7,
                title: 'Laptop Dell Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Laptop Dell Gaming',
                        path: '/',
                    },
                ],
            },
            {
                id: 8,
                title: 'Laptop HP Gaming',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Victus Series',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'OMEN Series',
                        path: '/',
                    },
                ],
            },
            {
                id: 9,
                title: 'Card đồ họa',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'GTX 1650',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'RTX 3050',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'RTX 3060',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'RTX 3070',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'AMD Radeon RX',
                        path: '/',
                    },
                ],
            },
            {
                id: 10,
                title: 'Linh kiện & Phụ kiện laptop',
                sub_menu: [
                    {
                        id: 1,
                        name_product: 'Ram laptop',
                        path: '/',
                    },
                    {
                        id: 2,
                        name_product: 'SSD laptop',
                        path: '/',
                    },
                    {
                        id: 3,
                        name_product: 'Đế tản nhiệt laptop',
                        path: '/',
                    },
                    {
                        id: 4,
                        name_product: 'Balo & túi chống sốc laptop',
                        path: '/',
                    },
                    {
                        id: 5,
                        name_product: 'Ổ cứng di động',
                        path: '/',
                    },
                ],
            },
        ],
    },
];

export default categories;
