CREATE TABLE [Users] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [email] nvarchar(255),
  [password] nvarchar(255),
  [isAdmin] bit
)
GO

CREATE TABLE [Events] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [picture] nvarchar(255),
  [artistName] nvarchar(255),
  [supportingArtist] nvarchar(255),
  [price] float,
  [date] nvarchar(255),
  [time] int
)
GO

CREATE TABLE [FAQ] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [userId] int,
  [submission] nvarchar(255)
)
GO

CREATE TABLE [Merch] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [picture] nvarchar(255),
  [name] nvarchar(255),
  [description] nvarchar(255),
  [price] float,
  [quantity] int
)
GO

CREATE TABLE [eventPurchase] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [userId] int,
  [total] int,
  [datePurchased] datetime,
  [eventId] int,
  [price] float
)
GO

CREATE TABLE [merchPurchase] (
  [id] int IDENTITY(1,1) PRIMARY KEY,
  [userId] int,
  [product] nvarchar(255),
  [total] int,
  [datePurchased] datetime,
  [merchId] int,
  [price] float
)
GO

ALTER TABLE [eventPurchase] ADD FOREIGN KEY ([userId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [eventPurchase] ADD FOREIGN KEY ([eventId]) REFERENCES [Events] ([id])
GO

ALTER TABLE [merchPurchase] ADD FOREIGN KEY ([userId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [merchPurchase] ADD FOREIGN KEY ([merchId]) REFERENCES [Merch] ([id])
GO
