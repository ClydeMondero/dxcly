-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2024 at 06:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dxcly`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `location` varchar(256) NOT NULL,
  `price` double NOT NULL DEFAULT 0,
  `type` set('Jackets','Hoodies','Vest','Pants','Shirts','Cloaks','Shorts','Footwear','Hats','Masks','Belts','Gloves','Backpacks') NOT NULL,
  `description` varchar(256) NOT NULL,
  `small_quantity` int(11) NOT NULL DEFAULT 15,
  `medium_quantity` int(11) NOT NULL DEFAULT 15,
  `large_quantity` int(11) NOT NULL DEFAULT 15,
  `xlarge_quantity` int(11) NOT NULL DEFAULT 15
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `location`, `price`, `type`, `description`, `small_quantity`, `medium_quantity`, `large_quantity`, `xlarge_quantity`) VALUES
(1, 'BLACK TECHWEAR JACKET\r\n', 'assets\\jackets\\black-techwear-jacket-techwear-351_360x.jpg', 3999, 'Jackets', 'This black techwear jacket is the perfect garment to enhance your techwear look. Fashioned from a blend of lightweight yet sturdy materials, this jacket is versatile enough for the brisk winds of fall and the biting cold of winter. It\'s tailored for the mo', 10, 12, 9, 13),
(2, 'XGXF JACKET\r\n', 'assets\\jackets\\xgxf-jacket-techwear-667_360x.jpg', 3999, 'Jackets', 'This XGXF jacket (X.G.X.F.) is a fashionable windbreaker, thanks to the many details that decorate it for a stunning rendering. In addition, this functional clothing has numerous storage pockets to allow you to take all your personal belongings with you wh', 12, 13, 11, 10),
(3, 'PUNK BLACK DENIM JACKET', 'assets\\jackets\\punk-black-denim-jacket-techwear-605_360x.jpg', 3999, 'Jackets', 'Assert your rebellious soul! This Punk black denim jacket is printed on the back with a red demon head. The ideal outfit for all dissidents against the system.\r\n\r\nThe jacket features a striking print of a red demon head on the back, symbolizing a fierce de', 14, 11, 9, 15),
(4, 'TECHWEAR RAIN JACKET', 'assets\\jackets\\techwear-rain-jacket-techwear-769_360x.jpg', 3499, 'Jackets', 'This water-resistant rain jacket is inspired by Korean Techwear. Made of light and hydrophobic technical material, this water-repellent jacket allows you to stay dry while the rain comes down.', 12, 11, 9, 14),
(5, 'TECHWEAR BOMBER JACKET', 'assets\\jackets\\techwear-bomber-jacket-techwear-676_360x.jpg', 5699, 'Jackets', 'Wear a fashion emblem in a techwear style. The bomber was originally a vest worn by U.S. Army pilots. The bomber or \"flight jacket\", is a timeless and must-have in this street and urban techwear declination. Ideal to wear with cargo pants for an assured te', 12, 14, 11, 14),
(6, 'TECHWEAR COAT', 'assets\\jackets\\techwear-coat-techwear-558_360x.jpg', 8499, 'Jackets', 'Upgrade your dark style with this must-have techwear coat. Equipped with two zip pockets and a double hood, this techwear coat adds a technical dimension to your outfit. Inspired by the trench coat revisited with an urban look, this coat guarantees you an ', 12, 13, 10, 15),
(7, 'BLACK SLEEVELESS JACKET', 'assets\\jackets\\black-sleeveless-jacket-techwear-593_360x.jpg', 4499, 'Jackets', 'Adopt an urban look with this black sleeveless jacket and its hood, ideal for mid-season. Tailored for the mid-season but versatile enough for layering in various climates, this jacket is the perfect amalgamation of form and function. The hooded wonder of ', 12, 11, 14, 13),
(8, 'CYBERPUNK FUTURISTIC JACKET', 'assets\\jackets\\cyberpunk-futuristic-jacket-techwear-637_360x.jpg', 8499, 'Jackets', 'Looking for a Cyber Goth style? This jacket printed with a transhuman logo is what you are looking for! This cyberpunk outerwear is greatly inspired by the futuristic cyberpunk universe with an original and avant-garde design. Made from thin and resistant ', 11, 13, 12, 13),
(9, 'FUTURISTIC HOODIE', 'assets\\hoodies\\futuristic-hoodie-techwear-574_540x.jpg', 6499, 'Hoodies', 'Discover a garment that pushes the boundaries of contemporary fashion. Our Futuristic Hoodie offers more than just warmth and comfort, it offers a taste of what\'s to come in the realms of techwear and futuristic design. This futuristic hoodie is available ', 12, 11, 13, 10),
(10, 'FUNCTIONAL HOODIE', 'assets\\hoodies\\functional-hoodie-techwear-171_540x.jpg', 6499, 'Hoodies', 'This black functional hoodie is designed to meet the needs of techwear enthusiasts. With its sleek black design and unique features, this hoodie is perfect for anyone looking to blend style with practicality.\r\n\r\nThe functional hoodie is made from high-qual', 12, 12, 11, 10),
(11, 'CENTIPEDE HOODIE', 'assets\\hoodies\\centipede-hoodie-techwear-832_540x.jpg', 5499, 'Hoodies', 'Meticulously designed, the Centipede Hoodie features a captivating centipede graphic that winds its way from the small of the back, along the spine, and up to the hood. This design isn\'t just unique—it\'s a daring style statement. With its blend of bold vis', 12, 11, 13, 15),
(12, 'TURTLENECK HOODIE', 'assets\\hoodies\\turtleneck-hoodie-techwear-306_360x.jpg', 6699, 'Hoodies', 'Experience both sophistication and coziness with our Turtleneck Hoodie—an evolution in laid-back apparel. This hoodie takes a beloved classic and gives it a modern update, featuring an elegant turtleneck that distinguishes it from conventional choices.', 15, 15, 15, 15),
(13, 'BLACK HOODIE STREETWEAR', 'assets\\hoodies\\black-hoodie-streetwear-techwear-345_720x.jpg', 8499, 'Hoodies', 'Made with premium, soft-touch materials, our hoodie promises to be a lasting companion on your urban adventures. The luxurious fabric ensures breathability and comfort, making it perfect for the bustling city life.\r\n\r\nThis hoodie is more than its captivati', 15, 15, 15, 15),
(14, 'CYBERPUNK HOODIE', 'assets\\hoodies\\cyberpunk-hoodie-techwear-581_360x.jpg', 6699, 'Hoodies', 'Amidst the surge of tech-driven fashion trends, the Cyberpunk Hoodie stands out as a captivating favorite among contemporary aficionados. Marrying advanced technology with cutting-edge design, this hoodie represents the next chapter in forward-thinking str', 15, 15, 15, 15),
(15, 'CYBERPUNK NINJA HOODIE', 'assets\\hoodies\\cyberpunk-ninja-hoodie-techwear-869_360x.jpg', 6699, 'Hoodies', 'The deep ebony material acts as a backdrop, highlighting a fusion of detailed patterns influenced by ancient ninja warriors and the glowing avenues of cyberpunk urban jungles. Whether wandering through the dynamic lanes of a city or venturing into the real', 15, 15, 15, 15),
(16, 'BLACK TACTICAL HOODIE', 'assets\\hoodies\\black-tactical-hoodie-techwear-390_360x.jpg', 6499, 'Hoodies', 'This hoodie embraces the ethos of techwear, integrating advanced fabric technologies with a sleek and modern aesthetic. When you think of the perfect intersection between style, comfort, and function, this hoodie should come to mind. With its distinct dark', 15, 15, 15, 15),
(17, 'SCARLXRD MILITARY VEST', 'assets\\vests\\scarlxrd-military-vest-techwear-365_360x.jpg', 4699, 'Vest', 'Complete your style with this Scarlxrd tactical vest. This tactical vest is inspired by military equipment. It is one of the accessories that make up the many techwear outfits of the singer Scarlxrd as in his video clip \"BANDS\". This techwear vest is made ', 15, 15, 15, 15),
(18, 'TACTICAL VEST TECHWEAR', 'assets\\vests\\tactical-vest-techwear-techwear-634_360x.jpg', 4699, 'Vest', 'This tactical vest techwear has an adjustable strap to perfectly fit your size. Inspired by military equipment, this vest is the perfect accessory for an urban techwear outfit. The perfect fashion bulletproof vest to add military touch to your techwear sty', 15, 15, 15, 15),
(19, 'TECHWEAR UTILITY VEST', 'assets\\vests\\techwear-utility-vest-techwear-209_360x.jpg', 4499, 'Vest', 'This sleeveless vest is equipped with six pockets of different sizes on the front. Its small integrated side bag allows you to store your larger belongings. Its zipper closure and back drawstrings allow for an ideal fit. The Velcro strip on the chest is re', 15, 15, 15, 15),
(20, 'BULLETPROOF VEST TECHWEAR', 'assets\\vests\\bulletproof-vest-techwear-techwear-781_360x.jpg', 4499, 'Vest', 'Made of high density polyester with breathable mesh combined, this black bulletproof vest is equipped with two adjustable belts to easily adjust the vest to your size. A removable equipment pouch and a shotgun shell holder are located on both sides of the ', 15, 15, 15, 15),
(21, 'BLACK TACTICAL VEST STREETWEAR', 'assets\\vests\\black-tactical-vest-streetwear-techwear-555_360x.jpg', 4699, 'Vest', 'Whether you\'re looking for a practical or stylish accessory to dress up your style, this techwear vest perfectly combines the best of both thanks to a jacket made of technical materials that feature numerous storage pockets and an avant-garde style inspire', 15, 15, 15, 15),
(22, 'RUNNING CHEST PACK', 'assets\\vests\\running-chest-pack-techwear-273_360x.jpg', 3999, 'Vest', 'A must-have to perfect your techwear style. Get forward-thinking clothes that provide both utility and comfort with our Techwear Vest collection.', 15, 15, 15, 15),
(23, 'STREETWEAR VEST', 'assets\\vests\\streetwear-vest-techwear-998_360x.jpg', 4999, 'Vest', 'This streetwear vest brings you comfortable clothing for everyday use in urban environments. The vest is equipped with two front pockets for storing all equipment and daily necessities. This vest is perfect for any early morning activities. This piece also', 15, 15, 15, 15),
(24, 'STREETWEAR TACTICAL VEST', 'assets\\vests\\streetwear-tactical-vest-techwear-119_360x.jpg', 6499, 'Vest', 'Wear it over a t-shirt, long sleeve top or hoodie for functional street style. Throw on this functional vest top with two chest pockets, and you\'ll be ready to hit the streets in urban style. The jacket has a zip closure, so you can easily put on and take ', 15, 15, 15, 15),
(25, 'TECHWEAR JOGGERS', 'assets\\pants\\techwear-joggers-techwear-624_360x.jpg', 4999, 'Pants', 'Step into the future of urban fashion while ensuring you remain agile, comfortable, and ready for any adventure. With our Tactical Joggers, we offer the perfect fusion of modern design aesthetics, utility, and unparalleled comfort.\r\nMore comfortable than p', 15, 15, 15, 15),
(26, 'TACTICAL JOGGERS', 'assets\\pants\\tactical-joggers-techwear-844_360x.jpg', 5499, 'Pants', 'These pants are the perfect mix of comfort, style and utility. Equipped with many pockets, these black jogging pants are resistant and stretchy for everyday comfort. Its futuristic design is ideal for a techwear, street goth style.\r\n\r\nThe tactical joggers ', 15, 15, 15, 15),
(27, 'TECHWEAR CARGO PANTS', 'assets\\pants\\techwear-cargo-pants-techwear-476_360x.jpg', 6499, 'Pants', 'When it comes to fashion that effortlessly merges utility with avant-garde style, techwear holds its ground. The Techwear Cargo Pants are a prime example, blending the robustness of military apparel with edgy streetwear aesthetics.', 15, 15, 15, 15),
(28, 'TECHWEAR BLACK PANTS', 'assets\\pants\\techwear-black-pants-techwear-337_360x.jpg', 6499, 'Pants', 'Very comfortable to wear and made of soft and resistant technological materials, these black pants can easily be worn with any style. All in black or contrasting with a colorful t-shirt, these famous military-inspired pants will enhance your look with grea', 15, 15, 15, 15),
(29, 'X T-SHIRT', 'assets\\shirts\\x-t-shirt-techwear-167_360x.jpg', 4499, 'Shirts', 'This trendy shirt made of cotton as a big cross on the front. The X tee-shirt, made of resistant materials, can be worn all year round with a maximum comfort. Complete your outfit with a cap and a short or cargo pants for a techwear style.', 15, 15, 15, 15),
(30, 'SCI-FI SHIRT', 'assets\\shirts\\sci-fi-shirt-techwear-892_360x.jpg', 4699, 'Shirts', 'This shirt will bring you a futuristic style with ease. Available in two colors, it will perfectly match your techwear outfit. Wear this shirt inspired by science-fiction culture with a black cargo pants and a face mask to get a Cyberpunk look.', 15, 15, 15, 15),
(31, 'URBAN T-SHIRT DESIGN', 'assets\\shirts\\urban-t-shirt-design-techwear-552_360x.jpg', 4499, 'Shirts', 'The Urban T-Shirt Design is not just a piece of clothing; it\'s an embodiment of boldness and individuality, built for the trendsetters and rule-breakers. This faded black tee creates a unique aesthetic that speaks to the heart of urban fashion.\r\n\r\nThe Urba', 15, 15, 15, 15),
(32, 'PAIN SHIRT', 'assets\\shirts\\pain-shirt-techwear-189_360x.jpg', 4699, 'Shirts', 'Complete your urban techwear wardrobe with the Light Reflective Shirt for an underground and futuristic look. Create a more finished appearance with other Techwear shirts essentials.', 15, 15, 15, 15),
(33, 'LIGHT REFLECTIVE SHIRT', 'assets\\shirts\\light-reflective-shirt-techwear-930_360x.jpg', 4699, 'Shirts', 'Unisex t-shirt with round neckline and reflective pattern. Expose the t-shirt to the light to reveal its full potential! This reflective t-shirt can be worn for sports to be visible at night or simply to have a trendy and original style. Its unique design ', 15, 15, 15, 15),
(34, 'BLACK WASHED OVERSIZED T SHIRT', 'assets\\shirts\\black-washed-oversized-t-shirt-techwear-644_360x.jpg', 4299, 'Shirts', 'Whether you\'re aiming for a laid-back urban vibe or a polished casual appearance, this shirt acts as the ideal foundation. Made from an exceptional blend of pre-washed cotton and polyester, the material is designed for ultimate softness against your skin.\r', 15, 15, 15, 15),
(35, 'CYBERPUNK CLOAK', 'assets\\cloaks\\175_360x.png', 6499, 'Cloaks', 'assets\\cloaks\\175_360x.png', 15, 15, 15, 15),
(36, 'TACTICAL CLOAK', 'assets\\cloaks\\tactical-cloak-techwear-491_360x.jpg', 8499, 'Cloaks', 'This functional rain coat is made of resistant technical materials. It can be quickly and easily put on to protect you from the weather. It is equipped with a central pocket and a high collar to protect you from the wind. The perfect outdoor rainproof cloa', 15, 15, 15, 15),
(37, 'ECHWEAR CARGO SHORTS', 'assets\\shorts\\techwear-cargo-shorts-329_360x.jpg', 4999, 'Shorts', 'Spend the summer in style with these cargo pants. Made of breathable and lightweight materials, these black shorts are a must-have to complete your techwear look even during the hot season. Constructed from premium, lightweight fabrics, these shorts provid', 15, 15, 15, 15),
(38, 'BARBED WIRE SHORTS', 'assets\\shorts\\barbed-wire-shorts-techwear-252_360x.jpg', 4899, 'Shorts', 'These shorts are printed with a barbed wire pattern that brings an original and alternative touch to your outfit. These shorts for men and women have two discreet pockets and an elastic waist for comfort in all circumstances. Made of breathable materials, ', 15, 15, 15, 15),
(39, 'ANIME STREETWEAR SHORTS', 'assets\\shorts\\anime-streetwear-shorts-techwear-903_360x.jpg', 4699, 'Shorts', 'In the world of streetwear, anime-inspired designs have always held a unique place, combining the passion of fandom with the bold statements of urban fashion.', 15, 15, 15, 15),
(40, 'ALTERNATIVE SHORTS', 'assets\\shorts\\alternative-shorts-techwear-739_360x.jpg', 4999, 'Shorts', 'Stay cool all summer long by completing your wardrobe with the comfortable and lightweight Combat shorts to spend a summer in style. For a more underground and futuristic look, discover our Techwear shorts.', 15, 15, 15, 15);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `contact_number` varchar(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `account_type` set('seller','admin','buyer','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `address`, `email`, `contact_number`, `username`, `password`, `account_type`) VALUES
(1, 'Ynnoh Mondero', 'Baliuag, Bulacan', 'ynnoh@gmail.com', '09123456788', 'ynnoh', '123', 'admin'),
(2, 'Clyde Mondero', 'Baliuag, Bulacan', 'clyde@gmail.com', '09123456789', 'clyde', '1234', 'buyer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
