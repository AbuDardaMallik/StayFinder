const sampleListings = [
  {
    title: "Cozy Beach House",
    description: "Relax near the beach with beautiful sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "StayFinder/img1",
    },
    price: 1500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment",
    description: "Stylish apartment in city center.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "StayFinder/img2",
    },
    price: 1200,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Hill View Resort",
    description: "Enjoy peaceful hills and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "StayFinder/img3",
    },
    price: 1800,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Luxury Villa",
    description: "Private villa with swimming pool.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "StayFinder/img4",
    },
    price: 4000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Mountain Cabin",
    description: "Perfect retreat in the mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      filename: "StayFinder/img5",
    },
    price: 900,
    location: "Manali",
    country: "India",
  },

  // 🔥 Remaining 25 (short format for speed)

  {
    title: "Lake House",
    description: "Beautiful lake view stay.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "StayFinder/img6",
    },
    price: 1300,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "City Hotel",
    description: "Comfortable stay in city.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      filename: "StayFinder/img7",
    },
    price: 1000,
    location: "Delhi",
    country: "India",
  },

  {
    title: "Forest Stay",
    description: "Stay in nature.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      filename: "StayFinder/img9",
    },
    price: 800,
    location: "Sundarbans",
    country: "India",
  },
  {
    title: "Desert Camp",
    description: "Experience desert life.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "StayFinder/img10",
    },
    price: 1100,
    location: "Rajasthan",
    country: "India",
  },

  {
    title: "Luxury Penthouse",
    description: "Top floor luxury apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "StayFinder/img11",
    },
    price: 5000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Village Cottage",
    description: "Peaceful countryside stay.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "StayFinder/img12",
    },
    price: 700,
    location: "Punjab",
    country: "India",
  },
  {
    title: "Snow Cabin",
    description: "Snow covered mountain stay.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "StayFinder/img13",
    },
    price: 1500,
    location: "Kashmir",
    country: "India",
  },
  {
    title: "Island Villa",
    description: "Private island experience.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "StayFinder/img14",
    },
    price: 8000,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Business Hotel",
    description: "Perfect for work trips.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      filename: "StayFinder/img15",
    },
    price: 1400,
    location: "Bangalore",
    country: "India",
  },

  {
    title: "Luxury Resort",
    description: "5 star luxury stay.",
    image: {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      filename: "StayFinder/img16",
    },
    price: 6000,
    location: "Thailand",
    country: "Thailand",
  },
  {
    title: "Backpacker Hostel",
    description: "Budget friendly stay.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "StayFinder/img17",
    },
    price: 500,
    location: "Nepal",
    country: "Nepal",
  },
  {
    title: "Hill Cottage",
    description: "Nature and peace.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "StayFinder/img18",
    },
    price: 900,
    location: "Shillong",
    country: "India",
  },

  {
    title: "Luxury Suite",
    description: "Premium experience.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "StayFinder/img21",
    },
    price: 4500,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Eco Resort",
    description: "Eco friendly stay.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      filename: "StayFinder/img22",
    },
    price: 1200,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Beach Hut",
    description: "Simple beach life.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "StayFinder/img23",
    },
    price: 700,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Modern Studio",
    description: "Compact modern living.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "StayFinder/img24",
    },
    price: 1300,
    location: "Pune",
    country: "India",
  },
  {
    title: "Royal Palace Stay",
    description: "Live like king.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "StayFinder/img25",
    },
    price: 7000,
    location: "Jaipur",
    country: "India",
  },

  {
    title: "Nature Camp",
    description: "Camping experience.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      filename: "StayFinder/img26",
    },
    price: 800,
    location: "Himachal",
    country: "India",
  },
  {
    title: "Luxury Apartment",
    description: "Premium city life.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "StayFinder/img27",
    },
    price: 3000,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Lake Resort",
    description: "Calm lake stay.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "StayFinder/img28",
    },
    price: 2000,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Urban Hotel",
    description: "City lifestyle.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      filename: "StayFinder/img29",
    },
    price: 1800,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Private Villa",
    description: "Complete privacy.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "StayFinder/img30",
    },
    price: 5000,
    location: "Goa",
    country: "India",
  },
];

module.exports = { data: sampleListings };
