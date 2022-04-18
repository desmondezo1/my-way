/*
  Warnings:

  - You are about to alter the column `item_qty` on the `offers` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `wallets` DROP FOREIGN KEY `Wallets_user_id_fkey`;

-- AlterTable
ALTER TABLE `offers` MODIFY `item_qty` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wallets` MODIFY `user_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `commuters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `from` VARCHAR(191) NOT NULL,
    `to` VARCHAR(191) NOT NULL,
    `departure_time` DATETIME(3) NOT NULL,
    `park_addres` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wallets` ADD CONSTRAINT `Wallets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
