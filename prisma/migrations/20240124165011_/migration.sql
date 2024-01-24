/*
  Warnings:

  - You are about to drop the column `id_client` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_id_client_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "id_client",
ADD COLUMN     "client_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
