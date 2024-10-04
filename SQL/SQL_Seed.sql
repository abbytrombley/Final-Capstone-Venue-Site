-- Insert Users
SET IDENTITY_INSERT [Users] ON;

INSERT INTO [Users] (id, email, password, isAdmin) VALUES
(1, 'john.doe@example.com', 'password123', 0),
(2, 'jane.smith@example.com', 'password456', 1),
(3, 'alice.jones@example.com', 'password789', 0),
(4, 'bob.brown@example.com', 'password101', 0),
(5, 'charlie.green@example.com', 'password202', 1);

SET IDENTITY_INSERT [Users] OFF;
GO

-- Insert Events
SET IDENTITY_INSERT [Events] ON;

INSERT INTO [Events] (id, picture, artistName, supportingArtist, price, date, time) VALUES
(1, 'image1.jpg', 'Artist One', 'Supporting Artist A', 50.00, '2024-01-01', 1800),
(2, 'image2.jpg', 'Artist Two', 'Supporting Artist B', 40.00, '2024-01-02', 1900),
(3, 'image3.jpg', 'Artist Three', 'Supporting Artist C', 60.00, '2024-01-03', 2000),
(4, 'image4.jpg', 'Artist Four', 'Supporting Artist D', 45.00, '2024-01-04', 2100),
(5, 'image5.jpg', 'Artist Five', 'Supporting Artist E', 55.00, '2024-01-05', 2200);

SET IDENTITY_INSERT [Events] OFF;
GO

-- Insert FAQ
SET IDENTITY_INSERT [FAQ] ON;

INSERT INTO [FAQ] (id, userId, submission) VALUES
(1, 1, 'What time does the event start?'),
(2, 2, 'Is there parking available?'),
(3, 3, 'Can I get a refund?'),
(4, 4, 'Are there age restrictions?'),
(5, 5, 'How can I contact support?');

SET IDENTITY_INSERT [FAQ] OFF;
GO

-- Insert Merch
SET IDENTITY_INSERT [Merch] ON;

INSERT INTO [Merch] (id, picture, name, description, price, quantity) VALUES
(1, 'merch1.jpg', 'T-Shirt', 'Cotton T-Shirt with logo', 20.00, 100),
(2, 'merch2.jpg', 'Hoodie', 'Warm hoodie for winter', 40.00, 50),
(3, 'merch3.jpg', 'Mug', 'Ceramic mug with design', 10.00, 200),
(4, 'merch4.jpg', 'Cap', 'Stylish cap with logo', 15.00, 75),
(5, 'merch5.jpg', 'Sticker', 'Vinyl sticker pack', 5.00, 150);

SET IDENTITY_INSERT [Merch] OFF;
GO

-- Insert eventPurchase
SET IDENTITY_INSERT [eventPurchase] ON;

INSERT INTO [eventPurchase] (id, userId, total, datePurchased, eventId, price) VALUES
(1, 1, 1, '2024-01-01 12:00:00', 1, 50.00),
(2, 2, 2, '2024-01-02 13:00:00', 2, 80.00),
(3, 3, 1, '2024-01-03 14:00:00', 3, 60.00),
(4, 4, 1, '2024-01-04 15:00:00', 4, 45.00),
(5, 5, 3, '2024-01-05 16:00:00', 5, 165.00);

SET IDENTITY_INSERT [eventPurchase] OFF;
GO

-- Insert merchPurchase
SET IDENTITY_INSERT [merchPurchase] ON;

INSERT INTO [merchPurchase] (id, userId, product, total, datePurchased, merchId, price) VALUES
(1, 1, 'T-Shirt', 2, '2024-01-01 12:00:00', 1, 40.00),
(2, 2, 'Hoodie', 1, '2024-01-02 13:00:00', 2, 40.00),
(3, 3, 'Mug', 3, '2024-01-03 14:00:00', 3, 30.00),
(4, 4, 'Cap', 1, '2024-01-04 15:00:00', 4, 15.00),
(5, 5, 'Sticker', 5, '2024-01-05 16:00:00', 5, 25.00);

SET IDENTITY_INSERT [merchPurchase] OFF;
GO
