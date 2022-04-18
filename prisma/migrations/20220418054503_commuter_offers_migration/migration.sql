/*
  Warnings:

  - You are about to drop the column `park_addres` on the `commuters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `commuters` DROP COLUMN `park_addres`,
    ADD COLUMN `park_address` VARCHAR(191) NULL,
    ADD COLUMN `status` VARCHAR(191) NULL,
    MODIFY `from` VARCHAR(191) NULL,
    MODIFY `to` VARCHAR(191) NULL,
    MODIFY `departure_time` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `commuter_offer_requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `offer_id` INTEGER NOT NULL,
    `commuter_id` INTEGER NOT NULL,
    `accepted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `commuter_offer_requests_offer_id_key`(`offer_id`),
    UNIQUE INDEX `commuter_offer_requests_commuter_id_key`(`commuter_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commuter_offer_requests` ADD CONSTRAINT `commuter_offer_requests_offer_id_fkey` FOREIGN KEY (`offer_id`) REFERENCES `Offers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commuter_offer_requests` ADD CONSTRAINT `commuter_offer_requests_commuter_id_fkey` FOREIGN KEY (`commuter_id`) REFERENCES `commuters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
