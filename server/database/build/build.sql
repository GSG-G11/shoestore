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
('Luffy Haki', 102, ' Sneakers Custom Wano Arc One Piece Shoes','https://i0.wp.com/loketshirt.com/wp-content/uploads/2021/12/Luffy-Haki-Sneakers-Custom-Wano-Arc-One-Piece-Shoes-GearAnime.jpg', 'kids'),
('Sanji Sneakers', 50 , ' Diable Jambe Skill One Piece Anime Shoes Fan MN06','https://www.shopeuvi.com/wp-content/uploads/2021/03/sanji-jordan-sneakers-diable-jambe-skill-one-piece-anime-shoes-fan-mn06-gearanime_1500x1500-510x510.jpeg', 'kids'),
('Zoro Sneakers', 200 , ' Boots Three Swords Skill Anime Shoes','https://animecustomshoes.com/wp-content/uploads/2021/03/one-piece-zoro-jordan-sneakers-boots-three-swords-skill-anime-sneakers-gearanime-3_650x.jpeg', 'kids'),
('Ace Sneakers ', 85 , 'Slip On Shoes','https://cdn.animecools.com/data/2106/10/040520/GA2021681730_portgas-d-ace-shoes-boots-fire-fist-skill-one-piece-anime-jordan-sneakers-gearanime-3_1500x1500.jpg', 'kids'),
('Luffy Haki', 102, ' Sneakers Custom Wano Arc One Piece Shoes','https://i0.wp.com/loketshirt.com/wp-content/uploads/2021/12/Luffy-Haki-Sneakers-Custom-Wano-Arc-One-Piece-Shoes-GearAnime.jpg', 'men'),
('Sanji Sneakers', 115 , ' Diable Jambe Skill One Piece Anime Shoes Fan MN06','https://www.shopeuvi.com/wp-content/uploads/2021/03/sanji-jordan-sneakers-diable-jambe-skill-one-piece-anime-shoes-fan-mn06-gearanime_1500x1500-510x510.jpeg', 'men'),
('Zoro Sneakers', 250 , ' Boots Three Swords Skill Anime Shoes','https://animecustomshoes.com/wp-content/uploads/2021/03/one-piece-zoro-jordan-sneakers-boots-three-swords-skill-anime-sneakers-gearanime-3_650x.jpeg', 'men'),
('Ace Sneakers ', 270 , 'Slip On Shoes','https://cdn.animecools.com/data/2106/10/040520/GA2021681730_portgas-d-ace-shoes-boots-fire-fist-skill-one-piece-anime-jordan-sneakers-gearanime-3_1500x1500.jpg', 'men'),
('Luffy Haki', 177, ' Sneakers Custom Wano Arc One Piece Shoes','https://i0.wp.com/loketshirt.com/wp-content/uploads/2021/12/Luffy-Haki-Sneakers-Custom-Wano-Arc-One-Piece-Shoes-GearAnime.jpg', 'women'),
('Sanji Sneakers', 115 , ' Diable Jambe Skill One Piece Anime Shoes Fan MN06','https://www.shopeuvi.com/wp-content/uploads/2021/03/sanji-jordan-sneakers-diable-jambe-skill-one-piece-anime-shoes-fan-mn06-gearanime_1500x1500-510x510.jpeg', 'women'),
('Zoro Sneakers', 30 , ' Boots Three Swords Skill Anime Shoes','https://animecustomshoes.com/wp-content/uploads/2021/03/one-piece-zoro-jordan-sneakers-boots-three-swords-skill-anime-sneakers-gearanime-3_650x.jpeg', 'women'),
('Ace Sneakers ', 40 , 'Slip On Shoes','https://cdn.animecools.com/data/2106/10/040520/GA2021681730_portgas-d-ace-shoes-boots-fire-fist-skill-one-piece-anime-jordan-sneakers-gearanime-3_1500x1500.jpg', 'women');
COMMIT;