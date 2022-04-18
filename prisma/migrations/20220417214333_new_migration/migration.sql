/*
  Warnings:

  - Added the required column `updated` to the `Offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `offers` ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `nin` VARCHAR(191) NULL,
    MODIFY `bvn` VARCHAR(191) NULL;
