BEGIN; 

DROP TABLE IF EXISTS products CASCADE; 

CREATE TABLE products(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" VARCHAR(200) NOT NULL

);


INSERT INTO products (name, price, description, image, category) VALUES 
('Luffy Haki', 102, ' Sneakers Custom Wano Arc One Piece ShoesSneakers Custom Wano Arc One Piece ShoesSneakers Custom Wano Arc One Piece ShoesSneakers Custom Wano Arc One Piece Shoes','https://i0.wp.com/loketshirt.com/wp-content/uploads/2021/12/Luffy-Haki-Sneakers-Custom-Wano-Arc-One-Piece-Shoes-GearAnime.jpg', 'men'),
('ACTIVNEW Sneakers', 309 , ' This summer, Active shoes made of high quality leather. It visually accentuates the craftsmanship and the soft leather braid, giving you an elegant look','http://cdn.shopify.com/s/files/1/0585/4317/7915/products/efb52ee2ac6b4fce95f84a8eeffe70de.jpg', 'men'),
('Romba Sport Shoes', 200 , ' The shoe is padded with soft and comfortable footbed Ergonomic design and modern look Cochi lace-up US shoe is soft and light for running and relieving muscle strain','https://cdn.animecools.com/data/2106/10/055720/GA2021682700_uchiha-itachi-yeezy-shoes-jutsu-naruto-custom-anime-shoes-tt10-1_1500x1500.jpg', 'men'),
('Rimini 2450 ', 85 , 'Explore the super chic footwear collection by Rimini ','https://danganronpa.store/wp-content/uploads/2021/06/monokuma-sneakers-danganronpa-custom-anime-shoes-jd-664-400x400.jpg', 'men'),
('Pink high top',160,'Japanese meow girl pink high top lolita shoes sweet round hear lace-up women shoes anime cosplay student canvas shoes 2020 new','https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH25765fe8e88940acae20836b9662e3adB.jpg','women'),
('Canvas Shoes',270,'Anime Canvas Shoes Deku Izuku Todoroki Cosplay High-Top Sneakers Made of canvas upper','https://m.media-amazon.com/images/I/61KhViF+Z7L._AC_SL1200_.jpg','women'),
('Stitch Shoes',67,'Stitch Shoes Custom Anime Sneakers Hand Painted Shoes Men Women Fashion Sneakers','https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTF0Z1g1a25lMlMuX1NMMTUwMF8uanBn.jpg','women'),
('Sakura Shoe',145,'2020 Anime Kinomoto Sakura Cosplay Canvas Shoes Platforms w/Wings Lace Up High top Casual Shoes for Women Girls Student Flats','http://cdn.shopify.com/s/files/1/0568/3940/5775/products/product-image-1763428446_1200x1200.jpg','women');

COMMIT;