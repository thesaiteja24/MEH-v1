const sampleEngines = [
  {
    title: "BS2",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475226/public/Engines-pics/AshokLeyland/mdxdjupvwuw6xpiicryn.jpg",
    category: "ASHOK LEYLAND",
    price: 100,
    available: 32,
    model: 2002,
    from: "Malibu, United States",
  },
  {
    title: "BS3",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475225/public/Engines-pics/AshokLeyland/lbfhhknckya4xhav0nml.jpg",
    category: "ASHOK LEYLAND",
    price: 50,
    available: 22,
    model: 2002,
    from: "Delhi",
  },
  {
    title: "BS4",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475225/public/Engines-pics/AshokLeyland/as9dmeiw2ernaupmubf4.jpg",
    category: "ASHOK LEYLAND",
    price: 102,
    available: 49,
    model: 2007,
    from: "London, UK",
  },
  {
    title: "BS6",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475227/public/Engines-pics/AshokLeyland/mbcxrmt5qty3zgv6rbeu.webp",
    category: "ASHOK LEYLAND",
    price: 100,
    available: 26,
    model: 2008,
    from: "Tokyo, Japan",
  },
  {
    title: "Bus",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475227/public/Engines-pics/AshokLeyland/vbswavl2fsjipmds6hyf.webp",
    category: "ASHOK LEYLAND",
    price: 97,
    available: 11,
    model: 2003,
    from: "London, UK",
  },
  {
    title: "Lorry",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475226/public/Engines-pics/AshokLeyland/gfrzleeqhatbx6b2kdr8.webp",
    category: "ASHOK LEYLAND",
    price: 92,
    available: 43,
    model: 2009,
    from: "London, UK",
  },
  // Tata
  
  {
    title: "402",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1739161722/public/Engines-pics/Tata/rkaqgcuxvhdakuxo8hwz.jpg",
    category: "TATA",
    price: 158,
    available: 47,
    model: 2016,
    from: "Malibu, United States",
  },
  {
    title: "407",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475222/public/Engines-pics/Tata/rkkozpf0ph5zriny76hr.jpg",
    category: "TATA",
    price: 158,
    available: 47,
    model: 2016,
    from: "Malibu, United States",
  },
  {
    title: "1613",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475223/public/Engines-pics/Tata/fsoprbt2ekmutgcvtobl.webp",
    category: "TATA",
    price: 158,
    available: 47,
    model: 2016,
    from: "Malibu, United States",
 
},
  {
    title: "1512",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475222/public/Engines-pics/Tata/cb5pdt1wvad8irkqh3dg.jpg",
    category: "TATA",
    price: 158,
    available: 47,
    model: 2016,
    from: "Malibu, United States",
  },
  {
    title: "1815",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475223/public/Engines-pics/Tata/umm4pxbqqj0jd0dklwqx.webp",
    category: "TATA",
    price: 132,
    available: 45,
    model: 2014,
    from: "Paris, France",
  },
  {
    title: "BS2",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475222/public/Engines-pics/Tata/smanbxzyow7pe3ygyt5j.jpg",
    category: "TATA",
    price: 4,
    available: 190,
    model: 2003,
    from: "Rio",
  },
  {
    title: "BS3",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475222/public/Engines-pics/Tata/tnpdyhfgnxangceia5pb.jpg",
    category: "TATA",
    price: 74,
    available: 109,
    model: 2007,
    from: "America",
  },
  {
    title: "BS4",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475223/public/Engines-pics/Tata/ou2acn5hiuzkusorywwy.jpg",
    category: "TATA",
    price: 176,
    available: 29,
    model: 2005,
    from: "Tokyo",
  },
  {
    title: "BS5",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475224/public/Engines-pics/Tata/bwvt9mxvmhdj4xtk7jc5.webp",
    category: "TATA",
    price: 174,
    available: 19,
    model: 2005,
    from: "Tokyo, Japan",
  },
  {
    title: "Cummins",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475224/public/Engines-pics/Tata/wzkxfjxndz5seoux5rwj.webp",
    category: "TATA",
    price: 12,
    available: 145,
    model: 2021,
    from: "Paris, France",
  },
  {
    title: "Prima",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475223/public/Engines-pics/Tata/fsoprbt2ekmutgcvtobl.webp",
    category: "TATA",
    price: 156,
    available: 43,
    model: 2022,
    from: "London, UK",
  },
  {
    title: "Tipper",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475223/public/Engines-pics/Tata/fsoprbt2ekmutgcvtobl.webp",
    category: "TATA",
    price: 100,
    available: 25,
    model: 2003,
    from: "Malibu, United States",
  },
  // Bharat Benz
  {
    title: "BS3",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475227/public/Engines-pics/BharatBenz/i5y0034ugjwadcrokvmo.jpg",
    category: "BHARAT BENZ",
    price: 47,
    available: 10,
    model: 2014,
    from: "Delhi, India",
  },
  {
    title: "BS4",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475227/public/Engines-pics/BharatBenz/k1xcdglskhmgskvz2lzn.jpg",
    category: "BHARAT BENZ",
    price: 31,
    available: 19,
    model: 2003,
    from: "Delhi, India",
  },
  {
    title: "Tipper",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475228/public/Engines-pics/BharatBenz/ix3ws5wyw9s3d3bnjntx.webp",
    category: "BHARAT BENZ",
    price: 47,
    available: 18,
    model: 2000,
    from: "Delhi, India",
  },
  {
    title: "Truck",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475228/public/Engines-pics/BharatBenz/q7g5owfpprsfqpkdvmsz.webp",
    category: "BHARAT BENZ",
    price: 56,
    available: 42,
    model: 2005,
    from: "Malibu, United States",
  },
  // Eicher
  {
    title: "BS3",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475224/public/Engines-pics/Eicher/dtj2owedqh1zlvrnpwnm.jpg",
    category: "EICHER",
    price: 98,
    available: 16,
    model: 2002,
    from: "Delhi, India",
  },
  {
    title: "BS4",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475224/public/Engines-pics/Eicher/lv28c63qlrt994jzm9iv.jpg",
    category: "EICHER",
    price: 46,
    available: 24,
    model: 2004,
    from: "London, UK",
  },
  {
    title: "Eicher Pro",
    image_url: "https://res.cloudinary.com/dv8h7yjv2/image/upload/v1738475225/public/Engines-pics/Eicher/ooudtu16zjerpa4a2xdy.webp",
    category: "EICHER",
    price: 141,
    available: 38,
    model: 2001,
    from: "Malibu, United States",
  },
];

module.exports = { sampleEngines };
