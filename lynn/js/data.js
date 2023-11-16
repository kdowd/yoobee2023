var userInfor = {
    startDate: "",
    endDate: "",
    dateLong: 1,
    userName: "",
    userEmail: "",
    userTel: "",
    adult: 1,

    booking: {
        ID: 0,
        name: "",
        price: 0,
        bed: ""
    },
    payment: {
        roomPriceTotal: 0,
        PaymentTotal: 0,
        serviceTotal: 0
    }
};
var bookingLog = [];

var typeArr = [{
    type: '.house',
    typeName: 'house',
    minday: 2,
    maxday: 15,
    minperson: 1,
    maxperson: 4

}, {
    type: '.hotel',
    typeName: 'hotel',
    minday: 1,
    maxday: 5,
    minperson: 1,
    maxperson: 2
}, {
    type: '.hostel',
    typeName: 'hostel',
    minday: 1,
    maxday: 10,
    minperson: 1,
    maxperson: 1

}, {
    type: '.motel',
    typeName: 'motel',
    minday: 3,
    maxday: 10,
    minperson: 2,
    maxperson: 4
}];
var allHouse = [{
        houseID: 11,
        listingImg: "./imgs/listing/1-hostel-01.png",
        detailImg: "./imgs/detail/01-hostel-01.png",
        smallImg: "./imgs/booking/1-hostel-01.png",
        name: "Choice Backpackers",
        type: "hostel",
        price: 31.00,
        add: "10 Wellesley Street East, Auckland",
        star: 2.1,
        description: "Backpacker Hostels focus on travelers with a minimal budget. As such, we are trying to keep your rent as low as possible and give discounts to guests",
        around: ["In Auckland Central Business District",
            "University of Auckland - 1 min walk",
            "Spark Arena - 12 min walk",
            "Auckland Britomart Station - 9 min walk",
            "Auckland Intl. Airport - 22 min drive"
        ],
        bed: [{
            bedID: 0,
            short: "M",
            roomName: "Multiple Studio Room",
            bedSize: "Multiple single beds"
        }, {
            bedID: 1,
            short: "S",
            roomName: "Double Studio Room",
            bedSize: "6 single beds in room"
        }]


    }, {
        houseID: 12,
        listingImg: "./imgs/listing/1-hostel-02.png",
        detailImg: "./imgs/detail/01-hostel-02.png",
        smallImg: "./imgs/booking/1-hostel-02.png",
        name: "HIT Hostel",
        type: "hostel",
        price: 32.00,
        add: "145 Karangahape Road, Auckland, 1010",
        star: 4.2,
        description: "A fresh, modern, clean and stylish 146-bed hostel backpackers accommodation which is most centrally located backpackers hostel in Auckland. Located just across from Auckland's spectacular Sky Tower.",
        around: ["University of Auckland - 6 min walk",
            "Sky Tower - 15 min walk",
            "Auckland War Memorial Museum - 23 min walk",
            "Auckland Intl. Airport (AKL) - 21 min drive",
        ],
        bed: [{
            bedID: 0,
            short: "T",
            roomName: "Triple Studio Room",
            bedSize: "3 single beds in room"
        }, {
            bedID: 1,
            short: "D",
            roomName: "Double Studio Room",
            bedSize: "2 single beds in room"
        }]
    }, {
        houseID: 13,
        listingImg: "./imgs/listing/1-hostel-03.png",
        detailImg: "./imgs/detail/01-hostel-03.png",
        smallImg: "./imgs/booking/1-hostel-03.png",
        name: "Verandahs Parkside Lodge",
        type: "hostel",
        price: 33.00,
        add: "4-6 Hopetoun Street, Auckland",
        star: 4.3,
        description: "Verandahs Parkside Lodge is a cosy, comfortable, and safe traveller's hostel offering warm and friendly budget accommodation right in the heart and soul of Auckland",
        around: ["In Auckland Central Business District",
            "University of Auckland - 1 min walk",
            "Spark Arena - 12 min walk",
            "Auckland Britomart Station - 9 min walk",
            "Auckland Intl. Airport - 22 min drive"
        ],
        bed: [{
            bedID: 0,
            short: "F",
            roomName: "5-Bed Shared Dormitory",
            bedSize: "5 singles beds"
        }, {
            bedID: 1,
            short: "S",
            roomName: "3-Bed Shared Dormitory",
            bedSize: "3 single beds"
        }, {
            bedID: 2,
            short: "D",
            roomName: "Superior Double Room",
            bedSize: "1 double Bed"
        }]


    },
    // hotel

    {
        houseID: 21,
        listingImg: "./imgs/listing/2-hotel-01.png",
        detailImg: "./imgs/detail/02-hotel-01.png",
        smallImg: "./imgs/booking/2-hotel-01.png",
        name: "Victoria Park Auckland",
        type: "hotel",
        price: 157,
        add: "10 Wellesley Street East, Auckland",
        star: 5,
        description: "Swiss-Belsuites Victoria Park Auckland is centrally located to explore the shops, cafes and restaurants of Auckland City Central offering stylish and spacious 40 luxury suites starting from 52 square.",
        around: ["In Auckland Central Business District",
            "University of Auckland - 1 min walk",
            "Spark Arena - 12 min walk",
            "Auckland Britomart Station - 9 min walk",
            "Auckland Intl. Airport - 22 min drive"
        ],
        bed: [{
            bedID: 0,
            short: "O",
            roomName: "Ocean View Room",
            bedSize: "1 king bed "
        }, {
            bedID: 1,
            short: "C",
            roomName: "Superior Queen Room ",
            bedSize: "2 queen beds"
        }]


    },
    //hotel 02
    {
        houseID: 22,
        listingImg: "./imgs/listing/2-hotel-02.png",
        detailImg: "./imgs/detail/02-hotel-02.png",
        smallImg: "./imgs/booking/2-hotel-02.png",
        name: "Park Hyatt Auckland",
        type: "hotel",
        price: 157,
        add: "10 Wellesley Street East, Auckland",
        star: 4.8,
        description: "Park Hyatt Auckland features a restaurant, outdoor swimming pool, a fitness center and bar in Auckland. With free WiFi, this 5-star hotel has a garden and a terrace",
        around: ["In Auckland Central Business District",
            "University of Auckland - 1 min walk",
            "Spark Arena - 12 min walk",
            "Auckland Britomart Station - 9 min walk",
            "Auckland Intl. Airport - 22 min drive"
        ],
        bed: [{
            bedID: 0,
            short: "B",
            roomName: "Rooftop with Balcony",
            bedSize: "1 king bed "
        }, {
            bedID: 1,
            short: "T",
            roomName: "Park Suite",
            bedSize: "2 twin beds"
        }]


    },
    //hotl-03

    {
        houseID: 23,
        listingImg: "./imgs/listing/2-hotel-03.png",
        detailImg: "./imgs/detail/02-hotel-03.png",
        smallImg: "./imgs/booking/2-hotel-03.png",
        name: "Quest Mount Eden",
        type: "hotel",
        price: 159,
        add: "34 Edwin Street, Mount Eden, Auckland",
        star: 4.0,
        description: "You're eligible for a Genius discount at Quest Mount Eden! The accommodations provides a laundry service, as well as business facilities like fax and photocopying.",
        around: ["The property is located 1.2 mi from The Civic",
            "1.3 mi from Auckland Art Gallery",
            "1.2 mi from Eden Park Stadium",
            "1.2 mi from Aotea Square",
            "1.3 mi from Aotea Center"
        ],
        bed: [{
            bedID: 0,
            short: "A",
            roomName: "One-Bedroom Apartment",
            bedSize: "1 king bed "
        }, {
            bedID: 1,
            short: "K",
            roomName: "kings Suite",
            bedSize: "1 super king bed"
        }]


    },

    //3-motel

    {
        houseID: 31,
        listingImg: "./imgs/listing/3-motel-01.png",
        detailImg: "./imgs/detail/03-motel-01.png",
        smallImg: "./imgs/booking/3-motel-01.png",
        name: "Colonial Village Motel",
        type: "motel",
        price: 91,
        add: "123 Frankton Road, Queenstown",
        star: 4.9,
        description: "The tour desk can help organize activities such as skydiving, bungee jumping and jet boating. Colonial Village Motel has a bus stop right outside.",
        around: ["Queenstown Resort College -- 1 km",
            "Fear Factory Queenstown -- 1.4 km",
            "Walter Peak -- walk 5 min",
            "Queenstown Lakes District Library -- 3 km",
        ],
        bed: [{
                bedID: 0,
                short: "L",
                roomName: "Lake And Mountain View",
                bedSize: "1 king bed "
            }, {
                bedID: 1,
                short: "T",
                roomName: "One-Bedroom Suite",
                bedSize: "2 twin beds "
            },
            {
                bedID: 2,
                short: "T",
                roomName: "Deluxe King Studio ",
                bedSize: "1 king bed "
            }
        ],


    },

    {
        houseID: 32,
        listingImg: "./imgs/listing/3-motel-02.png",
        detailImg: "./imgs/detail/03-motel-02.png",
        // ./imgs/detail/03-motel-01.png
        smallImg: "./imgs/booking/3-motel-02.png",

        name: "Blue Peaks Lodge",
        type: "motel",
        price: 92,
        add: "304 Prinzenstr Friedrichshain, Auckland",
        star: 4.3,
        description: "This is our guests' favorite part of Queenstown, according to independent reviews.Couples in particular like the location – they rated it 9.2 for a two-person trip.",
        around: ["3 minutes’ walk from Queenstown Gardens",
            "10 minutes’ drive from the popular Onsen Hot Pools",
            "Queenstown Airport is a 15-minute drive away.",
            "The Remarkables Ski Area is a 35-minute drive away",
        ],
        bed: [{
            bedID: 0,
            short: "Q",
            roomName: "Room with Kitchen",
            bedSize: "1 queen bed "
        }, {
            bedID: 1,
            short: "F",
            roomName: "Large Family Room",
            bedSize: "1 full bed "
        }]


    },
    {
        houseID: 33,
        listingImg: "./imgs/listing/3-motel-03.png",
        detailImg: "./imgs/detail/03-motel-03.png",
        smallImg: "./imgs/booking/3-motel-03.png",
        name: "Motel One Berlin Mitte",
        type: "motel",
        price: 93,
        add: "304 Prinzenstr Friedrichshain, Auckland",
        star: 4.3,
        description: "This modern hotel features stylish accommodations and free Wi-Fi in the lively Kreuzberg district of Berlin. The Motel One is just steps from Moritzplatz Subway Station.",
        around: ["The property is located 1.2 mi from The Civic",
            "1.3 mi from Auckland Art Gallery",
            "1.2 mi from Eden Park Stadium",
            "1.2 mi from Aotea Square",
            "1.3 mi from Aotea Center"
        ],
        bed: [{
            bedID: 0,
            short: "Q",
            roomName: "Room with King Size bed",
            bedSize: "1 queen bed "
        }, {
            bedID: 1,
            short: "D",
            roomName: "Double Room",
            bedSize: "1 queen bed"
        }]


    },

    //4-house

    {
        houseID: 41,
        listingImg: "./imgs/listing/4-house-01.png",
        detailImg: "./imgs/detail/04-house-01.png",
        smallImg: "./imgs/booking/04-house-01.png",
        name: "Laurel Bank House",
        type: "house",
        price: 241,
        add: "47 Maxs Way Queenstown, 9371",
        star: 4.9,
        description: "Guests at the accommodations will be able to enjoy activities in and around Queenstown, like hiking, skiing and cycling.",
        around: ["2.7 mi of Queenstown Event Center ",
            "7.5 mi of Skyline Gondola and Luge",
            "8.7 mi from AJ Hackett Bungy Jumping",
            "14 mi from Lake Wakatipu.",
        ],
        bed: [{
            bedID: 0,
            short: "Q",
            roomName: "Deluxe Queen Room",
            bedSize: "4 Queen beds "
        }]

    },

    {
        houseID: 42,
        listingImg: "./imgs/listing/4-house-02.png",
        detailImg: "./imgs/detail/04-house-02.png",
        smallImg: "./imgs/booking/04-house-02.png",
        name: "Mountain Creek Vacation",
        type: "house",
        price: 242,
        add: "47 Maxs Way Queenstown, 9371",
        star: 4.9,
        description: "A choice of accommodations options are offered traditional style 4-bedroom house with 2 bathrooms, a kitchen, dining room, lounge area and outdoor furniture.",
        around: ["5-minute walk from a supermarket and cafe",
            "The property is 1.1 mi from the town center.",
            "8.7 mi from AJ Hackett Bungy Jumping.",
            "Queenstown Airport, 5.6 mi from the property.",
        ],
        bed: [{
            bedID: 0,
            short: "Q",
            roomName: "Traditional style Room",
            bedSize: "5 queen beds "
        }]

    },
    {
        houseID: 43,
        listingImg: "./imgs/listing/4-house-03.png",
        detailImg: "./imgs/detail/04-house-03.png",
        smallImg: "./imgs/booking/04-house-03.png",
        name: "Lanah Residence ",
        type: "house",
        price: 243,
        add: "8 Homestead Place, Kelvin Heights",
        star: 4.9,
        description: "There is a tour desk and car rentals are available, while the business center has newspapers and a fax machine and photocopier.",
        around: ["3.1 mi from Queenstown Event Center.",
            "6.8 mi from Skyline Gondola.",
            "11 mi from The Remarkables.",
            "13 mi from AJ Hackett Bungy Jumping.",
        ],
        bed: [{
            bedID: 0,
            short: "Q",
            roomName: "Executive Suite",
            bedSize: "3 queen beds "
        }]

    }
];